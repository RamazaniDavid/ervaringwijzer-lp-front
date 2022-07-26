import React from 'react';
import Typewriter from 'typewriter-effect';

import { useRefDimensions } from '@/utils/hooks/useDimention';

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
  // media?: JSX.Element;
  // mediaClassName?: string;
  // mediaStyle?: React.CSSProperties;
  media?: {
    element: JSX.Element;
    className?: string;
    style?: React.CSSProperties;
  };
  hoverMedia?: {
    element: JSX.Element;
    className?: string;
  };
}

function HeroWithIpad(props: HeroWithIpadProps) {
  const mediaContainerRef = React.useRef<HTMLDivElement>(null);
  const mediaDimention = useRefDimensions(mediaContainerRef);

  return (
    <section
      id="hero"
      className={`min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-12rem)] items-center self-center  `}
    >
      <div
        className={`flex  flex-wrap  justify-between lg:pt-6 xl:h-[600px] mt-16 ${props.className} `}
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
            <div className="mt-2 text-sm text-gray-500 md:text-base">
              {props.typewriter && typeof props.subtitle === 'string' ? (
                <Typewriter
                  options={{
                    strings: [props.subtitle.toString()],
                    autoStart: true,
                    loop: true,
                    delay: 500,
                    deleteSpeed: 1,
                  }}
                />
              ) : (
                props.subtitle
              )}
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              {props.tryButton && <TryButton />}
            </div>
          </div>
        </div>
        <div
          className={` w-10/12 items-center lg:w-1/2 relative mt-12 mx-auto `}
        >
          <div className="relative w-full">
            <div className="absolute inset-0 z-[3] box-border inline-block">
              <img
                src="/assets/images/shared/ipad-mockup.png"
                alt=""
                style={{
                  width: `calc(${mediaDimention.width}px - 0rem)`,
                  height: `calc(${mediaDimention.height}px - 0.5rem)`,
                }}
              />
            </div>
            <div
              ref={mediaContainerRef}
              className={`absolute z-[1] p-3 lg:p-8  ${props.media?.className}`}
              style={{
                ...props.media?.style,
              }}
            >
              {props.media?.element}
            </div>
            {props.hoverMedia && (
              <div
                className={`absolute  z-[5]  rounded-lg  ${props.hoverMedia?.className}`}
                style={{
                  height: `calc(${mediaDimention.height}px - 3.2vw)`,
                  width: `calc(${mediaDimention.width}px - 3.2vw)`,
                  left: '1.6vw',
                  top: '1.6vw',
                }}
              >
                {props.hoverMedia?.element}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroWithIpad;
