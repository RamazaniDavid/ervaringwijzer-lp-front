import React, { useEffect } from 'react';

interface PhotoWallProps {
  photos: {
    mostImportant: {
      src: string;
      alt: string;
      className: string;
    };
    lessImportant: {
      src: string;
      alt: string;
      className: string;
    };
    leastImportant: {
      src: string;
      alt: string;
      className: string;
    };
  };
  className?: string;
  style?: React.CSSProperties;
  maxHexagons?: number;
}

function PhotoWall(props: PhotoWallProps) {
  useEffect(() => {}, []);

  return (
    <>
      <style jsx>{``}</style>
      <div className="-mt-16  flex  flex-row items-center space-x-6 self-center lg:mt-12">
        <div className="  flex w-4/12 flex-col space-y-6">
          <div className="self-end">
            <img
              className={`h-auto w-full rounded-2xl ${
                props.photos.lessImportant.className
                  ? ` ${props.photos.lessImportant.className}`
                  : ''
              }`}
              src={props.photos.lessImportant.src}
              alt={props.photos.lessImportant.alt}
            />
          </div>
          <div className="w-6/12 self-end">
            <img
              className={`h-auto w-full rounded-2xl ${
                props.photos.leastImportant.className
                  ? ` ${props.photos.leastImportant.className}`
                  : ''
              }`}
              src={props.photos.leastImportant.src}
              alt={props.photos.leastImportant.alt}
            />
          </div>
        </div>
        <div className="w-8/12">
          <img
            className={`h-auto w-full rounded-2xl ${
              props.photos.mostImportant.className
                ? ` ${props.photos.mostImportant.className}`
                : ''
            }`}
            src={props.photos.mostImportant.src}
            alt={props.photos.mostImportant.alt}
          />
        </div>
      </div>
    </>
  );
}

export default PhotoWall;
