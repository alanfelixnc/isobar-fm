import { useState } from 'react';
import { IconButton, Logo } from '..';
import './styles.css';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
  onSearch: (search: string) => void;
};

function Header({ onSearch }: HeaderProps): JSX.Element {
  const [search, setSearch] = useState<string>('');

  function onClearSearch(): void {
    setSearch('');
  }

  return (
    <div className="header">
      <div className="searchBar">
        <div
          className="clearButton"
          style={{
            visibility: search ? 'visible' : 'hidden',
          }}
        >
          <IconButton icon={faClose} onClick={onClearSearch} />
        </div>
        <input
          placeholder="Pesquisar pelo nome da banda"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <div className="searchButton">
          <IconButton icon={faSearch} onClick={() => onSearch(search)} />
        </div>
      </div>
      <Logo />
    </div>
  );
}

export default Header;
