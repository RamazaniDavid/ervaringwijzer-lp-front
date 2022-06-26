import React from 'react';

interface IProps {
  sectionId?: string;
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  children?: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
}

function QuestionBox(props: IProps) {
  return (
    <section id={props.sectionId ?? 'question-box'}>
      <div className="w-full "></div>
    </section>
  );
}

export default QuestionBox;
