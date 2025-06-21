import { Link } from 'react-router-dom';
import { Movie } from '../../types';
import placeholder from '../../assets/images/placeholder.svg';
import Loader from '../Loader';
import './SearchResults.scss';

interface SearchResultsProps {
  query: string;
  movies: Movie[];
  loading: boolean;
}

const SearchResultItem = ({ movie }: { movie: Movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
    : placeholder;

  return (
    <Link to={`/movie/${movie.id}`} className="search-result-item">
      <img
        src={posterUrl}
        alt={movie.title}
        className="search-result-item__poster"
        loading="lazy"
      />
      <div className="search-result-item__info">
        <h4 className="search-result-item__title">{movie.title}</h4>
        <p className="search-result-item__date">
          {movie.release_date?.substring(0, 4)}
        </p>
      </div>
    </Link>
  );
};

const SearchResults = ({ query, movies, loading }: SearchResultsProps) => {
  let content;

  if (movies.length > 0) {
    content = (
      <div
        className={`search-results__list ${
          loading ? 'search-results__list--loading' : ''
        }`}
      >
        {movies.map((movie) => (
          <SearchResultItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  } else if (loading) {
    content = <Loader />;
  } else {
    content = (
      <div className="search-results__message">
        No results found for &quot;<strong>{query}</strong>&quot;
      </div>
    );
  }

  return <div className="search-results">{content}</div>;
};

export default SearchResults;
