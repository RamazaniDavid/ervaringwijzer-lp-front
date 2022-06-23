import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import PhotoWall from '@/components/misc/PhotoWall3';
import TextBlock from '@/components/misc/TextBlock';
import Businesses from '@/components/shared/Businesses';
import CtaSpecial from '@/components/shared/CtaSpecial';
import Hero from '@/components/shared/Hero';
import NetherlandsMap from '@/components/shared/NetherlandsMap';
import Quotes from '@/components/shared/Quotes';
import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function Hire() {
  const router = useRouter();
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
        title={
          <>
            <h1 className="text-3xl xl:text-5xl">
              <span className="text-[#0085ff]">
                Continu klantervaringen meten?
              </span>{' '}
              Huur ons in!
            </h1>
          </>
        }
        media={
          <>
            <PhotoWall
              photos={[
                {
                  src: `${router.basePath}/assets/images/people/daan.webp`,
                  alt: 'daan',
                },
                {
                  src: `${router.basePath}/assets/images/people/ward.webp`,
                  alt: 'ward',
                },
                {
                  src: `${router.basePath}/assets/images/people/quint.webp`,
                  alt: 'quint',
                },
                {
                  src: `${router.basePath}/assets/images/people/daan.webp`,
                  alt: 'daan',
                },
              ]}
            />
          </>
        }
        className="mx-auto h-[600px] w-full lg:w-11/12 xl:h-auto xl:w-10/12"
      />
      <Businesses
        businesses={[
          { title: 'uur aan ervaring', value: '500+' },
          { title: 'tevreden klanten', value: '10+' },
          { title: 'collega’s begeleidt', value: '244' },
        ]}
      />
      <TextBlock
        title={'Volledige projecten van begin tot eind'}
        className="rounded-2xl bg-gray-200 p-4 pb-12"
      >
        <>
          <p className="">
            Wil je een samenwerking opzetten om continu klantervaringen te meten
            maar heb je te weinig tijd om draagvlak te creëren, implementatie te
            verzorgen en een volledig project te coördineren?Ervaringwijzer
            realiseert volledige projecten van begin tot eind.
          </p>
          <p className="mt-5">
            Je kunt professionals van Ervaringwijzer inhuren voor het deel waar
            jij geen expertise in of tijd voor hebt. Of het nu gaat om het
            enthousiasmeren van partnerorganisaties, instructies geven aan
            enkele of tientallen professionals tegelijk of het platform volledig
            te implementeren binnen jouw organisatie. Wij bieden ondersteuning
            die bij je past.
          </p>
        </>
      </TextBlock>
      <TextBlock
        title={'Hoe we dit doen?'}
        className="rounded-2xl bg-gray-200 p-4 pb-12"
      >
        <>
          <p className="">
            Wij bieden een compleet inhuurtraject om van begin tot eind elk
            facet te realiseren. Hiervoor stellen wij een compleet projectplan
            op waar iedere stap duidelijk en concreet in staat beschreven. Na
            overleg leggen wij de hele planning vast zodat we een stip op de
            horizon hebben om naartoe te bewegen.
          </p>
          <p className="mt-5">
            Wij zijn de kenners van ons platform en weten welke mogelijkheden er
            zijn om het traject van inhuren succesvol te maken. Daarnaast
            brengen we de best practices in van meer dan 25 gemeenten, 30
            zorgaanbieders en stichtingen om een onderzoek op te zetten dat
            aansluit bij de belevingswereld van de respondent. Een mooi
            voorbeeld is{' '}
            <Link href="https://www.linkedin.com/feed/update/urn:li:activity:6815893719619813377/">
              <a
                className="text-blue-600 underline hover:animate-pulse"
                target={'_blank'}
              >
                de case van Delft Support
              </a>
            </Link>{' '}
            of{' '}
            <Link href="https://www.zorginzou.nl/documenten/informatie-rond-nieuwe-inkoopronde/inkoopvisie/435-nota-inkoopvisie-zou-1/file/">
              <a
                className="text-blue-600 underline hover:animate-pulse"
                target={'_blank'}
              >
                Regio Zuidoost Utrecht
              </a>
            </Link>{' '}
            die zelfs in de inkoop Ervaringwijzer hebben opgenomen.
          </p>
        </>
      </TextBlock>
      <NetherlandsMap />
      <Quotes />
      <CtaSpecial />
    </Layout>
  );
}

export default Hire;
