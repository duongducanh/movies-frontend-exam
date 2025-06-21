import './Loader.scss';

interface LoaderProps {
  /**
   * Use this prop to make the loader cover the entire screen.
   * The parent element should be relative for this to work as expected.
   */
  fullscreen?: boolean;
}

const Loader = ({ fullscreen = false }: LoaderProps) => {
  return (
    <div
      className={`loader-container ${fullscreen ? 'loader-container--fullscreen' : ''}`}
    >
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;
