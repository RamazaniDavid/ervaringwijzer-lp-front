import Link from 'next/link';
import React from 'react';

interface INavbarItemProps {
  path: string;
  text: string;
  logo?: string;
  className?: string;
  style?: string;
  hoverStyle?: string;
  target?: string;
}

function NavbarItem(props: INavbarItemProps) {
  return (
    <>
      <style jsx>{`
        #${props.text.replace(/\s+/g, '-')} {
          ${props.style}
        }
        #${props.text.replace(/\s+/g, '-')}:hover {
          ${props.hoverStyle}
        }
      `}</style>

      <Link href={props.path}>
        <a
          className={`${props.className} flex px-4 py-2 font-medium text-gray-600  hover:scale-110 hover:text-gray-800`}
          id={props.text.replace(/\s+/g, '-')}
          target={props.target}
        >
          {props.logo && <img src={props.logo} alt={props.text} />}
          {props.text}
        </a>
      </Link>
    </>
  );
}

export default NavbarItem;
