import React from 'react';
import Typewriter from 'typewriter-effect';

import TryButton from '../misc/TryButton';

function Hero() {
  const strings = [
    'Ziekenhuizen',
    'Stichtingen',
    'Gemeenten',
    'Bibliotheken',
    'Zorgaanbieders',
  ];

  return (
    <section id="hero" className="min-h-[calc(100vh-12rem)]">
      <div className="flex h-[600px] flex-wrap  justify-between">
        <div className="flex w-full items-center px-8  text-left md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Software en professionals om onderzoeken te verrichten voor
              <br className="" />
              <span className="text-[#0085ff]">
                <Typewriter
                  options={{
                    strings,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 1,
                  }}
                />
              </span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Ervaringwijzer is speciaal ontworpen software om te onderzoeken te
              realiseren op een moderne manier.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start">
              <TryButton />
            </div>
          </div>
        </div>
        <div className=" m-auto w-10/12 items-center lg:w-1/2 ">
          <div
            className="h-[200px] w-fit rounded-2xl bg-white p-4 md:h-[280px] lg:float-right lg:h-[330px] lg:rounded-r-none lg:pr-0 xl:h-[375px] 2xl:h-[530px] "
            style={{ filter: 'drop-shadow(0 10px 80px rgba(94,113,135,.3))' }}
          >
            <div className="h-[200px]  md:h-[250px] lg:h-[300px] xl:h-[345px] 2xl:h-[500px]">
              <button
                style={{ filter: 'drop-shadow(0 0 100px rgba(8,36,70,.4))' }}
                className="absolute inset-0 z-[2] box-border inline-block max-w-full cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-0 bg-gray-50/20 bg-[url('https://www.ervaringwijzer.nl/wp-content/themes/ervaringwijzer/dist/images/play-110.svg')] bg-[length:64px_64px] bg-center bg-no-repeat text-center outline-none lg:bg-auto"
              ></button>
              <video
                playsInline={true}
                id="intro-video"
                width="100%"
                autoPlay={true}
                loop={true}
                muted={true}
                controlsList="nodownload"
                className="-mt-4 h-[200px] md:mt-0 md:h-[250px] lg:h-[300px] xl:h-[345px] 2xl:h-[500px]"
              >
                <source
                  src="https://www.ervaringwijzer.nl/wp-content/themes/ervaringwijzer/dist/images/ervaringwijzer-promo.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://www.ervaringwijzer.nl/wp-content/themes/ervaringwijzer/dist/images/ervaringwijzer-promo.webpm"
                  type="video/webpm"
                />
                Je browser ondersteund de video niet. Upgrade je browser.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
