import { useRouter } from 'next/router';
import React from 'react';

function Intro() {
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
    <section id="intro">
      <div className="mx-auto w-11/12 md:w-10/12 xl:w-8/12">
        <div className="mx-auto mt-8 w-8/12 items-center pt-24 text-center leading-7">
          <h2 className="mb-8 text-4xl font-medium">Wat is Ervaringwijzer</h2>
          <div className="flex flex-col  break-words text-base font-light text-[#5e7187]  antialiased">
            <p className="">
              Wij zijn een jonge organisatie die sinds 2017 bezig is om het
              beste platform te ontwikkelen waarmee onderzoeken op een moderne
              manier gemaakt, verstuurt en bekeken kunnen worden. Ons platform
              brengt alle facetten voor een goed onderzoek bijeen op één simpele
              plek.
            </p>
            <p className="">
              Wij geloven dat je betekenisvolle informatie kunt ophalen door
              samen te werken met elkaar en techniek te combineren met kennis en
              ervaring.
            </p>
            <p className="mt-5">
              Heb je geen tijd om zelf aan de slag te gaan? Geen nood naast
              software bieden wij ook professionals om jouw onderzoeken te
              realiseren van begin tot eind!
            </p>
          </div>
        </div>
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
      </div>
    </section>
  );
}

export default Intro;
