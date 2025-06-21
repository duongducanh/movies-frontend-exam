import React from 'react';
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

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} className="movie-card__poster" />
      <h3 className="movie-card__title">{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
