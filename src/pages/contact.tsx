import Link from 'next/link';
import React from 'react';

import GridCard from '@/components/misc/GridCard';
import TryButton from '@/components/misc/TryButton';
import Hero from '@/components/shared/Hero';
import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function Contact() {
  return (
    <Layout
      meta={
        <Meta
          title="Wij vertellen je graag meer en zijn altijd bereikbaar per mail en telefoon."
          description="Bent u geïnteresseerd in Ervaringwijzer of wilt u graag meer te weten over het cliëntervaringsonderzoek? U kunt ons altijd bereiken via de contactpagina."
        />
      }
    >
      <Hero
        title="Neem contact op"
        subtitle="Heb je vragen, opmerkingen of ben je benieuwd naar Ervaringwijzer? Wij helpen je graag via een van de onderstaande contactmogelijkheden."
        className="w-special"
      />
      <GridCard
        title=""
        itemContainerClassName=" text-left lg:!basis-1/2 "
        items={[
          {
            text: 'Bel of mail met ons team',
            subTitle: (
              <>
                Via{' '}
                <Link href="tel:0103070142">
                  <a className="blueLink" target="_blank">
                    010 – 3070142
                  </a>
                </Link>{' '}
                of{' '}
                <Link href="onderzoek@ervaringwijzer.nl">
                  <a className="blueLink" target="_blank">
                    onderzoek@ervaringwijzer.nl
                  </a>
                </Link>{' '}
              </>
            ),
            icon: 'assets/images/icons/Servicezuil.svg',
            className: 'min-h-[8rem] justify-center',
          },
          {
            text: 'Vul het contactformulier in',
            subTitle: 'Ons team reageert zo snel mogelijk',
            icon: 'assets/images/icons/contactformulier.svg',
            className: 'min-h-[8rem] justify-center',
            titleDetail: (
              <>
                <TryButton className="!w-fit !bg-white text-cBlue-500">
                  Inplannen
                </TryButton>
              </>
            ),
          },
          {
            text: 'Plan een demo in',
            subTitle: 'En maak kennis met Ervaringwijzer',
            icon: 'assets/images/icons/demo.svg',
            className: 'min-h-[8rem] justify-center',
            titleDetail: (
              <>
                <TryButton className="!w-fit !bg-white text-cBlue-500">
                  Invullen
                </TryButton>
              </>
            ),
          },
          {
            text: 'Blijf op de hoogte',
            subTitle: 'Schrijf je in voor onze nieuwsbrief',
            icon: 'assets/images/icons/nieuwsbrief.svg',
            className: 'min-h-[8rem] justify-center',
            titleDetail: (
              <>
                <TryButton className="!w-fit !bg-white text-cBlue-500">
                  Inschrijven
                </TryButton>
              </>
            ),
          },
        ]}
      />
    </Layout>
  );
}

export default Contact;
