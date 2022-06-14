import React from 'react';

interface MapHelperProps {
  mapPathes: any[];
}

function MapHelper({ mapPathes }: MapHelperProps) {
  const [selected, setSelected] = React.useState<string>('');

  if (!mapPathes) {
    return null;
  }

  return (
    <section id="map">
      <div className="mt-48 w-full bg-[#0085ff] p-8 text-xl text-white">
        <div className="mx-auto w-11/12 xl:w-9/12 2xl:w-6/12 ">
          <h4 className="mb-5 text-center text-2xl text-[#bfe0ff] lg:hidden">
            Bij deze <span className="font-bold text-white">organisaties</span>{' '}
            wordt Ervaringwijzer ingezet
          </h4>
          <svg
            className="mx-auto h-auto max-h-[731px] w-full max-w-[605px] fill-[#46a6ff] stroke-[#0085ff] lg:mx-0 lg:ml-auto  "
            viewBox="0 0 606 733"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {mapPathes.map((item, ix) => (
              <g
                id={item.name}
                key={ix}
                className={`${
                  item.isImportant
                    ? `${
                        selected !== item.name
                          ? 'fill-[#9dd0ff]'
                          : 'fill-white animate-pulse'
                      } cursor-pointer`
                    : ''
                }`}
                onClick={() => {
                  if (item.isImportant) {
                    setSelected(item.name === selected ? '' : item.name);
                  }
                }}
              >
                <path d={item.value}></path>
              </g>
            ))}
          </svg>
          {selected && <></>}
        </div>
      </div>
    </section>
  );
}

export default MapHelper;
