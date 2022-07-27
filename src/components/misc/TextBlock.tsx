import React from 'react';

interface TextBlockProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  children?: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
}

function TextBlock(props: TextBlockProps) {
  return (
    <div
      className={`mx-auto mt-8 w-11/12 md:w-10/12 xl:w-7/12 items-center px-12 pt-24 text-center leading-7 ${props.className}`}
      style={{ ...props.style }}
    >
      <h2 className="mb-8 text-2xl font-bold leading-tight lg:text-4xl">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="mb-8 text-base text-gray-500 lg:text-lg">
          {props.subtitle}
        </p>
      )}
      <div className="flex flex-col  break-words text-base font-light text-[#5e7187] antialiased lg:text-lg  2xl:text-xl">
        {props.children}
      </div>
    </div>
  );
}

export default TextBlock;
