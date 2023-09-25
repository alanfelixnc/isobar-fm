import radinhoSad from '../../assets/radinho.svg';
import './styles.css';

function Empty() {
  return (
    <div className="empty">
      <h1>Sem resultados...</h1>
      <img className="emptyImage" src={radinhoSad} />
    </div>
  );
}

export default Empty;
