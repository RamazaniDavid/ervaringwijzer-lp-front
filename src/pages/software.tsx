import React from 'react';

import Advantages from '@/components/shared/Advantages';
import Businesses from '@/components/shared/Businesses';
import CtaSpecial from '@/components/shared/CtaSpecial';
import Hero from '@/components/shared/Hero';
import Intro from '@/components/shared/Intro';
import NetherlandsMap from '@/components/shared/NetherlandsMap';
import Quotes from '@/components/shared/Quotes';
import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function Software() {
  return (
    <Layout
      meta={
        <Meta
          title="Ervaringwijzer"
          description="Het platform om onderzoeken mee te realiseren!"
        />
      }
    >
      <Hero
        title="Het platform om onderzoeken mee te realiseren!"
        media={<img src="/assets/images/software/ipad.png" alt="Software" />}
        className="mx-auto h-[600px] w-full lg:w-10/12"
      />
      <Businesses
        businesses={[
          { title: 'actieve gebruikers', value: '1750' },
          { title: 'tevreden klanten', value: '30+' },
          { title: 'onderzoeken ontworpen', value: '257' },
        ]}
      />
      <Intro title={'Hoe werkt het platform?'} details={<Advantages />}>
        <>
          <p className="">
            Met onze software is het mogelijk om snel en eenvoudig alle facetten
            van een goed onderzoek te realiseren. Onze filosofie is een platform
            te maken waarbij gebruikers binnen enkele klikken snappen hoe het
            werkt en direct aan de slag kunnen. Zo hebben we ervoor gekozen om
            te werken met grote teksten, duidelijke knoppen en een logische
            reeks aan acties. Ervaringwijzer is eenvoudig in gebruik zonder in
            te leveren op kwaliteit, diepgaande functies en complexe
            vraagstukken. De software is ontwikkeld om onderzoek te
            vereenvoudigen voor alle betrokkenen, van managers tot respondent.
            Van één pitters tot de grootste organisaties van Nederland.
          </p>
        </>
      </Intro>
      <NetherlandsMap />
      <Quotes />
      <CtaSpecial />
    </Layout>
  );
}

export default Software;
