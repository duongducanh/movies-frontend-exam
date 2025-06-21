import React from 'react';
import { Movie } from '../../types';
import MovieCard from '../MovieCard';
import MovieListItem from '../MovieListItem';
import { ViewMode } from '../SegmentedControl';
import './MovieList.scss';

interface MovieListProps {
  movies: Movie[];
  viewMode: ViewMode;
}

export const MovieList = ({ movies, viewMode }: MovieListProps) => {
  return (
    <div className={`movie-list movie-list--${viewMode}`}>
      {movies.map((movie) =>
        viewMode === 'grid' ? (
          <MovieCard key={movie.id} movie={movie} />
        ) : (
          <MovieListItem key={movie.id} movie={movie} />
        ),
      )}
    </div>
  );
};
