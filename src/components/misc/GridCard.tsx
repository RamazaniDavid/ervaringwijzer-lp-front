import { useRouter } from 'next/router';
import React from 'react';

interface GridCardProps {
  title: string;
  icon?: string;
  className?: string;
  data: {
    text: string;
    icon?: string;
    className?: string;
    action?: () => void;
    actionIcon?: string;
  }[];
}

function GridCard(props: GridCardProps) {
  const router = useRouter();

  return (
    <>
      <div className="mx-auto mt-36 text-center">
        <h3
          className={`mb-16 text-3xl font-medium leading-10 text-[#082446] ${props.className}`}
        >
          {props.title}
        </h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 xl:gap-6">
          {props.data.map((item, index) => (
            <div
              key={index}
              className="flex h-36 w-full flex-row items-center space-x-2 rounded-xl bg-white px-2 xl:h-24"
            >
              <span className="basis-1/4">
                <img
                  src={`${router.basePath}/${item.icon}`}
                  alt={item.text}
                  className="mx-auto h-12 w-12"
                />
              </span>
              <span className="basis-3/4 text-left ">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GridCard;
