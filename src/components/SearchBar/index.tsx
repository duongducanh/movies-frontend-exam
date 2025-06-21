import { useState, useEffect, useRef } from 'react';
import useFetchMovies from '../../hooks/useFetchMovies';
import SearchResults from '../SearchResults';
import './SearchBar.scss';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fetch movies based on the debounced query
  const { movies, loading, error } = useFetchMovies('/search/movie', {
    query: debouncedQuery,
  });

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(inputValue);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  // Effect to handle clicks outside of the search bar to close the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleClear = () => {
    setInputValue('');
    setDebouncedQuery('');
  };

  const showResults =
    isFocused && debouncedQuery.trim() !== '' && inputValue.trim() !== '';

  return (
    <div className="search-bar">
      <div className="search-bar__container" ref={containerRef}>
        <input
          type="text"
          className="search-bar__input"
          placeholder="Search for a movie..."
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        {inputValue && (
          <button
            type="button"
            className="search-bar__clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            &times;
          </button>
        )}
        {showResults && (
          <SearchResults
            query={debouncedQuery}
            movies={movies}
            loading={loading}
            error={error}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
