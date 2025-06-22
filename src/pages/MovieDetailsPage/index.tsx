import { useParams } from 'react-router-dom';
import useFetchDetail from '../../hooks/useFetchDetail';
import { Movie } from '../../types';
import Loader from '../../components/Loader';
import placeholder from '../../assets/images/placeholder.svg';
import './MovieDetailsPage.scss';

const MovieDetailsPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { data: movie, loading } = useFetchDetail<Movie>(
    movieId ? `/movie/${movieId}` : '',
  );

  if (loading) {
    return (
      <main className="movie-details-page">
        <Loader fullscreen />
      </main>
    );
  }

  if (!movie) {
    return (
      <main className="movie-details-page">
        <div className="container">
          <div className="movie-details-page__not-found">
            <h2>Movie not found</h2>
            <p>
              The requested movie could not be loaded. Please try again or go
              back to the home page.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : '';
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : placeholder;

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <main className="movie-details-page">
      <div
        className="backdrop"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      ></div>
      <div className="container">
        <div className="content">
          <div className="poster">
            <img src={posterUrl} alt={movie.title} />
          </div>
          <div className="info">
            <h1>{movie.title}</h1>
            <div className="meta">
              <span>{movie.release_date?.substring(0, 4)}</span>
              <span>{formatRuntime(movie.runtime)}</span>
            </div>
            <div className="genres">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="genre-tag">
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="rating">
              Rating: {movie.vote_average.toFixed(1)} / 10
            </div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MovieDetailsPage;
