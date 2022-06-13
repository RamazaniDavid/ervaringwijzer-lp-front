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
    <section id="hero">
      <div className="flex h-[600px] justify-between  ">
        <div className="flex items-center px-8 text-center md:px-12 lg:w-1/2 lg:text-left">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Software en professionals om onderzoeken te verrichten voor
              <span className="ml-4 text-[#0085ff]">
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
        <div className=" my-auto hidden lg:block lg:w-1/2">
          <div
            className="float-right h-[375px] rounded-l-2xl bg-white py-4 pl-4 "
            style={{ filter: 'drop-shadow(0 10px 80px rgba(94,113,135,.3))' }}
          >
            <div className="h-[345px]">
              <button
                style={{ filter: 'drop-shadow(0 0 100px rgba(8,36,70,.4))' }}
                className="absolute inset-0 z-[2] box-border inline-block max-w-full cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap border-0 bg-gray-50/20 bg-[url('https://www.ervaringwijzer.nl/wp-content/themes/ervaringwijzer/dist/images/play-110.svg')] bg-center bg-no-repeat text-center outline-none"
              ></button>
              <video
                playsInline={true}
                id="intro-video"
                width="100%"
                autoPlay={true}
                loop={true}
                muted={true}
                controlsList="nodownload"
                className="h-[345px]"
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
