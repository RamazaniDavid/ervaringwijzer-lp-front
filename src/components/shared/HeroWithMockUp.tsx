import React from 'react';
import Typewriter from 'typewriter-effect';

import TryButton from '../misc/TryButton';

interface HeroWithMockUpProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  children?: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  typewriter?: boolean;
  typewriterClassName?: string;
  typewriterStyle?: React.CSSProperties;
  tryButton?: boolean;
  mockUp?: {
    element: JSX.Element;
    className?: string;
    style?: React.CSSProperties;
  };
  media?: {
    element: JSX.Element;
    className?: string;
    style?: React.CSSProperties;
  };
  hoverMedia?: {
    element: JSX.Element;
    className?: string;
    style?: React.CSSProperties;
  };
}

function HeroWithMockUp(props: HeroWithMockUpProps) {
  return (
    <section
      id="hero"
      className={`min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-11rem)] `}
    >
      <div
        className={`w-full flex  content-start lg:content-between flex-wrap mt-20   lg:pt-6 min-h-[inherit] 2xl:mt-16 ${props.className}`}
      >
        <div className="flex min-h-[calc(100vh-10rem)/2] w-full items-center  px-8 text-left md:px-12 lg:min-h-[calc(100vh-12rem)] lg:w-1/2">
          <div>
            <div className="text-2xl font-semibold text-gray-800 lg:text-2xl xl:text-4xl">
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
          className={` w-10/12 items-center lg:w-1/2 relative mt-12 mx-auto  `}
        >
          <div
            className={`absolute inset-0 z-[2] ${props.mockUp?.className}`}
            style={{
              ...props.mockUp?.style,
            }}
          >
            {props.mockUp ? (
              props.mockUp?.element
            ) : (
              <img
                src="/assets/images/shared/mb-mockup.png"
                alt=""
                className="w-full px-2"
              />
            )}
          </div>
          <div
            className={`absolute z-[1]   ${props.media?.className}`}
            style={{
              ...props.media?.style,
            }}
          >
            {props.media?.element}
          </div>
          <div
            className={`absolute z-[3] inset-0 ${props.hoverMedia?.className}`}
            style={{ ...props.hoverMedia?.style }}
          >
            {props.hoverMedia?.element}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroWithMockUp;
