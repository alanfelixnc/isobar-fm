import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type IconButtonProps = {
  icon: IconProp;
};

function IconButton({ icon }: IconButtonProps) {
  return (
    <button className={`iconButton`}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default IconButton;
