import React, { useEffect } from 'react';

interface PhotoWallProps {
  photos: {
    src: string;
    alt: string;
    className?: string;
  }[];
  className?: string;
  style?: React.CSSProperties;
  maxHexagons?: number;
}

function PhotoWall(props: PhotoWallProps) {
  useEffect(() => {}, []);

  if (props.photos.length === 0) {
    return null;
  }

  return (
    <>
      <style jsx>{`
        .photo-wall {
          text-align: center;
        }

        /* --- HEX LINKS --- */

        .hex1,
        .hex2 {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }

        .hex1 {
          -webkit-transform: rotate(60deg);
          -moz-transform: rotate(60deg);
          -ms-transform: rotate(60deg);
          -o-transform: rotate(60deg);
          transform: rotate(60deg);
          margin: -20px 10px;
        }

        .hex2 {
          -webkit-transform: rotate(60deg);
          -moz-transform: rotate(60deg);
          -ms-transform: rotate(60deg);
          -o-transform: rotate(60deg);
          transform: rotate(60deg);
        }

        .hexlink {
          -webkit-transform: rotate(-120deg);
          -moz-transform: rotate(-120deg);
          -ms-transform: rotate(-120deg);
          -o-transform: rotate(-120deg);
          transform: rotate(-120deg);
          position: relative;
          display: inline-block;
          text-decoration: none;
          background-position: center center;
          background-size: cover;
        }

        /* --- OVERLAY --- */

        .hexcover {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: transparent;
          opacity: 0.9;
        }
      `}</style>

      <div className="photo-wall">
        <div className="relative mt-12 mb-9 box-border py-5">
          {Array.from(Array(Math.floor(props.photos.length / 3)).keys()).map(
            (i) => (
              <React.Fragment key={i}>
                {props.photos.slice(i * 3, (i + 1) * 3).map((photo, ix) => (
                  <>
                    <div className="hex1 h-[24vw] w-[22vw]  lg:h-[16vw] lg:w-[15vw]">
                      <div className="hex2 h-[24vw] w-[22vw]  lg:h-[16vw] lg:w-[15vw]">
                        <div
                          className={`hexlink h-[24vw] w-[22vw] lg:h-[16vw] lg:w-[15vw] hover:opacity-75 hover:animate-pulse hover:scale-125`}
                          style={{
                            backgroundImage: `url(${photo.src})`,
                          }}
                        ></div>
                      </div>
                    </div>
                    {ix % 3 === 1 && <br />}
                  </>
                ))}
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default PhotoWall;
