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

  console.log(props);

  return (
    <>
      <style jsx>{`
        .photo-wall {
          text-align: center;
        }

        /* --- HEX LINKS --- */

        #hexcontainer {
          position: relative;
          margin: 50px 0 35px 0;
          padding: 20px 0;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        .hex1,
        .hex2 {
          position: relative;
          display: inline-block;
          height: 220px;
          width: 190px;
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
          height: 220px;
          width: 190px;
          background-position: center center;
          background-size: cover;
        }

        #hl1 {
          background-image: url('https://picsum.photos/200/300/?random&1');
        }
        #hl2 {
          background-image: url('https://picsum.photos/200/300/?random&2');
        }
        #hl3 {
          background-image: url('https://picsum.photos/200/300/?random&3');
        }
        #hl4 {
          background-image: url('https://picsum.photos/200/300/?random&4');
        }
        #hl5 {
          background-image: url('https://picsum.photos/200/300/?random&5');
        }
        #hl6 {
          background-image: url('https://picsum.photos/200/300/?random&6');
        }
        #hl7 {
          background-image: url('https://picsum.photos/200/300/?random&7');
        }
        #hl8 {
          background-image: url('https://picsum.photos/200/300/?random&8');
        }
        #hl9 {
          background-image: url('https://picsum.photos/200/300/?random&9');
        }
        #hl10 {
          background-image: url('https://picsum.photos/200/300/?random&10');
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
        <div id="hexcontainer">
          <div className="hex1">
            <div className="hex2">
              <div className="hexlink" id="hl1"></div>
            </div>
          </div>

          <br />

          <div className="hex1">
            <div className="hex2">
              <div className="hexlink" id="hl2"></div>
            </div>
          </div>
          <div className="hex1">
            <div className="hex2">
              <a className="hexlink" id="hl3"></a>
            </div>
          </div>

          <br />

          <div className="hex1">
            <div className="hex2">
              <a className="hexlink" id="hl4"></a>
            </div>
          </div>
          <div className="hex1">
            <div className="hex2">
              <a className="hexlink" id="hl5"></a>
            </div>
          </div>
          <div className="hex1">
            <div className="hex2">
              <a className="hexlink" id="hl6"></a>
            </div>
          </div>

          <br />

          <div className="hex1">
            <div className="hex2">
              <a className="hexlink" id="hl7"></a>
            </div>
          </div>

          <div className="hex1">
            <div className="hex2">
              <a className="hexlink" id="hl8"></a>
            </div>
          </div>
          <div className="hex1">
            <div className="hex2">
              <a className="hexlink" id="hl9"></a>
            </div>
          </div>
          <div className="hex1">
            <div className="hex2">
              <a className="hexlink" id="hl10"></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoWall;
