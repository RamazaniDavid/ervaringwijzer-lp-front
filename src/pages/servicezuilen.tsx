import Link from 'next/link';
import React from 'react';

import BulletList from '@/components/misc/BulletList';
import ContactButton from '@/components/misc/ctaButtons/ContactButton';
import GridCard from '@/components/misc/GridCard';
import TryButton from '@/components/misc/TryButton';
import CtaPanel from '@/components/shared/CtaPanel';
import Hero from '@/components/shared/Hero';
import Intro from '@/components/shared/Intro';
import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function ServiceChangesPage() {
  return (
    <Layout
      meta={
        <Meta
          title="Ervaringwijzer"
          description="Met de API van Ervaringwijzer automatiseer je alle onderdelen van Ervaringwijzer. Creeër, verstuur en zie resultaten van alle onderzoeken van ieder deel van de organisatie."
        />
      }
    >
      <Hero
        title="Servicezuilen"
        media={
          <img
            src="/assets/images/Servicezuilen/hero.webp"
            alt="Servicezuilen"
            className=" mx-auto aspect-auto lg:h-[calc(100vh-20rem)]"
          />
        }
        mediaPosition="center"
        className=""
      />

      <Intro
        title="Zonder moeite klantervaringen ophalen"
        subtitle={
          <>
            <p className="">
              Met Servicezuilen van Ervaringwijzer kan je direct klantervaringen
              ophalen bij bezoekers op locatie. Via een touchscreen kunnen zij
              hun ervaring delen over: diensten, producten, processen, locaties
              en medewerkers! Welke vragen worden getoond dat bepaal jij en
              zetten wij klaar in de app. Het formaat, design en de eenvoud
              maakt dat deze servicezuil onmisbaar op iedere locatie!
              <br />
              <br />
              <br />
              Wellicht komen jouw cliënten met regelmaat over de vloer, of is
              jouw locatie inherent aan uw service. Benader jouw cliënten,
              patiënten en klanten waar het er het meest toe doet: op locatie.
              Met een serivcezuil haal je makkelijk feedback op, op een moment
              en locatie waarvan je zeker weet dat je cliënten er tijd voor
              hebben. De respons op de service kan gewoon gecombineerd worden in
              het Ervaringwijzer dashboard met de onderzoeken die je er per
              post, SMS, e-mail (etc.) ook hebt uitgestuurd in Ervaringwijzer.
            </p>
          </>
        }
        details={[
          <>
            <BulletList
              items={[
                'Huisartsen met een wachtkamer',
                'Doorstroomlocaties met hoge bezoekersaantallen',
                'Stadskantoren met een wachtruimte',
                'Bedrijven met een standplaats',
              ]}
              title={{ text: 'Een servicezuil is met name geschikt voor:' }}
              className="text-center"
            />
          </>,
          <>
            <br />
            <br />
            <p className="text-center">
              Interesse in servicezuilen op jouw locatie? Neem{' '}
              <Link href="https://www.ervaringwijzer.nl/contact/">
                <a className="blueLink" target="_blank">
                  contact
                </a>
              </Link>{' '}
              op!
            </p>
          </>,
          <>
            <GridCard
              title=""
              itemContainerClassName=" text-left lg:!basis-1/2"
              items={[
                {
                  text: 'Servicezuilen',
                  icon: 'assets/images/icons/Servicezuil.svg',
                  description: (
                    <>
                      <p>
                        De servicezuil is groot, robuust en hufterproof. Dankzij
                        het groote scherm is deze toegankelijk voor iedere
                        doelgroep!
                      </p>
                    </>
                  ),
                },
                {
                  text: 'Handpomp en desinfectiegel',
                  icon: 'assets/images/icons/Handpomp-en-desinfectiegel.svg',
                  description: (
                    <>
                      <p>
                        In het design zit een handpomp verwerkt waarmee
                        bezoekers hun handen kunnen desinfecteren. Anno 2021 een
                        must!
                      </p>
                    </>
                  ),
                },
                {
                  text: 'Installatie en instructie',
                  icon: 'assets/images/icons/Installatie-en-instructie.svg',
                  description: (
                    <>
                      <p>
                        Wij brengen, installeren en geven een instructie van de
                        werking van de servicezuil. Zo bent u in één klap zo
                        ervaren als wij zijn.
                      </p>
                    </>
                  ),
                },
                {
                  text: 'Service level agreement',
                  icon: 'assets/images/icons/Service-level-agreement.svg',
                  description: (
                    <>
                      <p>
                        Wij sluiten een Service Level Agreement af voor zowel
                        soft- als hardware zodat u te allen tijden snel geholpen
                        wordt!
                      </p>
                    </>
                  ),
                },
                {
                  text: 'Alles op één platform',
                  icon: 'assets/images/icons/nieuwsbrief.svg',
                  description: (
                    <>
                      <p>
                        Combineer onderzoeken op de servicezuil eenvoudig in ons
                        dashboard met papieren en digitale onderzoeken. Naast de
                        servicezuil kun je dus ook gebruik maken van{' '}
                        <Link href="/patienttevredenheidsonderzoek/">
                          <a className="blueLink" target="_blank">
                            de andere functionaliteiten van Ervaringwijzer
                          </a>
                        </Link>{' '}
                        :
                        <br />
                        <br />
                        <br />
                        – Conform AVG.
                        <br />
                        – Real-time inzicht in resultaten.
                        <br />
                        – 24/7 ondersteuning.
                        <br />– Een brede mogelijkheid aan{' '}
                        <Link href="/patienttevredenheidsonderzoek/">
                          <a className="blueLink" target="_blank">
                            uitvraag-methoden.
                          </a>
                        </Link>{' '}
                      </p>
                    </>
                  ),
                },
                {
                  text: 'Bekijk voorbeeld',
                  icon: 'assets/images/icons/digitaal-als-fysiek.svg',
                  description: (
                    <>
                      <p>
                        Bekijk direct ons{' '}
                        <Link href="https://api.ervaring.app/v1/invitation/10c73c31-c012-4d59-8743-1770a8921840/join">
                          <a className="blueLink" target="_blank">
                            voorbeeld.
                          </a>
                        </Link>{' '}
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </>,
          <>
            <div className="flex flex-col justify-center lg:flex-row">
              <div className="flex-auto">Benodigd:</div>
              <div className="flex-auto"></div>
              <div className="flex-auto"></div>
            </div>
          </>,
        ]}
      />
      <CtaPanel
        title={{ text: 'Alle voordelen zelf ervaren?' }}
        Ctas={[TryButton, ContactButton]}
      />
    </Layout>
  );
}

export default ServiceChangesPage;
