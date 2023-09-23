import { useEffect, useState } from 'react';
import { BandCard, Header, ResultSize } from '../../components';
import { Band } from '../../types';
import { bandsApi } from '../../api';

function HomePage(): JSX.Element {
  const [bands, setBands] = useState<Array<Band>>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchBands();
  }, []);

  useEffect(() => {
    fetchBands(search);
  }, [search]);

  async function fetchBands(search?: string): Promise<void> {
    const data: Array<Band> = await bandsApi.fetch(search);
    setBands(data);
  }

  return (
    <>
      <Header onSearch={setSearch} />
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
