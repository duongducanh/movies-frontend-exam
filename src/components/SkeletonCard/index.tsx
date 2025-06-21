import { ViewMode } from '../SegmentedControl';
import './SkeletonCard.scss';

interface SkeletonCardProps {
  viewMode?: ViewMode;
}

const SkeletonCard = ({ viewMode = 'grid' }: SkeletonCardProps) => {
  if (viewMode === 'list') {
    return (
      <div className="skeleton-card skeleton-card--list">
        <div className="skeleton-card__poster skeleton-card__poster--list"></div>
        <div className="skeleton-card__info">
          <div className="skeleton-card__title skeleton-card__title--list"></div>
          <div className="skeleton-card__meta">
            <div className="skeleton-card__year"></div>
            <div className="skeleton-card__rating"></div>
          </div>
          <div className="skeleton-card__overview">
            <div className="skeleton-card__overview-line"></div>
            <div className="skeleton-card__overview-line"></div>
            <div className="skeleton-card__overview-line skeleton-card__overview-line--short"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="skeleton-card skeleton-card--grid">
      <div className="skeleton-card__poster"></div>
      <div className="skeleton-card__info">
        <div className="skeleton-card__title"></div>
        <div className="skeleton-card__year skeleton-card__year--grid"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
