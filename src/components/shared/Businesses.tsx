import React from 'react';

interface BusinessesProps {
  businesses: {
    title: string | JSX.Element;
    value: string | JSX.Element;
  }[];
  sectionId?: string;
  className?: string;
  goToRefElement?: string;
}

function Businesses(props: BusinessesProps) {
  if (!props.businesses || props.businesses.length === 0) {
    return null;
  }

  const goToHandler = () => {
    if (props.goToRefElement) {
      console.log(document?.querySelector(props.goToRefElement));

      window.scrollTo({
        top:
          (document.querySelector(props.goToRefElement) as HTMLElement)
            ?.offsetTop ?? 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id={props.sectionId ?? 'businesses'}>
      <div className="w-full bg-cLightBlue-500 text-xl text-white">
        <div className="mx-auto flex min-h-[7rem] w-11/12 flex-row place-items-center justify-between text-center  lg:min-h-[6rem] lg:w-10/12  xl:w-9/12 xl:grid-cols-4 2xl:w-7/12">
          {props.businesses.map((business, ix) => (
            <div
              className="lf:text-left flex basis-1/3 flex-col items-center space-x-3  text-center md:basis-1/4 lg:flex-row"
              key={ix}
            >
              <span className="text-2xl font-bold  text-white lg:text-3xl">
                {business.value}
              </span>
              <span className="text-left text-cLightGreenBlue-400">
                {business.title}
              </span>
            </div>
          ))}
          <div className="hidden  md:flex md:basis-1/4">
            {props.goToRefElement && (
              <button
                className="rounded-full border-0 bg-white font-bold hover:animate-bounce"
                onClick={() => goToHandler()}
              >
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="21" cy="21" r="21" fill="#fff" />
                  <path
                    d="M12 18l9 9 9-9"
                    stroke="#0085FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Businesses;
