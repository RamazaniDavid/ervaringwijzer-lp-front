import React from 'react';

interface BusinessesProps {
  businesses: {
    title: string | JSX.Element;
    value: string | JSX.Element;
  }[];
}

function Businesses({ businesses }: BusinessesProps) {
  if (!businesses || businesses.length === 0) {
    return null;
  }

  return (
    <section id="businesses">
      <div className="w-full bg-[#0085ff] text-xl text-white">
        <div className="mx-auto grid min-h-[7rem] w-11/12 grid-cols-3 place-items-center text-center  lg:min-h-[6rem] lg:w-10/12  xl:w-9/12 xl:grid-cols-4 2xl:w-7/12">
          {businesses.map((business, ix) => (
            <div
              className="lf:text-left flex flex-col items-center  space-x-3 text-center lg:flex-row"
              key={ix}
            >
              <span className="text-2xl font-bold  text-white lg:text-3xl">
                {business.value}
              </span>
              <span className="text-[#bfe0ff]">{business.title}</span>
            </div>
          ))}
          <div className="hidden md:flex"></div>
        </div>
      </div>
    </section>
  );
}

export default Businesses;
