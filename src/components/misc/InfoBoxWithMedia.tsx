import React from 'react';

import { MediaType } from '@/utils/types/MediaType';
import { SvgPathType } from '@/utils/types/SvgPathType';

interface IProps {
  title: string | JSX.Element;
  description?: string | JSX.Element;
  details?: string | JSX.Element;
  logo?: MediaType;
  media?: MediaType;
  className?: string;
  style?: React.CSSProperties;
  mediaPosition?: 'left' | 'right';
}

function InfoBoxWithMedia(props: IProps) {
  const renderLogo = (item?: MediaType): JSX.Element => {
    if (!item || !item.data) {
      return <></>;
    }
    if (typeof item.data === 'string') {
      return (
        <img
          src={item.data}
          alt="logo"
          className={
            (item.overrideClassName ? '' : ' w-24 aspect-square ') +
            item.className
          }
        />
      );
    }
    if ((item.data as SvgPathType).paths) {
      const logo = item.data as SvgPathType;
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={logo.width}
          height={logo.height}
          viewBox={`0 0 ${logo.width} ${logo.height}`}
        >
          {logo.paths.map((path, index) => {
            return <path key={index} d={path} />;
          })}
        </svg>
      );
    }

    return <>{item}</>;
  };

  const renderMedia = (item?: MediaType): JSX.Element => {
    if (!item || !item.data) {
      return <></>;
    }
    if (typeof item.data === 'string') {
      return (
        <img
          src={item.data}
          alt="logo"
          className={
            (item.overrideClassName ? '' : ' rounded-xl w-full aspect-auto ') +
            item.className
          }
        />
      );
    }
    if ((item.data as SvgPathType).paths) {
      const logo = item.data as SvgPathType;
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={logo.width}
          height={logo.height}
          viewBox={`0 0 ${logo.width} ${logo.height}`}
        >
          {logo.paths.map((path, index) => {
            return <path key={index} d={path} />;
          })}
        </svg>
      );
    }

    return <>{item}</>;
  };

  return (
    <div
      className={`${props.className ?? ''} mx-auto text-left  flex flex-col ${
        props.mediaPosition === 'right'
          ? 'lg:flex-row '
          : 'lg:flex-row-reverse  '
      } items-center w-11/12 justify-between max-w-full lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl my-24  
      `}
      style={props.style}
    >
      <div className="relative flex flex-col space-y-4 lg:basis-7/12">
        {renderLogo(props.logo)}
        {typeof props.title === 'string' ? (
          <h2 className="text-3xl  font-bold">{props.title}</h2>
        ) : (
          <>{props.title}</>
        )}
        {typeof props.description === 'string' ? (
          <p className="w-10/12 text-lg">{props.description}</p>
        ) : (
          <>{props.description}</>
        )}
        {typeof props.details === 'string' ? (
          <p className="w-10/12 text-lg">{props.details}</p>
        ) : (
          <>{props.details}</>
        )}
      </div>
      <div
        className={`relative lg:basis-5/12 w-full mt-[20%] lg:mt-0 ${
          props.mediaPosition === 'right'
            ? 'lg:ml-12  before:left-[30%] from-[#f1f4f8] to-gray-300/70 '
            : 'lg:mr-12 before:right-[30%] from-gray-300/70 to-[#f1f4f8] '
        }
         before:absolute  before:-top-[20%] before:z-0 before:block before:w-screen
          before:-skew-y-0  before:h-[140%]
      before:rounded-xl before:bg-gradient-to-r before:shadow-lg`}
      >
        <div className="relative">{renderMedia(props.media)}</div>
      </div>
    </div>
  );
}

export default InfoBoxWithMedia;
