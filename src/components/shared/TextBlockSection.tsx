import React from 'react';

import TextBlock from '../misc/TextBlock';

interface TextBlockSectionProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  children: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
}

function TextBlockSection(props: TextBlockSectionProps) {
  return (
    <section id="text-block">
      <TextBlock title={props.title} className={props.className}>
        {props.children}
      </TextBlock>
    </section>
  );
}

export default TextBlockSection;
