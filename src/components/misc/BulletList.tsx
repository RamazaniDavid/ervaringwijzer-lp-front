import React from 'react';

import renderTitle from '@/utils/common/RenderTitle';
import { TitleType } from '@/utils/types/TitleType';

type ItemType = string | JSX.Element;

interface IProps {
  title?: TitleType | JSX.Element;
  items: ItemType[];
  className?: string;
  style?: React.CSSProperties;
  itemClassName?: string;
  itemStyle?: React.CSSProperties;
}

function BulletList(props: IProps) {
  // generate list of bullets
  return (
    <div className={` mt-4 ${props.className ?? ''}`}>
      {props.title && renderTitle(props.title)}
      <ul className={`ml-6 space-y-3 `} style={props.style}>
        {props.items.map((item, index) => (
          <li
            key={index}
            className={`${
              props.itemClassName ??
              `relative before:absolute before:w-4 before:inset-y-1 before:-ml-6
            before:bg-[url('/assets/images/icons/bullet.svg')] before:bg-no-repeat`
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BulletList;
