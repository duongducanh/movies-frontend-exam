import React from 'react';
import './LoadMoreButton.scss';

interface LoadMoreButtonProps {
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const LoadMoreButton = ({
  onClick,
  loading = false,
  disabled = false,
  className = '',
}: LoadMoreButtonProps) => {
  return (
    <div className={`load-more ${className}`}>
      <button
        type="button"
        className={`load-more__button ${loading ? 'load-more__button--loading' : ''}`}
        onClick={onClick}
        disabled={disabled || loading}
        aria-label={loading ? 'Loading more movies...' : 'Load more movies'}
      >
        {loading ? (
          <>
            <span className="load-more__spinner" />
            Loading...
          </>
        ) : (
          'Load More'
        )}
      </button>
    </div>
  );
};

export default LoadMoreButton;
