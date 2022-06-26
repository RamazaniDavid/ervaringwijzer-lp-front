import React from 'react';

import TextBlock from '../misc/TextBlock';

interface TextBlockSectionProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  children: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  sectionId?: string;
}

function TextBlockSection(props: TextBlockSectionProps) {
  return (
    <section id={props.sectionId ?? 'text-block'}>
      <TextBlock title={props.title} className={props.className}>
        {props.children}
      </TextBlock>
    </section>
  );
}

export default TextBlockSection;
