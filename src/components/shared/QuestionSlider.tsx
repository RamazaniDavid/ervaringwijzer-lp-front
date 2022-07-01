import React, { useEffect } from 'react';
import { setTimeout } from 'timers';

import renderTitle from '@/utils/common/RenderTitle';
import { MediaType } from '@/utils/types/MediaType';

interface IProps {
  sectionId?: string;
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  questions?: {
    title: string | JSX.Element;
    subtitle?: string | JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    icon?: MediaType;
    slide: React.ReactNode;
  }[];
}

function QuestionSlider(props: IProps) {
  const [selectedQuestion, setSelectedQuestion] = React.useState<number>(0);
  const [selectedSlide, setSelectedSlide] = React.useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setSelectedSlide(selectedQuestion);
    }, 300);
  }, [selectedQuestion]);

  return (
    <section id={props.sectionId ?? 'question-box'}>
      <div
        className={`w-full items-center bg-gray-200 text-cBlue-500  ${
          props.className ?? ''
        } `}
      >
        <div
          className="mx-auto flex min-h-[6rem] w-11/12 flex-col place-items-center md:flex-row 
        lg:min-h-[6rem] lg:w-10/12  xl:w-9/12  2xl:w-7/12"
        >
          <div className="flex flex-1"> {renderTitle(props.title)}</div>
          <div className="flex flex-1">
            {props.questions && (
              <div className="flex space-x-4">
                {props.questions.map((question, index) => (
                  <React.Fragment key={index}>
                    <button
                      className={`rounded-full p-3 ${
                        selectedQuestion === index
                          ? 'bg-cLightBlue-500'
                          : 'bg-gray-400/80 '
                      } ${question.className}`}
                      onClick={() => {
                        setSelectedQuestion(index);
                      }}
                    >
                      {renderTitle(
                        question.title,

                        ({ children }) => (
                          <span className="text-sm md:text-base">
                            {children}
                          </span>
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
      <div className="items-center overflow-x-hidden text-center ">
        {props.questions?.map((question, index) => (
          <div
            key={index}
            className={` ${
              selectedQuestion === index ? 'opacity-100' : 'opacity-0'
            } ${selectedSlide === index ? '' : 'hidden'}`}
          >
            {question.slide}
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuestionSlider;
