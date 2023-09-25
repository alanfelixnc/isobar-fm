import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { useEffect, useState } from 'react';

type OrderByProps = {
  onChange: (orderBy: string) => void;
};

function OrderBy({ onChange }: OrderByProps): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [orderBy, setOrderBy] = useState<string>('');

  useEffect(() => {
    onChange(orderBy);
  }, [orderBy, onChange]);

  function onOptionClick(option: string): void {
    if (option === orderBy) {
      setOrderBy('');
    } else {
      setOrderBy(option);
    }
  }

  return (
    <div className="orderBy">
      <div
        className={`toggleButton ${showMenu ? 'active' : ''}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <FontAwesomeIcon icon={faSort} width={16} height={16} />
      </div>
      {showMenu && (
        <ul className="optionsMenu">
          <li
            className={`${orderBy === 'name' && 'selected'}`}
            onClick={() => onOptionClick('name')}
          >
            Ordem alfabética
          </li>
          <li
            className={`${orderBy === 'popularity' && 'selected'}`}
            onClick={() => onOptionClick('popularity')}
          >
            Popularidade
          </li>
        </ul>
      )}
    </div>
  );
}

export default OrderBy;
