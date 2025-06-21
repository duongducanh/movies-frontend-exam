import './Tabs.scss';

interface TabOption {
  key: string;
  label: string;
}

interface TabsProps {
  options: TabOption[];
  activeTab: string;
  onTabChange: (tabKey: string) => void;
}

const Tabs = ({ options, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="tabs">
      {options.map((option) => (
        <button
          key={option.key}
          className={`tabs__button ${activeTab === option.key ? 'tabs__button--active' : ''}`}
          onClick={() => onTabChange(option.key)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
