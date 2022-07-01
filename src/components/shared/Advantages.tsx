import React from 'react';

import GridCard from '../misc/GridCard';

function Advantages() {
  const advantages = [
    {
      text: '100% anoniem en privacy proof',
      icon: 'assets/images/icons/icon-privacy.svg',
      link: '/voordelen',
    },
    {
      text: 'De vrijheid om te onderzoeken wat jij wilt',
      icon: 'assets/images/icons/vrijheid.svg',
      link: '/voordelen',
    },
    {
      text: 'Stuur eenmalig of realiseer continumetingen',
      icon: 'assets/images/icons/eenmalig.svg',
      link: '/voordelen',
    },
    {
      text: 'Integreer alle betrokken partijen of opereer alleen',
      icon: 'assets/images/icons/integreer.svg',
      link: '/voordelen',
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
      link: '/voordelen',
    },
    {
      text: 'Pas aan jouw doelgroep of standaardiseer',
      icon: 'assets/images/icons/pas-aan.svg',
      link: '/voordelen',
    },
    {
      text: 'Gemakkelijk voor gebruiker en respondent',
      icon: 'assets/images/icons/gemakkelijk.svg',
      link: '/voordelen',
    },
    {
      text: 'Zowel digitaal als fysiek',
      icon: 'assets/images/icons/digitaal-als-fysiek.svg',
      link: '/voordelen',
    },
    {
      text: 'Visueel aantrekkelijk',
      icon: 'assets/images/icons/visueel.svg',
      link: '/voordelen',
    },
  ];

  return (
    <>
      <GridCard
        title="Voordelen"
        className="mb-16  text-cBlue-500"
        data={advantages}
      />
    </>
  );
}

export default Advantages;
