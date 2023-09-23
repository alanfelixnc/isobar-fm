import { useEffect, useState } from 'react';
import { BandCard, Header } from '../../components';
import { Band } from '../../types';
import { bandsApi } from '../../api';

function HomePage(): JSX.Element {
  const [bands, setBands] = useState<Array<Band>>([]);

  useEffect(() => {
    fetchBands();
  }, []);

  async function fetchBands() {
    const data: Array<Band> = await bandsApi.fetch();
    setBands(data);
  }

  return (
    <>
      <Header />
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
