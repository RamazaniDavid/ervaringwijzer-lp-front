import React from 'react';

import SlickSlider from '../misc/SlickSlider';

function CaseSlide() {
  const cases = [
    {
      src: '/assets/images/software/cases/ervaringwijzer-app-01.png',
      alt: 'Ervaringwijzer App',
    },
    {
      src: '/assets/images/software/cases/ervaringwijzer-app-02.png',
      alt: 'Ervaringwijzer App',
    },
    {
      src: '/assets/images/software/cases/ervaringwijzer-app-03.png',
      alt: 'Ervaringwijzer App',
    },
    {
      src: '/assets/images/software/cases/ervaringwijzer-app-04.png',
      alt: 'Ervaringwijzer App',
    },
    {
      src: '/assets/images/software/cases/ervaringwijzer-app-05.png',
      alt: 'Ervaringwijzer App',
    },
    {
      src: '/assets/images/software/cases/ervaringwijzer-app-06.png',
      alt: 'Ervaringwijzer App',
    },
    {
      src: '/assets/images/software/cases/ervaringwijzer-app-07.png',
      alt: 'Ervaringwijzer App',
    },
    {
      src: '/assets/images/software/cases/ervaringwijzer-app-08.png',
      alt: 'Ervaringwijzer App',
    },
    {
      src: '/assets/images/software/cases/ervaringwijzer-app-09.png',
      alt: 'Ervaringwijzer App',
    },
    {
      src: '/assets/images/software/cases/ervaringwijzer-app-10.png',
      alt: 'Ervaringwijzer App',
    },
    {
      src: '/assets/images/software/cases/ervaringwijzer-app-11.png',
      alt: 'Ervaringwijzer App',
    },
  ];
  return (
    <section id="Case">
      <SlickSlider
        title=""
        sliderSettings={{
          dots: false,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          adaptiveHeight: true,
        }}
      >
        {cases.map((caseItem, index) => (
          <div key={index} className="mx-auto w-full ">
            <img
              src={caseItem.src}
              alt={caseItem.alt}
              className="mx-auto w-fit rounded-3xl shadow-md lg:h-[80vh]"
            />
          </div>
        ))}
      </SlickSlider>
    </section>
  );
}

export default CaseSlide;
