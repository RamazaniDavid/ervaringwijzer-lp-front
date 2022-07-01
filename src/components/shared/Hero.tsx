import React from 'react';
import Typewriter from 'typewriter-effect';

import TryButton from '../misc/TryButton';

interface HeroProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  children?: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  typewriter?: boolean;
  typewriterClassName?: string;
  typewriterStyle?: React.CSSProperties;
  tryButton?: boolean;
  media?: JSX.Element;
  mediaClassName?: string;
  mediaStyle?: React.CSSProperties;
}

function Hero(props: HeroProps) {
  return (
    <section
      id="hero"
      className={`min-h-[calc(100vh-9rem)] items-center self-center  `}
    >
      <div className={`flex  flex-wrap  justify-between ${props.className}`}>
        <div className="flex w-full items-center px-8  text-left md:px-12 lg:w-1/2">
          <div>
            <div className="text-3xl font-semibold text-gray-800 md:text-4xl">
              {props.typewriter && typeof props.title === 'string' ? (
                <Typewriter
                  options={{
                    strings: [props.title.toString()],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 1,
                  }}
                />
              ) : (
                props.title
              )}
            </div>

            {props.subtitle && typeof props.subtitle === 'string' ? (
              <>
                <p className="mt-2 text-sm text-[#5e7187] md:text-base">
                  {props.typewriter ? (
                    <Typewriter
                      options={{
                        strings: [props.subtitle.toString()],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 1,
                      }}
                    />
                  ) : (
                    props.subtitle
                  )}
                </p>
              </>
            ) : (
              <>{props.subtitle}</>
            )}

            <div className="mt-6 flex justify-center lg:justify-start">
              {props.tryButton && <TryButton />}
            </div>
          </div>
        </div>
        <div className={` m-auto w-10/12 items-center lg:w-1/2`}>
          <div
            className={`z-[22] h-[200px] w-full rounded-2xl  p-4 md:h-[280px] lg:float-right lg:h-[330px] 
            lg:rounded-r-none lg:pr-0 xl:h-[375px] 2xl:h-[530px] ${props.mediaClassName}`}
            style={{ ...props.mediaStyle }}
          >
            {props.media}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
