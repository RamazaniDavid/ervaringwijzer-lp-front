import { useRouter } from 'next/router';
import React from 'react';

function Advantages() {
  const router = useRouter();
  const advantages = [
    {
      text: '100% anoniem en privacy proof',
      icon: 'icon-privacy.svg',
    },
    {
      text: 'De vrijheid om te onderzoeken wat jij wilt',
      icon: 'vrijheid.svg',
    },
    {
      text: 'Stuur eenmalig of realiseer continumetingen',
      icon: 'eenmalig.svg',
    },
    {
      text: 'Integreer alle betrokken partijen of opereer alleen',
      icon: 'integreer.svg',
    },
    {
      text: ' door unieke aanpak',
      icon: 'hoogste-respons.svg',
    },
    {
      text: 'Pas aan jouw doelgroep of standaardiseer',
      icon: 'pas-aan.svg',
    },
    {
      text: 'Gemakkelijk voor gebruiker en respondent',
      icon: 'gemakkelijk.svg',
    },
    {
      text: 'Zowel digitaal als fysiek',
      icon: 'digitaal-als-fysiek.svg',
    },
    {
      text: 'Visueel aantrekkelijk',
      icon: 'visueel.svg',
    },
  ];

  return (
    <>
      <div className="mx-auto mt-36 text-center">
        <h3 className="mb-16 text-3xl font-medium leading-10 text-[#082446]">
          Voordelen
        </h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 xl:gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="flex h-36 w-full flex-row items-center space-x-2 rounded-xl bg-white px-2 xl:h-24"
            >
              <span className="basis-1/4">
                <img
                  src={`${router.basePath}/assets/images/icons/${item.icon}`}
                  alt={item.text}
                  className="mx-auto h-12 w-12"
                />
              </span>
              <span className="basis-3/4 text-left ">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Advantages;
