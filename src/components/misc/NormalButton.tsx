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
      className={`group h-[50px] w-full md:w-[187px] relative inline-flex  items-center justify-center
       overflow-hidden rounded-full p-4 px-5 py-3 font-medium bg-[#0085ff]
        shadow-xl transition duration-1000 ease-out hover:ring-1 hover:ring-blue-500  ${
          props.className ?? ''
        }`}
    >
      <span className="relative text-[19px] leading-5 text-white md:text-[17px]">
        {props.children}
      </span>
    </button>
  );
};

export default NormalButton;
