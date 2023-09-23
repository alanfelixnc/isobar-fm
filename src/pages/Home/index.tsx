import { useEffect, useState } from 'react';
import { BandCard, Header, OrderBy, ResultSize } from '../../components';
import { Band } from '../../types';
import { bandsApi } from '../../api';

function HomePage(): JSX.Element {
  const [bands, setBands] = useState<Array<Band>>([]);
  const [search, setSearch] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('');

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

  return (
    <>
      <Header onSearch={setSearch} />
      <OrderBy onChange={setOrderBy} />
      {search && <ResultSize size={bands.length} />}
      {bands.map(({ id, image, name, numPlays }) => (
        <BandCard
          key={id}
          id={id}
          image={image}
          name={name}
          numPlays={numPlays}
        />
      ))}
    </>
  );
}

export default HomePage;
