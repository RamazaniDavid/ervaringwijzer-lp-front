import React from 'react';

import TextBlock from '../misc/TextBlock';

interface IntroProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  children?: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  typewriter?: boolean;
  textBlockClassName?: string;
  details?: JSX.Element;
}

function Intro(props: IntroProps) {
  return (
    <section id="intro">
      <div className={`mx-auto w-11/12 md:w-10/12 ${props.className}`}>
        <TextBlock
          title={props.title}
          subtitle={props.subtitle}
          className={` ${props.textBlockClassName}`}
        >
          {props.children}
        </TextBlock>
        <div className="mx-auto w-full lg:w-8/12">{props.details}</div>
      </div>
    </section>
  );
}

export default Intro;
