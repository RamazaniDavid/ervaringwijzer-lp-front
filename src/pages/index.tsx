import { useQuery } from 'react-query';

import Businesses from '@/components/indexComponents/Businesses';
import Hero from '@/components/indexComponents/Hero';
import Intro from '@/components/indexComponents/Intro';
import MapHelper from '@/components/indexComponents/MapHelper';

import { Layout } from '../layout/MainLayout';
import { Meta } from '../layout/Meta';

const Index = () => {
  const res = useQuery('mapPathes', async () => {
    const response = await fetch('/data/netherland-map-data.json');

    const data = await response.json();
    return data;
  });

  return (
    <Layout
      meta={
        <Meta
          title="Ervaringwijzer"
          description="Met de API van Ervaringwijzer automatiseer je alle onderdelen van Ervaringwijzer. Creeër, verstuur en zie resultaten van alle onderzoeken van ieder deel van de organisatie."
        />
      }
    >
      <Hero />
      <Businesses />
      <Intro />
      <MapHelper mapPathes={res.data} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  // const data = await fetch(
  //   'http://localhost:3000/data/netherland-map-data.json'
  // );
  // const mapPathes = await data.json();

  return {
    props: { mapPathes: null },
  };
};

export default Index;
