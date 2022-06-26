import Link from 'next/link';
import React from 'react';

import PhotoWall from '@/components/misc/PhotoWall';
import Businesses from '@/components/shared/Businesses';
import CtaSpecial from '@/components/shared/CtaSpecial';
import Hero from '@/components/shared/Hero';
import NetherlandsMap from '@/components/shared/NetherlandsMap';
import Quotes from '@/components/shared/Quotes';
import SmartInfo from '@/components/shared/SmartInfo';
import TextBlockSection from '@/components/shared/TextBlockSection';
import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function Hire() {
  return (
    <Layout
      meta={
        <Meta
          title="Volledige projecten van begin tot eind - Ervaringwijzer"
          description="Wij bieden een compleet inhuurtraject om van begin tot eind elk facet te realiseren. Hiervoor stellen wij een compleet projectplan op waar iedere stap duidelijk en concreet in staat beschreven."
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
              photos={{
                mostImportant: {
                  src: '/assets/images/people/daan.webp',
                  alt: 'daan',
                  className: '',
                },
                lessImportant: {
                  src: '/assets/images/people/quint.webp',
                  alt: 'quint',
                  className: '',
                },
                leastImportant: {
                  src: '/assets/images/people/ward.webp',
                  alt: 'ward',
                  className: '',
                },
              }}
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
        goToRefElement="#text-block"
      />
      <TextBlockSection
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
      </TextBlockSection>
      <SmartInfo
        title={'Voordelen inhuren'}
        infoBoxies={[
          {
            title: 'Intrinsieke motivatie',
            description:
              'Wij hebben baat bij actieve en enthousiaste gebruikers op het platform. Dit maakt dat wij intrinsiek gemotiveerd zijn en veel tijd investeren in het activeren van gebruikers, ontwikkeling van onderzoeken en intensiveren van klantrelaties. Wij dragen dezelfde visie uit welke wij essentieel achten willen we dit project tot een succes maken.',
            logo: {
              data: '/assets/images/icons/motivatie.svg',
            },
            media: { data: '/assets/images/inhuren/Ervaringwijzer-01.jpg' },
          },
          {
            title: 'Technische kennis',
            description:
              'Als leverancier zijn we op de hoogte van alle mogelijkheden van het platform. Wij passen de nieuwste functionaliteiten direct toe en dat geeft een voorsprong bij het begeleiden, proactief ondersteunen en enthousiasmeren van gebruikers.',
            logo: {
              data: '/assets/images/icons/Tandwieltjes-EW.svg',
            },
            media: { data: '/assets/images/inhuren/Ervaringwijzer-02.webp' },
          },
          {
            title: 'Organisatorische kennis',
            description:
              'Onze expertise op het gebied van organisaties en organiseren is groot en divers dankzij de intensieve samenwerking met al onze gebruikers. Dit geldt voor zowel kleine als zeer grote organisaties. steeds weer brengen wij de belangrijke en vaak dure geleerde lessen ten tafel om tijd, energie en kosten te besparen voor het project!',
            logo: {
              data: '/assets/images/icons/organisatie.svg',
            },
            media: { data: '/assets/images/inhuren/Ervaringwijzer-03.webp' },
          },
          {
            title: 'Promotieacties',
            description:
              'Wij doen er alles aan om het project onder de aandacht te brengen bij alle betrokkenen. Van activerende berichtjes op het intranet tot ludieke acties. Onze ervaring is dat een continu meting meer vergt dan een enkele instructie!',
            logo: {
              data: '/assets/images/icons/Promotieacties.svg',
            },
            media: { data: '/assets/images/inhuren/Ervaringwijzer-04.webp' },
          },
          {
            title: 'Volledig transparant',
            description:
              'Wij maken onze werkwijze volledig transparant en brengen jou, indien gewenst, op de hoogte van iedere stap van het onderzoek. Wij zijn betrokken, altijd bereikbaar en vinden dat duidelijke communicatie essentieel is wanneer partijen ons inhuren.',
            logo: {
              data: '/assets/images/icons/transparant-1.svg',
            },
            media: { data: '/assets/images/inhuren/Ervaringwijzer-05.webp' },
          },
        ]}
      />
      <TextBlockSection
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
      </TextBlockSection>
      <NetherlandsMap />
      <Quotes />
      <CtaSpecial />
    </Layout>
  );
}

export default Hire;
