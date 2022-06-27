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
      <div
        className={`w-full items-center bg-gray-200 text-cBlue-500  ${
          props.className ?? ''
        } `}
      >
        <div
          className="mx-auto flex min-h-[6rem] w-11/12 flex-row place-items-center 
        lg:min-h-[6rem] lg:w-10/12  xl:w-9/12 xl:grid-cols-4 2xl:w-7/12"
        >
          {props.title}
        </div>
      </div>
    </section>
  );
}

export default QuestionBox;
