import React from 'react';

function Businesses() {
  return (
    <section id="businesses">
      <div className="w-full bg-[#0085ff] text-xl text-white">
        <div className="mx-auto grid h-36 w-11/12 grid-cols-3 place-items-center  lg:w-8/12 lg:grid-cols-4">
          <div className="">
            <span className="mr-3 font-bold lg:text-3xl">264</span> onderzoeken
            verricht
          </div>
          <div className="">
            <span className="mr-3 text-3xl font-bold">30+</span> tevreden
            klanten
          </div>
          <div className="">
            <span className="mr-3 text-3xl font-bold">92%</span> hoogste respons
          </div>
          <div className="hidden md:flex"></div>
        </div>
      </div>
    </section>
  );
}

export default Businesses;
