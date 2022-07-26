import React from 'react';

import Advantages from '@/components/misc/Advantages';
import Businesses from '@/components/shared/Businesses';
import CtaSpecial from '@/components/shared/CtaSpecial';
import Hero from '@/components/shared/Hero';
import Intro from '@/components/shared/Intro';
import NetherlandsMap from '@/components/shared/NetherlandsMap';
import Quotes from '@/components/shared/Quotes';
import CaseSlide from '@/components/softwareComponents/CaseSlide';
import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function Software() {
  return (
    <Layout
      meta={
        <Meta
          title="Beste Software voor Vragenlijsten & Onderzoeken - Ervaringwijzer"
          description="Ervaringwijzer is een laagdrempelig software om kwantitatieve vragenlijsten mee op te stellen en te realiseren. Lees de mogelijkheden!"
        />
      }
    >
      <Hero
        title={
          <>
            <h1 className="px-5 text-3xl xl:text-5xl">
              Het platform om onderzoeken mee te realiseren!
            </h1>
          </>
        }
        media={
          <>
            <div
              className={`relative lg:ml-12 before:left-[60%] from-[#f1f4f8] to-gray-300/70 
         before:absolute  before:top-[5%] before:z-0 before:block before:w-screen
          before:-skew-y-0  before:h-[90%]
      before:rounded-xl before:bg-gradient-to-r before:shadow-lg`}
            >
              <img
                src="/assets/images/software/ipad.png"
                alt="Software"
                className="relative"
              />
            </div>
          </>
        }
        className="mx-auto h-[600px] w-full "
      />
      <Businesses
        businesses={[
          { title: 'actieve gebruikers', value: '1750' },
          { title: 'tevreden klanten', value: '30+' },
          { title: 'onderzoeken ontworpen', value: '257' },
        ]}
        goToRefElement="#intro"
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
      <CaseSlide />
      <NetherlandsMap />
      <Quotes />
      <CtaSpecial />
    </Layout>
  );
}

export default Software;
