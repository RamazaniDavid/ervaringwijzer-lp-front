import React, { useRef } from 'react';
import Slider from 'react-slick';

function navigatorGen(
  nextSlide: Function,
  prevSlide: Function
): React.ReactNode {
  return (
    <>
      <button
        onClick={() => {
          prevSlide();
        }}
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" />
        </svg>
      </button>
      <button
        onClick={() => {
          nextSlide();
        }}
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
        </svg>
      </button>
    </>
  );
}

interface SlickSliderProps {
  title?: string;
  sliderSettings?: any;
  children: React.ReactNode;
}

function SlickSlider(props: SlickSliderProps) {
  const sliderRef = useRef<Slider>(null);

  const nextSlide = () => {
    sliderRef?.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef?.current?.slickPrev();
  };

  return (
    <div className="mt-12 flex w-full flex-col">
      {props.title && (
        <div className="mx-auto flex flex-row justify-between p-4 xl:w-full ">
          <span className=" text-left  text-4xl text-cBlue-500">
            {props.title}
          </span>
          <div className="hidden flex-row space-x-4 xl:flex">
            {navigatorGen(nextSlide, prevSlide)}
          </div>
        </div>
      )}
      <div>
        <Slider {...props.sliderSettings} ref={sliderRef}>
          {props.children}
        </Slider>
      </div>
      <div className="flex flex-row justify-center">
        <div
          className={`mt-8 flex-row space-x-4 ${
            props.title ? 'xl:hidden' : ' '
          }`}
        >
          {navigatorGen(nextSlide, prevSlide)}
        </div>
      </div>
    </div>
  );
}

export default SlickSlider;
