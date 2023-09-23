import './styles.css';

type ResultSizeProps = {
  size: number;
};

function ResultSize({ size }: ResultSizeProps): JSX.Element {
  return <p className="resultSize">{size} resultado(s)</p>;
}

export default ResultSize;
