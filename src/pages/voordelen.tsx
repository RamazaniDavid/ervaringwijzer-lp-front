import Link from 'next/link';
import React from 'react';

import ContactButton from '@/components/misc/ctaButtons/ContactButton';
import PhotoWall from '@/components/misc/PhotoWall';
import TryButton from '@/components/misc/TryButton';
import CtaPanel from '@/components/shared/CtaPanel';
import Hero from '@/components/shared/Hero';
import Quotes from '@/components/shared/Quotes';
import SmartInfo from '@/components/shared/SmartInfo';
import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function voordelen() {
  return (
    <Layout
      meta={
        <Meta
          title="Voordelen van Ervaringwijzer: modern, laagdrempelig en eenvoudig."
          description="Bekijk de vele voordelen van Ervaringwijzer. De Learning Community, Privacy proof, modern en gebruiksvriendelijk, toegankelijk en eenvoudig."
        />
      }
    >
      <Hero
        title="Betekenisvolle informatie van al je cliënten is slechts een van de voordelen."
        media={
          <>
            <PhotoWall
              photos={{
                mostImportant: {
                  src: '/assets/images/voordelen/pw-2.webp',
                  className: '',
                },
                lessImportant: {
                  src: '/assets/images/voordelen/pw-3.webp',
                },
                leastImportant: {
                  src: '/assets/images/voordelen/pw-1.webp',
                },
              }}
            />
          </>
        }
        className="mx-auto h-[600px] w-full lg:w-11/12 xl:h-auto xl:w-10/12"
      />
      <SmartInfo
        title=""
        infoBoxesPositionOrder={['left', 'right']}
        infoBoxes={[
          {
            title: '',
            description: (
              <>
                <p>
                  In opdracht van de Vereniging van Nederlandse Gemeenten en
                  gemeente Utrecht is Ervaringwijzer ontwikkeld. Een
                  webapplicatie die gemeenten en zorgaanbieders in staat stelt
                  om het cliëntervaringsonderzoek uit te voeren. De vier
                  belangrijkste voordelen zijn op deze pagina uitgelicht.
                  <br />
                  <br />
                  Het platform is ontworpen om het cliëntervaringsonderzoek voor
                  alle betrokkenen te vereenvoudigen. Voor cliënten is
                  Ervaringwijzer een korte digitale vragenlijst die zij op een
                  apparaat naar keuze kunnen beantwoorden op een tijdstip
                  wanneer het hen uitkomt. Gemeenten en organisaties kunnen
                  binnen het dashboard van Ervaringwijzer vragenlijsten maken,
                  uitsturen en real-time de resultaten bekijken.
                </p>
              </>
            ),
            media: {
              data: (
                <>
                  <div className="-ml-48 flex min-h-[14rem] w-full items-center text-4xl font-extrabold">
                    <span>Ervaringwijzer in het kort</span>
                  </div>
                </>
              ),
            },
          },
          {
            title: 'De community',
            description: (
              <p>
                Een{' '}
                <Link href="/learning-community/">
                  <a className="blueLink">netwerk</a>
                </Link>{' '}
                dat groeit en steeds meer kennis en expertise bevat. Werk
                eenvoudig met elkaar samen en link met elkaar met één klik op de
                knop. Eenmaal gelinkt krijg je toegang tot alle voordelen van
                een groot netwerk, van relevante informatie zoals vragenlijsten
                of contactgegevens. Maak gebruik van de best practices van
                anderen om de respons te verhogen of raadpleeg de database om
                waardevolle tips te achterhalen.
              </p>
            ),
            media: {
              data: '/assets/images/voordelen/ib-1.webp',
            },
            logo: {
              data: '/assets/images/icons/organisatie.svg',
            },
          },
          {
            title: 'Toegankelijk',
            description: (
              <p>
                Ervaringwijzer is interactief, laagdrempelig en toegankelijk
                voor alle betrokkenen. Naast een modern{' '}
                <Link href="https://dashboard.ervaring.app/login">
                  <a className="blueLink" target="_blank">
                    dashboard
                  </a>
                </Link>{' '}
                voor gebruikers is er voor alle deelnemers een passende manier
                om hen te benaderen. Zo is er een vergrootfunctie voor ouderen
                en kunnen zij via mail op de computer of tablet reageren.
                Terwijl jongeren beter te bereiken zijn op hun mobiel via
                Whatsapp, QR-codes of SMS.
              </p>
            ),
            media: {
              data: '/assets/images/voordelen/ib-2.png',
            },
            logo: {
              data: '/assets/images/icons/motivatie.svg',
            },
          },
        ]}
      />
      <Quotes />
      <SmartInfo
        title=""
        infoBoxes={[
          {
            title: 'Privacy',
            description: (
              <p>
                Een steeds belangrijker onderwerp en met de komst van de AVG is
                dit een verplichte eis die wij en onze gebruikers stellen aan
                het instrument en het gebruik ervan. Naast het hanteren van de
                normen van ISO27001 en NEN7510 doen wij er alles aan om de
                software en data te beveiligen. Om dit te borgen, wordt het
                ontwikkelproces van de software jaarlijks beoordeeld door een
                onafhankelijke auditorganisatie. Over de resultaten zijn wij
                open en transparant.
              </p>
            ),
            media: {
              data: '/assets/images/voordelen/ib-3.webp',
            },
            logo: {
              data: '/assets/images/icons/icon-privacy.svg',
            },
          },
          {
            title: 'Continu',
            description: (
              <p>
                Ervaringwijzer is 24/7 te gebruiken op elk device en browser.
                Hierdoor kan er continu onderzoek worden gedaan. Daarnaast
                hebben gebruikers real-time inzicht in de resultaten wat het
                mogelijk maakt om te analyseren en direct aanpassingen door te
                voeren. Met behulp van notificaties worden gebruikers op de
                hoogte gehouden en behouden zij het overzicht om gestelde doelen
                te behalen. Lees{' '}
                <Link href="https://ervaringwijzer.crisp.help/nl/article/voordelen-ervaringwijzer-1vdagui/">
                  <a className="blueLink" target="_blank">
                    hier
                  </a>
                </Link>{' '}
                alle voordelen.
              </p>
            ),
            media: {
              data: '/assets/images/voordelen/ib-2.png',
            },
            logo: {
              data: '/assets/images/icons/response.svg',
            },
          },
        ]}
      />
      <CtaPanel
        title={{ text: 'Alle voordelen zelf ervaren?' }}
        Ctas={[TryButton, ContactButton]}
      />
    </Layout>
  );
}

export default voordelen;
