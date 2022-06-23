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
        .hex {
          display: block;
          margin: 0 auto;
          position: relative; /* width * 0.866 */
          box-sizing: border-box;
          -webkit-clip-path: polygon(
            0% 50%,
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%
          );
          -moz-clip-path: polygon(
            0% 50%,
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%
          );
        }

        .hex img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          -webkit-clip-path: polygon(
            0% 50%,
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%
          );
          -moz-clip-path: polygon(
            0% 50%,
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%
          );
        }
      `}</style>

      {Array.from(Array(Math.floor(props.photos.length / 3)).keys()).map(
        (i) => (
          <React.Fragment key={i}>
            {props.photos.slice(i * 3, (i + 1) * 3).map((photo, ix) => (
              <>
                <div className="h-[10vw] w-[12vw] ">
                  <div className="hex h-full w-full">
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                </div>
                {ix % 3 === 1 && <br />}
              </>
            ))}
          </React.Fragment>
        )
      )}
    </>
  );
}

export default PhotoWall;
