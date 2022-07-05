import React from 'react';
import Typewriter from 'typewriter-effect';

import Modal from '@/components/misc/Modal';
import Advantages from '@/components/shared/Advantages';
import Businesses from '@/components/shared/Businesses';
import CtaSpecial from '@/components/shared/CtaSpecial';
import HeroWithMockUp from '@/components/shared/HeroWithMockUp';
import Intro from '@/components/shared/Intro';
import NetherlandsMap from '@/components/shared/NetherlandsMap';
import Quotes from '@/components/shared/Quotes';
import { IModalHandler } from '@/utils/handlers/IModalHandler';

import { Layout } from '../layout/MainLayout';
import { Meta } from '../layout/Meta';

const Index = () => {
  const strings = [
    'Ziekenhuizen',
    'Stichtingen',
    'Gemeenten',
    'Bibliotheken',
    'Zorgaanbieders',
    'Taalhuizen',
    'Huisartsen',
    'Fysiotherapeuten',
    'Welzijnsorganisaties',
    'Sociaal Teams',
  ];

  const modalRef = React.useRef<IModalHandler>(null);

  return (
    <Layout
      meta={
        <Meta
          title="Cliëntervaringen op een nieuwe manier ophalen met Ervaringwijzer"
          description="Een platform met een lerend netwerk met als doel: continue betekenisvolle cliëntervaringen verzamelen op een manier die past bij de cliënt."
        />
      }
    >
      <HeroWithMockUp
        className=""
        title={
          <>
            <div className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Software en professionals om onderzoeken te verrichten voor
              <br className="" />
              <span className="text-cLightBlue-500">
                <Typewriter
                  options={{
                    strings,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 1,
                  }}
                />
              </span>
            </div>
          </>
        }
        subtitle={
          <>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Ervaringwijzer is speciaal ontworpen software om te onderzoeken te
              realiseren op een moderne manier.
            </p>
          </>
        }
        hoverMedia={{
          element: (
            <button
              onClick={() => {
                modalRef.current?.open();
              }}
              style={{}}
              className="absolute inset-0 mx-auto w-full cursor-pointer items-center
               bg-gray-50/40 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 110 110"
                fill="none"
                className="my-auto h-16 w-full group-hover:animate-bounce lg:h-24"
              >
                <circle cx="55" cy="55" r="55" fill="#fff" />
                <path
                  d="M81.715 55L41.643 78.135v-46.27L81.716 55z"
                  fill="#0085FF"
                />
              </svg>
            </button>
          ),
          className:
            ' group w-[58vw] h-[34vw] lg:h-[20vw] lg:mt-[2vw] lg:w-[35.6vw] mx-auto',
        }}
        media={{
          element: (
            <>
              <div className=" w-full">
                <video
                  playsInline={true}
                  id="intro-video"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  controlsList="nodownload"
                  className="w-full"
                  style={{
                    background:
                      'url(http://i.stack.imgur.com/zZNgk.png) center center no-repeat',
                  }}
                >
                  <source
                    src="/assets/videos/ervaringwijzer-promo.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="/assets/videos/ervaringwijzer-promo.webpm"
                    type="video/webpm"
                  />
                  Je browser ondersteund de video niet. Upgrade je browser.
                </video>
              </div>
            </>
          ),
          className:
            'w-[60vw] mx-[12.5vw] lg:w-[36vw] lg:mt-[2vw] lg:ml-[6.8vw] ',
        }}
        tryButton={true}
        mockUp={{
          element: (
            <img
              src="/assets/images/shared/mb-mockup.png"
              alt=""
              className="aspect-[2/1] w-full px-2"
            />
          ),
          className: '-mt-[3.2vw] lg:mt-[0vw]',
        }}
      />
      <Businesses
        businesses={[
          {
            title: 'onderzoeken verricht',
            value: '264',
          },
          {
            title: 'tevreden klanten',
            value: '30+',
          },
          {
            title: 'hoogste respons',
            value: '92%',
          },
        ]}
      />
      <Intro title={'Wat is Ervaringwijzer'} details={<Advantages />}>
        <>
          <p className="">
            Wij zijn een jonge organisatie die sinds 2017 bezig is om het beste
            platform te ontwikkelen waarmee onderzoeken op een moderne manier
            gemaakt, verstuurt en bekeken kunnen worden. Ons platform brengt
            alle facetten voor een goed onderzoek bijeen op één simpele plek.
          </p>
          <p className="">
            Wij geloven dat je betekenisvolle informatie kunt ophalen door samen
            te werken met elkaar en techniek te combineren met kennis en
            ervaring.
          </p>
          <p className="mt-5">
            Heb je geen tijd om zelf aan de slag te gaan? Geen nood naast
            software bieden wij ook professionals om jouw onderzoeken te
            realiseren van begin tot eind!
          </p>
        </>
      </Intro>
      <NetherlandsMap />
      <Quotes />
      <CtaSpecial />

      <Modal
        ref={modalRef}
        childrenContainer={{
          className: 'bg-white rounded-2xl p-8',
        }}
      >
        <iframe
          id="video"
          src="https://www.youtube.com/embed/AICCFk206kk?rel=0&amp;autoplay=1"
          frameBorder="0"
          allowFullScreen={true}
          className={'  inset-0 aspect-video h-full w-full bg-contain '}
          style={{
            background:
              'url(http://i.stack.imgur.com/zZNgk.png) center center no-repeat',
          }}
        />
      </Modal>
    </Layout>
  );
};

export default Index;
