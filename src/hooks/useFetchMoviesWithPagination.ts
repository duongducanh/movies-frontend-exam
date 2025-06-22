import { useState, useEffect, useMemo, useCallback } from 'react';
import movieApi from '../api/movieApi';
import { Movie } from '../types';
import { useToast } from '../contexts/ToastContext';
import { getErrorMessage } from '../utils/errorUtils';

interface FetchMoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

const useFetchMoviesWithPagination = (
  endpoint: string,
  params: Record<string, string | number | boolean> = {},
) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const { addToast } = useToast();

  const paramsString = useMemo(() => JSON.stringify(params), [params]);

  // Reset when endpoint or params change
  useEffect(() => {
    setMovies([]);
    setCurrentPage(1);
    setTotalPages(0);
    setHasMore(false);
    setError(null);
  }, [endpoint, paramsString]);

  // Fetch movies for current page
  const fetchMovies = useCallback(
    async (page: number = 1, append: boolean = false) => {
      const currentParams = JSON.parse(paramsString);

      if (!endpoint || (endpoint.includes('search') && !currentParams.query)) {
        setMovies([]);
        setLoading(false);
        return;
      }

      try {
        if (page === 1) {
          setLoading(true);
        } else {
          setLoadingMore(true);
        }

        const response = await movieApi.get<FetchMoviesResponse>(endpoint, {
          params: { ...currentParams, page },
        });

        const { results, page: responsePage, total_pages } = response.data;

        if (append && page > 1) {
          setMovies((prevMovies) => [...prevMovies, ...results]);
        } else {
          setMovies(results);
        }

        setCurrentPage(responsePage);
        setTotalPages(total_pages);
        setHasMore(responsePage < total_pages);
        setError(null);
      } catch (err) {
        console.error('API Error:', err);
        const errorMessage = getErrorMessage(err);
        setError(errorMessage);
        addToast(errorMessage, 'error');
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [endpoint, paramsString, addToast],
  );

  // Initial fetch
  useEffect(() => {
    fetchMovies(1, false);
  }, [fetchMovies]);

  // Load more function
  const loadMore = useCallback(() => {
    if (!loadingMore && hasMore) {
      fetchMovies(currentPage + 1, true);
    }
  }, [fetchMovies, currentPage, hasMore, loadingMore]);

  return {
    movies,
    loading,
    loadingMore,
    error,
    hasMore,
    currentPage,
    totalPages,
    loadMore,
  };
};

export default useFetchMoviesWithPagination;
