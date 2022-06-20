import React from 'react';

import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function clientInterview() {
  return (
    <Layout
      meta={
        <Meta
          title="Ervaringwijzer"
          description="Met de API van Ervaringwijzer automatiseer je alle onderdelen van Ervaringwijzer. Creeër, verstuur en zie resultaten van alle onderzoeken van ieder deel van de organisatie."
        />
      }
    >
      <h1>Client Interview</h1>
    </Layout>
  );
}

export default clientInterview;
