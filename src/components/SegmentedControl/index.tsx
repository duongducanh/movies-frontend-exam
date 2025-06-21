import React from 'react';
import './SegmentedControl.scss';

export type ViewMode = 'grid' | 'list';

interface SegmentedControlOption {
  value: ViewMode;
  label: string;
  icon: string;
}

interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}

export const SegmentedControl = ({
  options,
  value,
  onChange,
}: SegmentedControlProps) => {
  return (
    <div className="segmented-control">
      {options.map((option) => (
        <button
          key={option.value}
          className={`segmented-control__option ${
            value === option.value ? 'segmented-control__option--active' : ''
          }`}
          onClick={() => onChange(option.value)}
          aria-label={`Switch to ${option.label} view`}
        >
          <span className="segmented-control__icon">{option.icon}</span>
          <span className="segmented-control__label">{option.label}</span>
        </button>
      ))}
    </div>
  );
};
