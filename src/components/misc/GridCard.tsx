import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface ItemProps {
  text: string | JSX.Element;
  description?: string | JSX.Element | JSX.Element[];
  icon?: string;
  className?: string;
  link?: string;
  action?: () => void;
  actionIcon?: string;
}

interface GridCardProps {
  title: string;
  icon?: string;
  className?: string;
  itemContainerClassName?: string;
  items: ItemProps[];
}

const renderDescription = (
  description?: string | JSX.Element | JSX.Element[]
) => {
  if (!description) {
    return null;
  }
  if (Array.isArray(description)) {
    return description.map((detail, index) => (
      <React.Fragment key={index}>{detail}</React.Fragment>
    ));
  }
  return description;
};

function GridCard(props: GridCardProps) {
  const router = useRouter();

  const renderContent = (item: ItemProps): React.ReactNode => {
    return (
      <div
        className={`flex flex-col space-x-2 space-y-2 rounded-xl bg-white h-full shadow ${
          props.className ?? ''
        }`}
      >
        <div className="my-4 flex w-full flex-row items-center">
          <span className="basis-1/4">
            <img
              src={`${router.basePath}/${item.icon}`}
              alt={item.text.toString()}
              className="mx-auto h-12 w-12"
            />
          </span>
          <span className={'basis-3/4 text-left '}>{item.text}</span>
        </div>
        {item.description && (
          <div className="flex px-4 pb-4">
            {renderDescription(item.description)}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="mx-auto mt-36 text-center">
        <h3 className={`mb-16 text-3xl font-medium leading-10 text-cBlue-500 `}>
          {props.title}
        </h3>
        <div className="w-special mx-auto flex flex-row flex-wrap items-stretch justify-center">
          {props.items.map((item, index) => (
            <div
              key={index}
              className={` basis-1 lg:basis-1/3 p-4 ${props.itemContainerClassName}`}
            >
              {item.link ? (
                <>
                  <Link href={item.link}>
                    <a className="">{renderContent(item)}</a>
                  </Link>
                </>
              ) : (
                <>{renderContent(item)}</>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GridCard;
