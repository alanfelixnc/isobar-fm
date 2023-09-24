import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type IconButtonProps = {
  icon: IconProp;
  onClick?: () => void;
};

function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button className={`iconButton`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default IconButton;
