import React from 'react';

function Businesses() {
  return (
    <section id="businesses">
      <div className="w-full bg-[#0085ff] text-xl text-white">
        <div className="grid h-36 grid-cols-4 place-items-center  ">
          <div className="">
            <span className="text-3xl font-bold">264</span> onderzoeken verricht
          </div>
          <div className="">
            <span className="text-3xl font-bold">30+</span> tevreden klanten
          </div>
          <div className="">
            <span className="text-3xl font-bold">92%</span> hoogste respons
          </div>
          <div className="hidden md:flex"></div>
        </div>
      </div>
    </section>
  );
}

export default Businesses;
