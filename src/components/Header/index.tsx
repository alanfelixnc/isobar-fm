import { IconButton } from '..';
import './styles.css';
import {
  faAngleLeft,
  faClose,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <IconButton icon={faAngleLeft} />
      <div className="searchBar">
        <div className="clearButton">
          <IconButton icon={faClose} />
        </div>
        <input placeholder="Pesquisar pelo nome da banda" />
        <div className="searchButton">
          <IconButton icon={faSearch} />
        </div>
      </div>
      <div className="logo">
        <span>isobar</span>
        <small>.fm</small>
      </div>
    </div>
  );
}

export default Header;
