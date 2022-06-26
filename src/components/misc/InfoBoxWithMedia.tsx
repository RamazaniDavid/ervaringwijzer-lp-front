import React from 'react';

interface IProps {
  title: string | JSX.Element;
  description: string | JSX.Element;
  logo?: JSX.Element;
  media: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  mediaPosition?: 'left' | 'right';
}

function InfoBoxWithMedia(props: IProps) {
  return (
    <div
      className={`${props.className ?? ''} text-justify flex flex-col ${
        props.mediaPosition === 'left'
          ? 'lg:flex-row '
          : 'lg:flex-row-reverse  '
      } items-center w-11/12 justify-between max-w-full lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl my-24  
      `}
      style={props.style}
    >
      <div className="relative flex flex-col space-y-4 lg:basis-7/12">
        {props.logo}
        {typeof props.title === 'string' ? (
          <h2 className="text-3xl font-bold">{props.title}</h2>
        ) : (
          <>{props.title}</>
        )}
        {typeof props.description === 'string' ? (
          <p className="w-10/12 text-lg">{props.description}</p>
        ) : (
          <>{props.description}</>
        )}
      </div>
      <div
        className={`relative lg:basis-5/12 w-full mt-[20%] lg:mt-0 ${
          props.mediaPosition === 'left'
            ? 'lg:ml-12  before:left-[30%] from-[#f1f4f8]/50 to-gray-100/50 '
            : 'lg:mr-12 before:right-[30%] from-gray-100/50 to-[#f1f4f8]/50 '
        }
         before:absolute  before:-top-[20%] before:z-0 before:block before:w-screen
          before:-skew-y-0  before:h-[140%]
      before:rounded-xl before:bg-gradient-to-r before:shadow-lg`}
      >
        <div className="relative">{props.media}</div>
      </div>
    </div>
  );
}

export default InfoBoxWithMedia;
