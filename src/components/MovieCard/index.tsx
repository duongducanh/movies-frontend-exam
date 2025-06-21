import { Link } from 'react-router-dom';
import { Movie } from '../../types';
import placeholder from '../../assets/images/placeholder.svg';
import './MovieCard.scss';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : placeholder;

  // Extract year from release_date
  const releaseYear = movie.release_date
    ? movie.release_date.substring(0, 4)
    : '';

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        src={posterUrl}
        alt={movie.title}
        className="movie-card__poster"
        loading="lazy"
      />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        {releaseYear && <p className="movie-card__year">{releaseYear}</p>}
      </div>
    </Link>
  );
};

export default MovieCard;
