import React from 'react';

import { MediaType } from '@/utils/types/MediaType';
import { SvgPathType } from '@/utils/types/SvgPathType';

import InfoBoxWithMedia from '../misc/InfoBoxWithMedia';

interface IProps {
  sectionId?: string;
  title: string | JSX.Element;
  description?: string | JSX.Element;
  children?: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  childrenPosition?: 'before' | 'after';
  infoBoxes: {
    title: string | JSX.Element;
    description: string | JSX.Element;
    logo?: MediaType;
    media?: MediaType;
  }[];
}

const renderLogo = (item?: MediaType): JSX.Element => {
  if (!item) {
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
  if (!item) {
    return <></>;
  }
  if (typeof item.data === 'string') {
    return (
      <img
        src={item.data}
        alt="logo"
        className={
          (item.overrideClassName ? '' : ' rounded-3xl w-full aspect-auto ') +
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

function SmartInfo(props: IProps) {
  return (
    <section id={props.sectionId ?? 'smart-info'}>
      <div
        className={`flex flex-col items-center text-center my-24 lg:my-36 ${
          props.className ?? ''
        } `}
        style={props.style}
      >
        {typeof props.title === 'string' ? (
          <h2 className="text-5xl font-bold">{props.title}</h2>
        ) : (
          <>{props.title}</>
        )}
        {typeof props.description === 'string' ? (
          <p className="text-lg">{props.description}</p>
        ) : (
          <>{props.description}</>
        )}
        {props.childrenPosition === 'before' ? props.children : null}
        <div>
          {props.infoBoxes.map((item, index) => (
            <InfoBoxWithMedia
              title={item.title}
              description={item.description}
              logo={<>{renderLogo(item.logo)}</>}
              media={<>{renderMedia(item.media)}</>}
              key={index}
              mediaPosition={index % 2 === 0 ? 'left' : 'right'}
              className={
                'relative z-10 mx-auto p-8 before:absolute before:-inset-1 before:z-0 before:block before:-skew-y-3 before:rounded-2xl before:bg-gray-100/10 before:shadow-lg lg:p-20'
              }
            />
          ))}
        </div>
        {props.childrenPosition === 'after' ? props.children : null}
      </div>
    </section>
  );
}

export default SmartInfo;
