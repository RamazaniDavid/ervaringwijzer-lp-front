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
        className="rounded-full bg-white  p-1 shadow-lg hover:animate-wiggle"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <path fill="none" d="M-1-1h582v402H-1z" />
          <path
            fill="#082446"
            d="M17.044 24.704a.782.782 0 0 0 .173.852l5.217 5.215a.783.783 0 1 0 1.107-1.107l-3.883-3.881h12.545a.783.783 0 1 0 0-1.565H19.658l3.883-3.882a.783.783 0 1 0-1.107-1.107l-5.219 5.218a.787.787 0 0 0-.17.257z"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          nextSlide();
        }}
        className="rounded-full bg-white  p-1 shadow-lg  hover:animate-wiggle"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <path fill="none" d="M-1-1h582v402H-1z" />
          <path
            fill="#082446"
            d="M32.956 25.296a.782.782 0 0 0-.173-.852l-5.217-5.215a.782.782 0 1 0-1.107 1.107l3.883 3.88H17.797a.783.783 0 1 0 0 1.566h12.545l-3.883 3.882a.782.782 0 1 0 1.107 1.107l5.219-5.218a.787.787 0 0 0 .17-.257z"
          />
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
      <div className="mx-auto w-11/12 lg:w-8/12">
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
      </div>
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
