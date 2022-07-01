import React from 'react';

import GridCard from '@/components/misc/GridCard';
import PhotoWall from '@/components/misc/PhotoWall';
import Businesses from '@/components/shared/Businesses';
import CtaSpecial from '@/components/shared/CtaSpecial';
import Hero from '@/components/shared/Hero';
import Intro from '@/components/shared/Intro';
import NetherlandsMap from '@/components/shared/NetherlandsMap';
import Quotes from '@/components/shared/Quotes';
import SmartInfo from '@/components/shared/SmartInfo';
import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function ClientInterview() {
  return (
    <Layout
      meta={
        <Meta
          title="Cliëntervaringsonderzoek (CEO) Wmo en Jeugdwet met Ervaringwijzer"
          description="Wil je een samenwerking opzetten om continu klantervaringen te meten maar heb je te weinig tijd om draagvlak te creëren, implementatie te verzorgen en een volledig project te coördineren? Ervaringwijzer realiseert volledige projecten van begin tot eind.."
        />
      }
    >
      <Hero
        title={
          <>
            <h1 className="text-2xl xl:text-5xl">
              Realiseer eenvoudig het{' '}
              <span className="text-cLightBlue-500">
                clientervaringsonderzoek
              </span>{' '}
              met Ervaringwijzer
            </h1>
          </>
        }
        media={
          <>
            <PhotoWall
              photos={{
                mostImportant: {
                  src: '/assets/images/people/daan-01.jpg',
                  alt: 'daan',
                  className: '',
                },
                lessImportant: {
                  src: '/assets/images/people/ward-01.jpg',
                  alt: 'ward',
                  className: '',
                },
                leastImportant: {
                  src: '/assets/images/people/quint-01.jpg',
                  alt: 'quint',
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
          { title: 'hoogste respons', value: '92%' },
          { title: 'continu metingen', value: '22' },
          { title: 'clienten benaderd', value: '6400' },
        ]}
      />
      <Intro
        title={'Wat is het Clientervaringsonderzoek'}
        details={
          <>
            <GridCard
              title="Welke oplossingen biedt Ervaringwijzer"
              className="mb-16  text-cBlue-500"
              data={[
                {
                  text: 'Inhuren professional voor een eenmalig onderzoek',
                  icon: 'assets/images/icons/visueel.svg',
                },
                {
                  text: 'Een platform om continu clientervaringen te meten',
                  icon: 'assets/images/icons/eigen-beheer.svg',
                },
                {
                  text: 'Inhuren professional om continu meting op te zetten',
                  icon: 'assets/images/icons/gemakkelijk.svg',
                },
              ]}
            />
          </>
        }
      >
        <>
          <p className="">
            Wil je een samenwerking opzetten om continu klantervaringen te meten
            maar heb je te weinig tijd om draagvlak te creëren, implementatie te
            verzorgen en een volledig project te coördineren? Ervaringwijzer
            realiseert volledige projecten van begin tot eind.
          </p>
          <p className="mt-5">
            Je kunt professionals van Ervaringwijzer inhuren voor het deel waar
            jij geen expertise in of tijd voor hebt. Of het nu gaat om het
            enthousiasmeren van partnerorganisaties, instructies geven aan
            enkele of tientallen professionals tegelijk of complete onderzoeken
            ontwikkelen. Wij helpen graag!
          </p>
        </>
      </Intro>
      <SmartInfo
        title={''}
        childrenPosition="after"
        infoBoxes={[
          {
            title: 'Inhuren professional',
            description:
              'Als leverancier zijn we op de hoogte van alle mogelijkheden van het platform. Dit komt van pas bij het begeleiden, proactief ondersteunen en enthousiasmeren van gebruikers. Daarnaast kunnen we de nieuwste ontwikkelingen link naar inhuren direct toepassen.',
            logo: {
              data: '/assets/images/icons/visueel.svg',
            },
            media: {
              data: '/assets/images/clientervaringsonderzoek/Ervaringwijzer-01.jpg',
              className: ' aspect-[4/3]  object-cover',
            },
          },
          {
            title: 'Platform Ervaringwijzer',
            description:
              'Onze expertise is divers en multidisciplinair. Wij werken intensief samen met al onze gebruikers. Dit resulteert erin dat wij veel kennis hebben opgedaan in de loop van de jaren. link naar software kennis ten tafel om ook jouw inhuur traject tot een succes te maken.',
            logo: {
              data: '/assets/images/icons/eigen-beheer.svg',
            },
            media: {
              data: '/assets/images/clientervaringsonderzoek/Ervaringwijzer-02.jpg',
              className: ' aspect-[4/3]  object-cover',
            },
          },
          {
            title: 'Intrinsieke motivatie',
            description:
              'Wij hebben baat bij actieve en enthousiaste gebruikers op het platform. Onze intrinsieke motivatie maakt link naar inhuren investeren in het activeren van gebruikers, ontwikkeling van onderzoeken en intensiveren van klantrelaties.',
            logo: {
              data: '/assets/images/icons/gemakkelijk.svg',
            },
            media: {
              data: '/assets/images/clientervaringsonderzoek/Ervaringwijzer-03.gif',
              className: ' aspect-[4/3]  object-cover',
            },
          },
        ]}
      >
        <GridCard
          title="Voordelen"
          className="mb-16  text-cBlue-500"
          data={[
            {
              text: 'Eigen beheer vs. uitbesteden',
              icon: 'assets/images/icons/eigen-beheer.svg',
            },
            {
              text: 'De vrijheid om te onderzoeken wat jij wilt',
              icon: 'assets/images/icons/vrijheid.svg',
            },
            {
              text: 'Eenmalig vs. continu ',
              icon: 'assets/images/icons/eenmalig.svg',
            },
            {
              text: 'Integreer alle betrokken partijen of opereer alleen',
              icon: 'assets/images/icons/integreer.svg',
            },
            {
              text: (
                <>
                  <span className="relative before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-green-500">
                    <span className="relative text-white">hoogste respons</span>
                  </span>
                  <span> door unieke aanpak</span>
                </>
              ),
              icon: 'assets/images/icons/hoogste-respons.svg',
            },
            {
              text: 'Pas aan jouw doelgroep of standaardiseer',
              icon: 'assets/images/icons/pas-aan.svg',
            },
            {
              text: 'Gemakkelijk voor gebruiker en respondent',
              icon: 'assets/images/icons/gemakkelijk.svg',
            },
            {
              text: 'Zowel digitaal als fysiek',
              icon: 'assets/images/icons/digitaal-als-fysiek.svg',
            },
            {
              text: 'Visueel aantrekkelijk',
              icon: 'assets/images/icons/visueel.svg',
            },
          ]}
        />
      </SmartInfo>
      <NetherlandsMap />
      <Quotes />
      <CtaSpecial />
    </Layout>
  );
}

export default ClientInterview;
