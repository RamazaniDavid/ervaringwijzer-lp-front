import Businesses from '@/components/indexComponents/Businesses';
import Hero from '@/components/indexComponents/Hero';
import Intro from '@/components/indexComponents/Intro';

import { Layout } from '../layout/MainLayout';
import { Meta } from '../layout/Meta';

const Index = () => {
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
    </Layout>
  );
};

export default Index;
