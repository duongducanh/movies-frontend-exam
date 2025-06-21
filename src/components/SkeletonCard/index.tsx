import './SkeletonCard.scss';

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card__poster"></div>
      <div className="skeleton-card__title"></div>
    </div>
  );
};

export default SkeletonCard;
