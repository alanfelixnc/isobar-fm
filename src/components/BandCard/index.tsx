import { Id, URL } from '../../types';
import './styles.css';

type BandCardProps = {
  id: Id;
  name: string;
  image: URL;
  numPlays: number;
};

function BandCard({ name, image, numPlays }: BandCardProps): JSX.Element {
  return (
    <div className="bandCard">
      <img src={image} />
      <div className="info">
        <h1>{name}</h1>
        <h2>{numPlays.toLocaleString()} plays</h2>
      </div>
    </div>
  );
}

export default BandCard;
