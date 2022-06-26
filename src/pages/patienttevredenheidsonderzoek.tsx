import React from 'react';

import Hero from '@/components/shared/Hero';
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
        title="Patiënttevredenheidsonderzoek"
        subtitle={
          <p className="mt-6">
            Fysiotherapeuten, huisartsen en apothekers willen sturende
            informatie om de dagelijkse gang van zaken in de praktijk te
            verbeteren. Om dit te realiseren wordt een
            patiënttevreden­heidsonderzoek gerealiseerd. Soms in verplichte vorm
            zoals de <span className="font-bold">PREM</span>, andere keren met
            een vragenlijst die aansluit bij de patiënten van de professionals.
            Met Ervaringwijzer zijn alle denkbare vormen van
            patiënttevreden­heidsonderzoeken mogelijk van eenmalig uitbesteden,
            continu zelf uitvoeren of samenwerken in een netwerk van
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
    </Layout>
  );
}

export default patienttevredenheidsonderzoek;
