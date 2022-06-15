import React, { useEffect } from 'react';

interface MapHelperProps {
  mapPathes: any[];
}

function MapHelper({ mapPathes }: MapHelperProps) {
  const [selected, setSelected] = React.useState<any>();

  useEffect(() => {
    if (mapPathes?.length > 0) {
      const importantCities = mapPathes.filter((path: any) => path.isImportant);
      if (importantCities.length > 0) {
        const rnd = Math.floor(Math.random() * importantCities.length);
        setSelected(importantCities[rnd]);
      }
    }

    return () => {
      setSelected(undefined);
    };
  }, [mapPathes]);

  if (!mapPathes) {
    return null;
  }

  return (
    <>
      <section id="map">
        <div className="mt-48 w-full bg-[#0085ff] p-4 text-xl text-white">
          <div className="mx-auto flex w-full flex-col-reverse lg:flex-row xl:w-10/12 2xl:w-8/12">
            <div className="mb-4 w-full basis-1 items-center self-center p-4 lg:basis-1/2">
              <h4 className="mb-5 hidden text-center text-4xl text-[#bfe0ff] lg:inline-block">
                Bij deze{' '}
                <span className="font-bold text-white">organisaties</span> wordt
                Ervaringwijzer ingezet
              </h4>
              {selected && (
                <div className="flex min-h-[370px] w-full flex-col rounded-xl bg-white p-8 text-black">
                  <div className="flex flex-row">
                    <div className="flex basis-4/5 flex-col">
                      <h4>{selected?.clientInfo?.name}</h4>
                      <p className="text-sm text-gray-500">
                        Gebruiker sinds {selected?.clientInfo?.startYear}
                      </p>
                    </div>
                    <div className="basis-1/5">
                      {selected?.clientInfo?.logo && (
                        <img
                          src={`/assets/images/logos/${selected?.clientInfo?.logo}`}
                          alt={selected?.clientInfo?.name}
                          className="ml-auto h-12 w-12"
                        />
                      )}
                    </div>
                  </div>
                  <hr className="my-8" />
                  <div className="flex flex-col space-y-8 text-lg font-normal text-[#082446]">
                    <div className="flex flex-row items-center space-x-4">
                      <img
                        src={`/assets/images/icons/users.svg`}
                        alt={selected?.clientInfo?.name}
                        className=" h-10 w-10"
                      />
                      <span>{selected?.clientInfo?.usersCount} gebruikers</span>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                      <img
                        src={`/assets/images/icons/response.svg`}
                        alt={selected?.clientInfo?.name}
                        className=" h-10 w-10"
                      />
                      <span>
                        {selected?.clientInfo?.highestResponse}% hoogste respons
                      </span>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                      <img
                        src={`/assets/images/icons/send.svg`}
                        alt={selected?.clientInfo?.name}
                        className=" h-10 w-10"
                      />
                      <span>
                        {selected?.clientInfo?.studiesCount} onderzoeken
                        aangemaakt
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="basis-1 lg:basis-1/2">
              <h4 className="mb-5 text-center text-2xl text-[#bfe0ff] lg:hidden">
                Bij deze{' '}
                <span className="font-bold text-white">organisaties</span> wordt
                Ervaringwijzer ingezet
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
                            selected?.name !== item.name
                              ? 'fill-[#9dd0ff]'
                              : 'fill-white animate-[pulse_1s_ease-in-out_infinite] '
                          } cursor-pointer`
                        : ''
                    }`}
                    onClick={() => {
                      if (item.isImportant) {
                        setSelected(item.name === selected?.name ? '' : item);
                      }
                    }}
                  >
                    <path d={item.value}></path>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MapHelper;
