import Link from 'next/link';
import React from 'react';

import BulletList from '@/components/misc/BulletList';
import ScheduleMeeting from '@/components/misc/ctaButtons/ScheduleMeeting';
import InfoBoxWithMedia from '@/components/misc/InfoBoxWithMedia';
import TryButton from '@/components/misc/TryButton';
import CtaPanel from '@/components/shared/CtaPanel';
import Hero from '@/components/shared/Hero';
import QuestionSlider from '@/components/shared/QuestionSlider';
import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function Patienttevredenheidsonderzoek() {
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
        title={
          <>
            <span className="text-base md:text-xl lg:text-2xl xl:text-4xl">
              Patiënttevredenheidsonderzoek
            </span>
          </>
        }
        subtitle={
          <p className="mt-12 w-10/12 text-lg">
            Fysiotherapeuten, huisartsen en apothekers willen sturende
            informatie om de dagelijkse gang van zaken in de praktijk te
            verbeteren. Om dit te realiseren wordt een
            patiënttevreden­heidsonderzoek gerealiseerd. Soms in verplichte vorm
            zoals de <span className="font-bold">PREM</span>, andere keren met
            een vragenlijst die aansluit bij de patiënten van de professionals.
            Met Ervaringwijzer zijn alle denkbare vormen van
            patiënttevreden­heidsonderzoeken mogelijk van eenmalig{' '}
            <span className="font-bold">uitbesteden </span>, continu{' '}
            <span className="font-bold">zelf uitvoeren</span> of{' '}
            <span className="font-bold">samenwerken</span> in een netwerk van
            professionals.
          </p>
        }
        media={
          <img
            src="/assets/images/patienttevredenheidsonderzoek/ervaringwijzer-01.png"
            alt="Software"
          />
        }
        className="mx-auto h-[850px] w-full md:h-[600px] lg:w-10/12"
      />
      <QuestionSlider
        title="Hoe wil jij het onderzoek realiseren?"
        questions={[
          {
            title: 'Uitbesteden',
            slide: (
              <>
                <InfoBoxWithMedia
                  title="Patiënttevreden­heidsonderzoek een verkennend gesprek"
                  description={
                    <>
                      <p>
                        Voor zorgaanbieders die hun kostbare tijd besteden aan
                        het verlenen van zorg en toch de wens hebben om een
                        patiënttevredenheidsonderzoek te realiseren, kan
                        Ervaringwijzer de volledige zorg omtrent het
                        patiënttevredenheidsonderzoek uit handen nemen. Tijdens
                        een eerste gesprek zullen alle wensen en beschikbare
                        middelen met elkaar bespreken.
                      </p>
                    </>
                  }
                  mediaPosition="left"
                  media={{
                    data: '/assets/images/patienttevredenheidsonderzoek/slide1-01.gif',
                  }}
                  details={
                    <>
                      <ScheduleMeeting />
                    </>
                  }
                />
                <div
                  className="mx-auto flex w-11/12 flex-col space-y-6 text-left text-base 
                text-cUclaBlue-400 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12"
                >
                  <h2 className="text-4xl font-extrabold text-cBlue-500">
                    Een patiënttevredenheidsonderzoek uitbesteden, een project
                    op zichzelf.
                  </h2>
                  <p>
                    Wij beschouwen ieder patiënttevredenheidsonderzoek als een
                    project dat de volledige aandacht verdient. Het scheppen van
                    de juiste verwachting is belangrijk en daarom nemen we graag
                    een paar punten met je door.
                    <br />
                    <br />
                  </p>
                  <h3 className="text-2xl font-bold text-cBlue-500">
                    Het onderzoeksdoel
                  </h3>
                  <p>
                    Vooraf vragen wij graag naar het doel van het onderzoek. Dit
                    bepaalt in grote mate de andere punten. Tevens geeft dit
                    inzicht voor beide partijen om elk moment in het proces
                    terug te grijpen naar het uiteindelijke doel van het
                    onderzoek.
                    <br />
                    <br />
                  </p>
                  <h3 className="text-2xl font-bold text-cBlue-500">
                    De vragenlijst voor patiënten
                  </h3>
                  <p>
                    Wij zijn benieuwd welke vragenlijst je wilt gebruiken voor
                    jouw patiënten en wat de motivatie daarachter is. Ben je
                    verplicht om de{' '}
                    <a
                      href="https://ervaringwijzer.crisp.help/nl/article/de-prem-vragenlijst-voor-fysiotherapie-139vnpg/"
                      target="_blank"
                      rel="noreferrer"
                      className="blueLink"
                    >
                      PREM
                    </a>{' '}
                    te gebruiken? Geen enkel probleem!
                    <br />
                    <br />
                    <br />
                    In het geval je een eigen vragenlijst wilt opstellen is dat
                    uiteraard ook mogelijk. In het dashboard van Ervaringwijzer
                    is het mogelijk om elk soort vragenlijst te ontwerpen. Een
                    vragenlijst kan bestaan uit: stellingen, open, gesloten en
                    meerkeuzevragen.
                    <br />
                    <img
                      src="/assets/images/patienttevredenheidsonderzoek/slide1-02.png"
                      alt="Vragenlijst"
                    />
                    In onze{' '}
                    <a
                      href="https://ervaringwijzer.crisp.help/nl/category/bibliotheek-2jrmzc/"
                      target="_blank"
                      rel="noreferrer"
                      className="blueLink"
                    >
                      database
                    </a>{' '}
                    staan diverse vragenlijsten die getest en gevalideerd zijn.
                    Deze worden actief gebruikt door huisartsen, zorgaanbieders,
                    en praktijken. Wij willen echter een vragenlijst gebruiken
                    die aansluit bij jouw doelgroep en wensen.
                  </p>
                  <h3 className="text-2xl font-bold text-cBlue-500">
                    De doelgroep van de vragenlijst:
                  </h3>
                  <p>
                    Wat is de doelgroep? Hoe is de doelgroep opgebouwd? Zijn het
                    senioren patiënten? Nieuwe patiënten van de praktijk? Samen
                    stellen wij een strategie op die bij jouw doelgroep past.
                    Daarbij komen ook uitzonderingen binnen deze doelgroep aan
                    bod. Zo stel jij de meest relevante vragen!
                  </p>
                  <h3 className="text-2xl font-bold text-cBlue-500">
                    De manier van uitvraag
                  </h3>
                  <p>
                    Er zijn diverse manieren hoe wij uw patiënt kunnen
                    benaderen. Een vragenlijst kan worden gestuurd via:
                  </p>
                  <BulletList
                    items={[
                      'Email',
                      'SMS',
                      'WhatsApp',
                      'Servicezuil',
                      'Papier',
                      'Deelbare link online.',
                    ]}
                  />
                  <p>
                    <br />
                    <br />
                    We nemen graag alle opties door zodat je je goed bewust bent
                    van alle voor- en nadelen. Zo sluit het onderzoek nog beter
                    aan bij de belevingswereld van jouw patiënten. Daarnaast
                    willen we graag alle beschikbare data ontvangen om
                    vervolgens respondenten te kunnen benaderen.
                  </p>
                  <h3 className="text-2xl font-bold text-cBlue-500">
                    Een duidelijke planning
                  </h3>
                  <p>
                    Bij het uitbesteden van een patiëntervaringsonderzoek is de
                    planning van het project onmisbaar. Hier hebben we drie
                    vragen over: wanneer zetten we het
                    patiënttevredenheidsonderzoek uit, ronden we het af en
                    leveren we de resultaten op? Wij maken een planning en delen
                    deze zodat beide partijen inzicht hebben in het proces.
                  </p>
                  <h3 className="text-2xl font-bold text-cBlue-500">
                    Een overzichtelijke rapportage
                  </h3>
                  <p>
                    Graag bespreken we de wensen omtrent de rapportage van het
                    patiëntervaringsonderzoek. In het dashboard van
                    Ervaringwijzer kun je altijd de resultaten bekijken. Een
                    uitgebreide rapportage zal eenmalig worden opgesteld.
                  </p>
                  <h3 className="text-2xl font-bold text-cBlue-500">
                    Samen kijken naar de toekomst
                  </h3>
                  <p>
                    We evalueren het gehele traject om bij een positieve
                    ervaring een vervolg te geven aan de samenwerking. Tevens
                    zouden wij het leuk vinden om jullie ervaringen te delen
                    binnen de learning community in de vorm van een review,
                    artikel of quote.
                    <br />
                    <br />
                    <br />
                    Op basis van je antwoorden maken wij een plan van aanpak om
                    het patiënttevredenheidsonderzoek te realiseren. Het is onze
                    intentie om bij een goedkeuring hiervan het gehele proces
                    uit handen te nemen zodat jij de tijd kunt besteden waar
                    nodig.
                  </p>
                </div>
                <InfoBoxWithMedia
                  title="Waarom een patiëntervaringsonderzoek uitbesteden?"
                  description={
                    <>
                      <BulletList
                        items={[
                          'Lage tijdsinvestering',
                          'Sturende informatie voor je praktijk of apotheek',
                          'Altijd inzicht in het project en resultaten',
                          'Gevalideerde vragenlijsten',
                          <>
                            <span>
                              Een brede mogelijkheid aan{' '}
                              <Link href="https://www.ervaringwijzer.nl/voordelen/">
                                <a className="blueLink cursor-pointer">
                                  uitvraagmethoden
                                </a>
                              </Link>
                              .
                            </span>
                          </>,
                          <>
                            <span>
                              Conform de{' '}
                              <Link href="https://www.ervaringwijzer.nl/voordelen/">
                                <a className="blueLink cursor-pointer">
                                  Algemene Verordening Gegevensbescherming
                                </a>
                              </Link>
                              .
                            </span>
                          </>,
                          'Duidelijke en heldere communicatie',
                          'Modern en up-to-date systeem',
                          'Laagdrempelig en gebruiksvriendelijk voor het hele team',
                          'Real-time inzicht in de resultaten',
                        ]}
                      />
                    </>
                  }
                  details={
                    <>
                      <ScheduleMeeting />
                    </>
                  }
                  mediaPosition="right"
                  media={{
                    data: '/assets/images/patienttevredenheidsonderzoek/slide1-03.jpg',
                  }}
                />
              </>
            ),
          },
          {
            title: 'Zelf doen',
            slide: (
              <>
                <InfoBoxWithMedia
                  title="Zelf een patiëntervaringsonderzoek uitvoeren"
                  description={
                    <>
                      <p>
                        Voor alle zorgaanbieders die zelf een continu
                        patiënttevredenheidsonderzoek willen uitvoeren, biedt
                        Ervaringwijzer een platform waar je eenvoudig alle
                        facetten van het onderzoek kunt inrichten.
                      </p>
                      <p>
                        Na een korte uitleg over onze vier onderdelen van het
                        dashboard is het mogelijk om zelfstandig een vragenlijst
                        te ontwerpen, te versturen en de resultaten ervan te
                        monitoren. Uiteraard blijven we altijd beschikbaar
                        indien je vragen hebt of problemen ervaart.
                      </p>
                    </>
                  }
                  details={
                    <>
                      <TryButton />
                    </>
                  }
                  mediaPosition="right"
                  media={{
                    data: '/assets/images/patienttevredenheidsonderzoek/slide1-01.gif',
                  }}
                ></InfoBoxWithMedia>
                <div
                  className="mx-auto flex w-11/12 flex-col space-y-6 text-left text-base 
                text-cUclaBlue-400 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12"
                >
                  <h2 className="text-4xl font-bold text-cBlue-500">
                    Inzicht in zorgkwaliteit en ervaringen!
                  </h2>
                  <p>
                    Het uitzetten van een continu patiënttevredenheidsonderzoek
                    is meer dan een vragenlijst opstellen en uitvragen. Uit
                    ervaring kunnen wij delen dat enthousiasme, ambitie en
                    betrokkenheid belangrijk zijn om draagvlak te creëren binnen
                    je praktijk. Wij dragen hier graag aan bij door een digitale
                    omgeving te bieden die als prettig wordt ervaren door alle
                    belanghebbende. Zo zullen patiënten vaker vragenlijsten
                    invullen en medewerkers meer betrokken worden bij het
                    onderzoek.
                    <br />
                    <br />
                    <img
                      src="/assets/images/patienttevredenheidsonderzoek/slide2-02.webp"
                      alt="patienttevredenheidsonderzoek"
                    />
                    <br />
                    <br />
                    <br />
                    Wanneer het onderzoek loopt is het goed om regelmatig te
                    monitoren en evalueren. In de learning community kun je met
                    gelijkgestemde sparren om betere vragen te ontwerpen, hogere
                    respons te realiseren of verbeteringen door te voeren. Wij
                    bieden daarnaast tips het onderzoek te verbeteren.
                    <br />
                    <br />
                    Het zelf maken van een patiëntervaringsonderzoek is nog
                    nooit zo makkelijk geweest!
                  </p>
                </div>
                <InfoBoxWithMedia
                  title="De voordelen van het zelf doen"
                  description={
                    <>
                      <BulletList
                        items={[
                          'Regie zelf in handen',
                          'Gebruiksvriendelijk',
                          <>
                            <Link href="https://www.ervaringwijzer.nl/privacy/">
                              <a className="blueLink">Gebruiksvriendelijk</a>
                            </Link>
                          </>,
                          <>
                            <span>
                              Toegang tot de{' '}
                              <Link href="https://www.ervaringwijzer.nl/learning-community/">
                                <a className="blueLink">learning community</a>
                              </Link>
                            </span>
                          </>,
                          'Real-time inzicht in resultaten',
                          'Gedeelde bibliotheek',
                          '24/7 beschikbaar',
                          'Gevalideerde vragenlijsten',
                          'Continu zelf kunnen onderzoeken',
                          'Itereren en bijsturen gaande onderzoek',
                        ]}
                      />
                    </>
                  }
                  details={
                    <>
                      <ScheduleMeeting />
                    </>
                  }
                  mediaPosition="left"
                  media={{
                    data: '/assets/images/patienttevredenheidsonderzoek/slide2-03.webp',
                  }}
                />
              </>
            ),
          },
          {
            title: 'Samenwerken',
            slide: (
              <>
                <InfoBoxWithMedia
                  title="Patiënttevreden­heidsonderzoek een verkennend gesprek"
                  description="Voor zorgaanbieders die hun kostbare tijd besteden aan het verlenen van zorg en toch de wens hebben om een patiënttevredenheidsonderzoek te realiseren, kan Ervaringwijzer de volledige zorg omtrent het patiënttevredenheidsonderzoek uit handen nemen. Tijdens een eerste gesprek zullen alle wensen en beschikbare middelen met elkaar bespreken."
                  mediaPosition="left"
                  media={{
                    data: '/assets/images/patienttevredenheidsonderzoek/slide3-01.webp',
                  }}
                  details={
                    <>
                      <ScheduleMeeting />
                    </>
                  }
                ></InfoBoxWithMedia>
                <div
                  className="mx-auto flex w-11/12 flex-col space-y-6 text-left text-base 
                text-cUclaBlue-400 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12"
                >
                  <h2 className="text-4xl font-bold text-cBlue-500">
                    Hoe werkt een samenwerking?
                  </h2>
                  <p>
                    Het uitzetten van een continu patiënttevredenheidsonderzoek
                    is meer dan een vragenlijst opstellen en uitvragen. Uit
                    ervaring kunnen wij delen dat enthousiasme, ambitie en
                    betrokkenheid belangrijk zijn om draagvlak te creëren binnen
                    je praktijk. Wij dragen hier graag aan bij door een digitale
                    omgeving te bieden die als prettig wordt ervaren door alle
                    belanghebbende. Zo zullen patiënten vaker vragenlijsten
                    invullen en medewerkers meer betrokken worden bij het
                    onderzoek.
                    <br />
                    <br />
                    <img
                      src="/assets/images/patienttevredenheidsonderzoek/slide3-02.webp"
                      alt="patienttevredenheidsonderzoek"
                    />
                    <br />
                    <br />
                    <br />
                    Wanneer het onderzoek loopt is het goed om regelmatig te
                    monitoren en evalueren. In de learning community kun je met
                    gelijkgestemde sparren om betere vragen te ontwerpen, hogere
                    respons te realiseren of verbeteringen door te voeren. Wij
                    bieden daarnaast tips het onderzoek te verbeteren.
                    <br />
                    <br />
                    Het zelf maken van een patiëntervaringsonderzoek is nog
                    nooit zo makkelijk geweest!
                  </p>
                </div>
                <InfoBoxWithMedia
                  title="De voordelen van samenwerken"
                  description={
                    <>
                      <BulletList
                        items={[
                          'De patiënt staat centraal',
                          'Je werkt met professionals samen',
                          'Gedeelde kosten',
                          'Passief respons verzamelen',
                          'Gebruiksvriendelijk',
                          'Laagdrempelig',
                          'Conform AVG',
                          'Onderdeel van lerend netwerk',
                          <>
                            <Link href="https://www.ervaringwijzer.nl/voordelen/">
                              <a className="blueLink">Real-time inzicht</a>
                            </Link>
                          </>,
                          'Gedeelde bibliotheek',
                          'De mogelijkheid om professionals te vergelijken',
                          <>
                            <Link href="https://ervaringwijzer.crisp.help/nl/article/voordelen-ervaringwijzer-1vdagui/">
                              <a className="blueLink">Continu onderzoeken</a>
                            </Link>
                          </>,
                        ]}
                      />
                    </>
                  }
                  mediaPosition="right"
                  media={{
                    data: '/assets/images/patienttevredenheidsonderzoek/slide3-03.jpg',
                  }}
                  details={
                    <>
                      <ScheduleMeeting />
                    </>
                  }
                ></InfoBoxWithMedia>
              </>
            ),
          },
        ]}
      />
      <CtaPanel
        title="Samen wijzer worden?"
        Ctas={[
          TryButton,
          {
            title: 'Contact opnemen',
            link: '/contact',
            className: 'bg-cUclaBlue-500 hover:bg-cUclaBlue-600',
          },
        ]}
      />
    </Layout>
  );
}

export default Patienttevredenheidsonderzoek;
