import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import './Header.scss';

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header__content">
        <Link to="/" className="main-header__logo">
          Movies
        </Link>
        <div className="main-header__search">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};
export default Header;
