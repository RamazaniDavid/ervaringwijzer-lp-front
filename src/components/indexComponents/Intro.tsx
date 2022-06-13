import React from 'react';

function Intro() {
  return (
    <section id="intro">
      <div className="mx-auto w-11/12 md:w-10/12 lg:w-8/12">
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
        <div className="mx-auto mt-12 text-center">
          <h3 className="text-3xl leading-10 text-[#082446]">Voordelen</h3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="h-32 w-full rounded-xl bg-white"></div>
            <div className="h-32 w-full rounded-xl bg-white"></div>
            <div className="h-32 w-full rounded-xl bg-white"></div>
            <div className="h-32 w-full rounded-xl bg-white"></div>
            <div className="h-32 w-full rounded-xl bg-white"></div>
            <div className="h-32 w-full rounded-xl bg-white"></div>
            <div className="h-32 w-full rounded-xl bg-white"></div>
            <div className="h-32 w-full rounded-xl bg-white"></div>
            <div className="h-32 w-full rounded-xl bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
