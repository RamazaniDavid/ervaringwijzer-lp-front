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
      className={`mx-auto mt-8 w-8/12 items-center pt-24 text-center leading-7 ${props.className}`}
      style={{ ...props.style }}
    >
      <h2 className="mb-8 text-4xl font-medium leading-tight">{props.title}</h2>
      {props.subtitle && (
        <p className="mb-8 text-sm text-gray-500">{props.subtitle}</p>
      )}
      <div className="flex flex-col  break-words text-base font-light text-[#5e7187]  antialiased">
        {props.children}
      </div>
    </div>
  );
}

export default TextBlock;
