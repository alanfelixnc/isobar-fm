import { useEffect, useState } from 'react';
import { BandCard, Header, OrderBy, ResultSize } from '../../components';
import { Band } from '../../types';
import { bandsApi } from '../../api';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function HomePage(): JSX.Element {
  const [bands, setBands] = useState<Array<Band>>([]);
  const [search, setSearch] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBands();
  }, []);

  useEffect(() => {
    fetchBands(search, orderBy);
  }, [search, orderBy]);

  async function fetchBands(search?: string, orderBy?: string): Promise<void> {
    const data: Array<Band> = await bandsApi.fetch(search, orderBy);
    setBands(data);
  }

  function onClickBand(id: string): void {
    navigate(id);
  }

  return (
    <>
      <Header onSearch={setSearch} />
      <OrderBy onChange={setOrderBy} />
      {search && <ResultSize size={bands.length} />}
      <div className="bandsGrid">
        {bands.map(({ id, image, name, numPlays }) => (
          <BandCard
            key={id}
            onClick={() => onClickBand(id)}
            image={image}
            name={name}
            numPlays={numPlays}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
