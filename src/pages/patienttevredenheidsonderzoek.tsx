import React from 'react';

import Hero from '@/components/shared/Hero';
import QuestionBox from '@/components/shared/QuestionBox';
import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function patienttevredenheidsonderzoek() {
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
        className="mx-auto h-[600px] w-full lg:w-10/12"
      />
      <QuestionBox
        title="Hoe wil jij het onderzoek realiseren?"
        questions={[
          {
            title: 'Uitbesteden',
          },
          {
            title: 'Zelf doen',
          },
          {
            title: 'Samenwerken',
          },
        ]}
      />
    </Layout>
  );
}

export default patienttevredenheidsonderzoek;
