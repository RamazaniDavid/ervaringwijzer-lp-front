import React from 'react';

function Businesses() {
  return (
    <section id="businesses">
      <div className="w-full bg-[#0085ff] text-xl text-white">
        <div className="mx-auto grid h-36 w-11/12 grid-cols-3 place-items-center text-center xl:w-10/12  xl:w-9/12 xl:grid-cols-4 2xl:w-8/12">
          <div className="text-[#bfe0ff]">
            <span className="mr-3 text-3xl  font-bold text-white">264</span>
            <br className="xl:hidden" />
            onderzoeken verricht
          </div>
          <div className="text-[#bfe0ff]">
            <span className="mr-3 text-3xl font-bold text-white">30+</span>
            <br className="xl:hidden" />
            tevreden klanten
          </div>
          <div className="text-[#bfe0ff]">
            <span className="mr-3 text-3xl font-bold text-white">92%</span>
            <br className="xl:hidden" />
            hoogste respons
          </div>
          <div className="hidden md:flex"></div>
        </div>
      </div>
    </section>
  );
}

export default Businesses;
