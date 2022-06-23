import React from 'react';
import Typewriter from 'typewriter-effect';

import TryButton from '../misc/TryButton';

interface HeroWithIpadProps {
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
  hoverMedia?: {
    media: JSX.Element;
    className?: string;
  };
}

function HeroWithIpad(props: HeroWithIpadProps) {
  return (
    <section
      id="hero"
      className={`min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-12rem)] items-center self-center  `}
    >
      <div
        className={`flex  flex-wrap  justify-between lg:pt-6 xl:h-[600px] 2xl:mt-16 ${props.className} `}
      >
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
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              {props.typewriter && typeof props.subtitle === 'string' ? (
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

            <div className="mt-6 flex justify-center lg:justify-start">
              {props.tryButton && <TryButton />}
            </div>
          </div>
        </div>
        <div
          className={` w-10/12 items-center lg:w-1/2 relative mt-12 mx-auto`}
        >
          <div className="absolute inset-0 z-[2] box-border inline-block ">
            <img
              src="/assets/images/shared/ipad-mockup.png"
              alt=""
              className=" -ml-[1.5vw] -mt-[1vw]  h-[46vw] w-[79vw]   lg:h-[25vw] lg:w-[44vw] "
            />
          </div>
          <div
            className={`absolute z-[1]   ${props.mediaClassName}`}
            style={{
              ...props.mediaStyle,
            }}
          >
            {props.media}
          </div>
          <div
            className={`absolute z-[3] inset-0 ${props.hoverMedia?.className}`}
          >
            {props.hoverMedia?.media}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroWithIpad;
