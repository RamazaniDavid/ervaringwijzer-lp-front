import React from 'react';
import { useQuery } from 'react-query';

import MapHelper from './MapHelper';

function NetherlandsMap() {
  const res = useQuery('mapPathes', async () => {
    const response = await fetch('/data/netherland-map-data.json');

    const data = await response.json();
    return data;
  });

  return <MapHelper mapPathes={res.data} />;
}

export default NetherlandsMap;
