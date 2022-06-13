import React, { ReactNode } from 'react';

type IButtonOutlineProps = {
  children: ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const ButtonOutline = (props: IButtonOutlineProps) => {
  return (
    <button
      type={props.type}
      onClick={() => props.onClick()}
      className={`group relative inline-flex w-full items-center justify-center
       overflow-hidden rounded-full p-4 px-5 py-3 font-medium text-green-600
        shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-green-500 md:w-fit ${
          props.className ?? ''
        }`}
    >
      <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-green-600 via-green-400 to-green-800"></span>
      <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 rounded-full bg-green-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
      <span className="relative text-white">{props.children}</span>
    </button>
  );
};

export default ButtonOutline;
