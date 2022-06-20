import React from 'react';

import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

function privacy() {
  return (
    <Layout
      meta={
        <Meta
          title="Ervaringwijzer"
          description="Met de API van Ervaringwijzer automatiseer je alle onderdelen van Ervaringwijzer. Creeër, verstuur en zie resultaten van alle onderzoeken van ieder deel van de organisatie."
        />
      }
    >
      <h1>Privacy</h1>
    </Layout>
  );
}

export default privacy;