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
  details?: JSX.Element | JSX.Element[];
}

const renderDetails = (details?: JSX.Element | JSX.Element[]) => {
  if (!details) {
    return null;
  }
  if (Array.isArray(details)) {
    return details.map((detail, index) => (
      <React.Fragment key={index}>{detail}</React.Fragment>
    ));
  }
  return details;
};

function Intro(props: IntroProps) {
  return (
    <section id="intro">
      <div className={`mx-auto ${props.className}`}>
        <TextBlock
          title={props.title}
          subtitle={props.subtitle}
          className={` ${props.textBlockClassName}`}
        >
          {props.children}
        </TextBlock>
        <div className="mx-auto w-full">{renderDetails(props.details)}</div>
      </div>
    </section>
  );
}

export default Intro;
