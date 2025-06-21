import { useSearchParams } from 'react-router-dom';
import useFetchMovies from '../../hooks/useFetchMovies';
import Tabs from '../../components/Tabs';
import SkeletonCard from '../../components/SkeletonCard';
import { SegmentedControl, ViewMode } from '../../components/SegmentedControl';
import { MovieList } from '../../components/MovieList';
import './HomePage.scss';

const TABS = [
  { key: 'now_playing', label: 'Now Playing' },
  { key: 'top_rated', label: 'Top Rated' },
];

const VIEW_OPTIONS = [
  { value: 'grid' as ViewMode, label: 'Grid', icon: '⊞' },
  { value: 'list' as ViewMode, label: 'List', icon: '☰' },
];

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get tab from URL params, default to 'now_playing'
  const activeTab = searchParams.get('tab') || 'now_playing';

  // Get view mode from URL params, default to 'grid'
  const viewMode = (searchParams.get('view') as ViewMode) || 'grid';

  const endpoint = `/movie/${activeTab}`;
  const { movies, loading } = useFetchMovies(endpoint);

  const title = TABS.find((tab) => tab.key === activeTab)?.label || 'Movies';

  const handleTabChange = (newTab: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (newTab === 'now_playing') {
        // Remove 'tab' param when it's the default
        newParams.delete('tab');
      } else {
        newParams.set('tab', newTab);
      }
      return newParams;
    });
  };

  const handleViewModeChange = (newViewMode: ViewMode) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (newViewMode === 'grid') {
        // Remove 'view' param when it's the default (grid)
        newParams.delete('view');
      } else {
        newParams.set('view', newViewMode);
      }
      return newParams;
    });
  };

  const renderSkeleton = () => {
    return (
      <div className={`movie-list movie-list--${viewMode}`}>
        {Array.from({ length: 10 }).map((_, index) => (
          <SkeletonCard key={index} viewMode={viewMode} />
        ))}
      </div>
    );
  };

  return (
    <div className="home-page">
      <div className="home-page__header">
        <Tabs
          options={TABS}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <SegmentedControl
          options={VIEW_OPTIONS}
          value={viewMode}
          onChange={handleViewModeChange}
        />
      </div>

      <h1 className="home-page__title">{title}</h1>

      {loading && movies.length === 0 && renderSkeleton()}

      {!loading && movies.length === 0 && (
        <div className="home-page__no-results">No movies found.</div>
      )}

      {movies.length > 0 && <MovieList movies={movies} viewMode={viewMode} />}
    </div>
  );
};
export default HomePage;
