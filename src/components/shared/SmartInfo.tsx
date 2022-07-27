import React from 'react';

import { MediaType } from '@/utils/types/MediaType';

import InfoBoxWithMedia from '../misc/InfoBoxWithMedia';

interface IProps {
  sectionId?: string;
  title: string | JSX.Element;
  description?: string | JSX.Element;
  children?: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  childrenPosition?: 'before' | 'after';
  infoBoxesPositionOrder?: ['left', 'right'] | ['right', 'left'];
  infoBoxes: {
    title: string | JSX.Element;
    description: string | JSX.Element;
    logo?: MediaType;
    media?: MediaType;
  }[];
}

function SmartInfo(props: IProps) {
  return (
    <section id={props.sectionId ?? 'smart-info'}>
      <div
        className={`flex flex-col items-center text-center mt-24 lg:mt-36 overflow-x-hidden ${
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
        <div className="">
          {props.infoBoxes.map((item, index) => (
            <InfoBoxWithMedia
              title={item.title}
              description={item.description}
              logo={item.logo}
              media={item.media}
              key={index}
              mediaPosition={
                (props.infoBoxesPositionOrder ?? ['right', 'left'])[index % 2]
              }
              className={'relative z-10 mx-auto p-8  lg:p-20'}
            />
          ))}
        </div>
        {props.childrenPosition === 'after' ? props.children : null}
      </div>
    </section>
  );
}

export default SmartInfo;
