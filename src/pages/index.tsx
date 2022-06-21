import Hero from '@/components/indexComponents/Hero';
import Advantages from '@/components/shared/Advantages';
import Businesses from '@/components/shared/Businesses';
import CtaSpecial from '@/components/shared/CtaSpecial';
import Intro from '@/components/shared/Intro';
import NetherlandsMap from '@/components/shared/NetherlandsMap';
import Quotes from '@/components/shared/Quotes';

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
      <Businesses
        businesses={[
          {
            title: 'onderzoeken verricht',
            value: '264',
          },
          {
            title: 'tevreden klanten',
            value: '30+',
          },
          {
            title: 'hoogste respons',
            value: '92%',
          },
        ]}
      />
      <Intro title={'Wat is Ervaringwijzer'} details={<Advantages />}>
        <>
          <p className="">
            Wij zijn een jonge organisatie die sinds 2017 bezig is om het beste
            platform te ontwikkelen waarmee onderzoeken op een moderne manier
            gemaakt, verstuurt en bekeken kunnen worden. Ons platform brengt
            alle facetten voor een goed onderzoek bijeen op één simpele plek.
          </p>
          <p className="">
            Wij geloven dat je betekenisvolle informatie kunt ophalen door samen
            te werken met elkaar en techniek te combineren met kennis en
            ervaring.
          </p>
          <p className="mt-5">
            Heb je geen tijd om zelf aan de slag te gaan? Geen nood naast
            software bieden wij ook professionals om jouw onderzoeken te
            realiseren van begin tot eind!
          </p>
        </>
      </Intro>
      <NetherlandsMap />
      <Quotes />
      <CtaSpecial />
    </Layout>
  );
};

export default Index;
