import React, { ReactNode } from 'react';

type IButtonOutlineProps = {
  children: ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
};

const NormalButton = (props: IButtonOutlineProps) => {
  return (
    <button
      type={props.type}
      onClick={() => props.onClick()}
      disabled={props.disabled}
      className={`group h-[50px] w-full md:w-fit relative inline-flex  items-center justify-center
       overflow-hidden rounded-full p-4 px-5 py-3 font-medium bg-cLightBlue-500
        shadow-xl transition duration-1000 ease-out hover:ring-1 hover:scale-110 hover:ring-blue-500  text-white ${
          props.className ?? ''
        }`}
    >
      <span className="relative text-[19px] leading-5 md:text-[17px]">
        {props.children}
      </span>
    </button>
  );
};

export default NormalButton;
