import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types';
import placeholder from '../../assets/images/placeholder.svg';
import './MovieListItem.scss';

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem = ({ movie }: MovieListItemProps) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w154${movie.poster_path}`
    : placeholder;

  // Extract year from release_date
  const releaseYear = movie.release_date
    ? movie.release_date.substring(0, 4)
    : '';

  return (
    <Link to={`/movie/${movie.id}`} className="movie-list-item">
      <img
        src={posterUrl}
        alt={movie.title}
        className="movie-list-item__poster"
        loading="lazy"
      />
      <div className="movie-list-item__info">
        <h3 className="movie-list-item__title">{movie.title}</h3>
        <div className="movie-list-item__meta">
          {releaseYear && (
            <span className="movie-list-item__year">{releaseYear}</span>
          )}
          <span className="movie-list-item__rating">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        </div>
        <p className="movie-list-item__overview">
          {movie.overview || 'No overview available.'}
        </p>
      </div>
    </Link>
  );
};

export default MovieListItem;
