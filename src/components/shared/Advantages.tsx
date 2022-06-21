import React from 'react';

import GridCard from '../misc/GridCard';

function Advantages() {
  const advantages = [
    {
      text: '100% anoniem en privacy proof',
      icon: 'assets/images/icons/icon-privacy.svg',
    },
    {
      text: 'De vrijheid om te onderzoeken wat jij wilt',
      icon: 'assets/images/icons/vrijheid.svg',
    },
    {
      text: 'Stuur eenmalig of realiseer continumetingen',
      icon: 'assets/images/icons/eenmalig.svg',
    },
    {
      text: 'Integreer alle betrokken partijen of opereer alleen',
      icon: 'assets/images/icons/integreer.svg',
    },
    {
      text: ' door unieke aanpak',
      icon: 'assets/images/icons/hoogste-respons.svg',
    },
    {
      text: 'Pas aan jouw doelgroep of standaardiseer',
      icon: 'assets/images/icons/pas-aan.svg',
    },
    {
      text: 'Gemakkelijk voor gebruiker en respondent',
      icon: 'assets/images/icons/gemakkelijk.svg',
    },
    {
      text: 'Zowel digitaal als fysiek',
      icon: 'assets/images/icons/digitaal-als-fysiek.svg',
    },
    {
      text: 'Visueel aantrekkelijk',
      icon: 'assets/images/icons/visueel.svg',
    },
  ];

  return (
    <>
      <GridCard
        title="Voordelen"
        className="mb-16  text-[#082446]"
        data={advantages}
      />
    </>
  );
}

export default Advantages;
