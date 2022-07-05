import React from 'react';

import renderTitle from '@/utils/common/RenderTitle';
import { MediaType } from '@/utils/types/MediaType';
import { TitleType } from '@/utils/types/TitleType';

interface IProps {
  sectionId?: string;
  title: TitleType | JSX.Element;
  subtitle?: string | JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  questions?: {
    title: TitleType | JSX.Element;
    subtitle?: string | JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    icon?: MediaType;
    onClick?: () => void;
  }[];
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
          <div className="flex flex-1"> {renderTitle(props.title)}</div>
          <div className="flex flex-1">
            {props.questions && (
              <div className="flex space-x-4">
                {props.questions.map((question, index) => (
                  <React.Fragment key={index}>
                    <button
                      className={`rounded-full p-3 ${question.className}`}
                      onClick={question.onClick}
                    >
                      {renderTitle(
                        question.title,

                        ({ children }) => (
                          <span>{children}</span>
                        )
                      )}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestionBox;
