import { useState, useEffect, useMemo } from 'react';
import movieApi from '../api/movieApi';
import { Movie } from '../types';

interface FetchMoviesResponse {
  results: Movie[];
}

const useFetchMovies = (
  endpoint: string,
  params: Record<string, string | number | boolean> = {},
) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const paramsString = useMemo(() => JSON.stringify(params), [params]);

  useEffect(() => {
    const currentParams = JSON.parse(paramsString);

    if (!endpoint || (endpoint.includes('search') && !currentParams.query)) {
      setMovies([]);
      setLoading(false);
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await movieApi.get<FetchMoviesResponse>(endpoint, {
          params: currentParams,
        });
        setMovies(response.data.results);
        setError(null);
      } catch (err) {
        console.error('API Error:', err);
        setError('Failed to fetch movies.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [endpoint, paramsString]);

  return { movies, loading, error };
};

export default useFetchMovies;
