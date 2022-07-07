import Link from 'next/link';
import React from 'react';

import renderTitle from '@/utils/common/RenderTitle';
import { CtaType, SimpleCtaType } from '@/utils/types/CtaType';
import { TitleType } from '@/utils/types/TitleType';

import ContactButton from '../misc/ctaButtons/ContactButton';
import ScheduleMeeting from '../misc/ctaButtons/ScheduleMeeting';
import TryButton from '../misc/TryButton';

interface IProps {
  sectionId?: string;
  title: TitleType | JSX.Element;
  Ctas: CtaType[];
  className?: string;
  style?: React.CSSProperties;
}

const renderCta = (item: CtaType): JSX.Element => {
  if (!item) return <></>;
  if ((item as SimpleCtaType).link) {
    const simpleCta = item as SimpleCtaType;
    return (
      <Link href={simpleCta.link}>
        <a
          className={`group h-[50px] w-full md:w-[187px] relative inline-flex  items-center justify-center
       overflow-hidden rounded-full p-4 px-5 py-3 font-medium bg-cLightBlue-500
        shadow-xl transition duration-1000 ease-out hover:ring-1 hover:ring-blue-500  ${
          simpleCta.className ?? ''
        }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative text-sm leading-5 text-white md:text-base">
            {simpleCta.title}
          </span>
        </a>
      </Link>
    );
  }
  if (item === ScheduleMeeting) {
    return <ScheduleMeeting />;
  }
  if (item === ContactButton) {
    return <ContactButton />;
  }
  if (item === TryButton) {
    return <TryButton />;
  }

  return <>{item}</>;
};

function CtaPanel(props: IProps) {
  return (
    <section id={props.sectionId ?? 'CtaPanel'}>
      <div
        className={`w-full items-center bg-cBlue-500 text-white py-8  ${
          props.className ?? ''
        } `}
      >
        <div
          className="mx-auto flex min-h-[14rem] w-11/12 flex-col place-items-center md:flex-row 
        lg:min-h-[16rem] lg:w-10/12  xl:w-9/12  2xl:w-7/12"
        >
          <div className="flex flex-1">{renderTitle(props.title)}</div>
          <div className="flex flex-1  space-x-2">
            {props.Ctas.map((item, index) => {
              return (
                <div key={index} className="flex flex-1">
                  {renderCta(item)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaPanel;
