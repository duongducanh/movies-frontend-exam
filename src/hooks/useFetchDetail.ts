import { useState, useEffect } from 'react';
import movieApi from '../api/movieApi';
import { useToast } from '../contexts/ToastContext';
import { getErrorMessage } from '../utils/errorUtils';

const useFetchDetail = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToast } = useToast();

  useEffect(() => {
    if (!endpoint) {
      return;
    }

    const fetchDetail = async () => {
      try {
        setLoading(true);
        const response = await movieApi.get<T>(endpoint);
        setData(response.data);
        setError(null);
      } catch (err) {
        console.error('API Error:', err);
        const errorMessage = getErrorMessage(err);
        setError(errorMessage);
        addToast(errorMessage, 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [endpoint, addToast]);

  return { data, loading, error };
};
export default useFetchDetail;
