import React from 'react';

import Advantages from './Advantages';

interface IntroProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  children?: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  typewriter?: boolean;
}

function Intro(props: IntroProps) {
  return (
    <section id="intro">
      <div className="mx-auto w-11/12 md:w-10/12 xl:w-8/12 2xl:w-6/12">
        <div className="mx-auto mt-8 w-8/12 items-center pt-24 text-center leading-7">
          <h2 className="mb-8 text-4xl font-medium">{props.title}</h2>
          {props.subtitle && (
            <p className="mb-8 text-sm text-gray-500">{props.subtitle}</p>
          )}
          <div className="flex flex-col  break-words text-base font-light text-[#5e7187]  antialiased">
            {props.children}
          </div>
        </div>
        <Advantages />
      </div>
    </section>
  );
}

export default Intro;
