import { useState } from 'react';
import useFetchMovies from '../../hooks/useFetchMovies';
import MovieCard from '../../components/MovieCard';
import Tabs from '../../components/Tabs';
import SkeletonCard from '../../components/SkeletonCard';
import './HomePage.scss';

const TABS = [
  { key: 'now_playing', label: 'Now Playing' },
  { key: 'top_rated', label: 'Top Rated' },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].key);

  const endpoint = `/movie/${activeTab}`;
  const { movies, loading, error } = useFetchMovies(endpoint);

  const title = TABS.find((tab) => tab.key === activeTab)?.label || 'Movies';

  const renderSkeleton = () => {
    return (
      <div className="movie-list">
        {Array.from({ length: 10 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  };

  return (
    <div className="home-page">
      <Tabs options={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      <h1 className="home-page__title">{title}</h1>

      {loading && movies.length === 0 && renderSkeleton()}

      {!loading && !error && movies.length === 0 && (
        <div className="home-page__no-results">No movies found.</div>
      )}

      {movies.length > 0 && (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};
export default HomePage;
