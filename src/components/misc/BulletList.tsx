import React from 'react';

type ItemType = string | JSX.Element;

interface IProps {
  items: ItemType[];
  className?: string;
  style?: React.CSSProperties;
  itemClassName?: string;
  itemStyle?: React.CSSProperties;
}

function BulletList(props: IProps) {
  // generate list of bullets
  return (
    <ul
      className={`ml-6 space-y-3 mt-4 ${props.className ?? ''} `}
      style={props.style}
    >
      {props.items.map((item, index) => (
        <li
          key={index}
          className={`${
            props.itemClassName ??
            `relative before:absolute before:w-4 before:inset-y-1 before:-inset-x-6 
            before:bg-[url('/assets/images/icons/bullet.svg')] before:bg-no-repeat`
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default BulletList;
