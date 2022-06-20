import Link from 'next/link';
import React from 'react';

type IHeaderLogoProps = {
  textInVisible: boolean;
};

const SiteLogo = (props: IHeaderLogoProps) => {
  return (
    <>
      <style jsx>{``}</style>
      <div className="cursor-pointer">
        <Link href="/">
          <svg
            width={props.textInVisible ? '64' : '320'}
            height="30"
            viewBox={`0 0 ${props.textInVisible ? '64' : '320'} 30`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <g
              id="logoText"
              className={props.textInVisible ? 'invisible' : 'visible'}
            >
              <path
                d="M 51.119 5.79 L 39.735 5.79 L 39.735 22.471 L 51.119 22.471 L 51.119 19.785 L 42.701 19.785 L 42.701 15.422 L 51.119 15.422 L 51.119 12.736 L 42.701 12.736 L 42.701 8.476 L 51.119 8.476 L 51.119 5.79 Z"
                fill="#082446"
                id="logoText01"
              ></path>
              <path
                d="M 57.094 11.162 L 54.269 11.162 L 54.269 22.471 L 57.094 22.471 L 57.094 16.416 C 57.094 16.259 57.125 16.023 57.188 15.709 C 57.266 15.395 57.407 15.081 57.611 14.766 C 57.831 14.452 58.137 14.177 58.529 13.942 C 58.938 13.691 59.471 13.565 60.13 13.565 C 60.35 13.565 60.57 13.588 60.789 13.636 C 61.025 13.667 61.26 13.714 61.496 13.777 L 61.496 11.044 C 61.323 10.997 61.15 10.958 60.978 10.926 C 60.821 10.895 60.656 10.879 60.483 10.879 C 59.73 10.879 59.063 11.06 58.482 11.421 C 57.902 11.782 57.454 12.293 57.141 12.952 L 57.094 12.952 L 57.094 11.162 Z"
                fill="#082446"
                id="logoText02"
              ></path>
              <path
                d="M 62.691 11.162 L 65.775 11.162 L 68.788 19.078 L 68.835 19.078 L 71.872 11.162 L 74.767 11.162 L 70.318 22.471 L 67.305 22.471 L 62.691 11.162 Z"
                fill="#082446"
                id="logoText03"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 83.42 20.916 L 83.491 20.916 L 83.491 22.471 L 86.033 22.471 L 86.033 15.968 C 86.033 15.701 86.025 15.395 86.009 15.049 C 85.994 14.688 85.939 14.319 85.845 13.942 C 85.766 13.565 85.625 13.196 85.421 12.835 C 85.233 12.458 84.958 12.128 84.597 11.845 C 84.236 11.562 83.781 11.335 83.232 11.162 C 82.682 10.973 82.008 10.879 81.207 10.879 C 80.313 10.879 79.442 11.02 78.594 11.303 C 77.762 11.586 77.033 12.049 76.405 12.693 L 77.888 14.177 C 78.265 13.816 78.712 13.534 79.23 13.329 C 79.748 13.109 80.305 13 80.901 13 C 81.654 13 82.274 13.18 82.761 13.541 C 83.247 13.887 83.491 14.413 83.491 15.12 L 83.491 15.426 L 82.784 15.426 C 82.314 15.426 81.811 15.442 81.278 15.473 C 80.744 15.489 80.211 15.544 79.677 15.638 C 79.159 15.717 78.657 15.842 78.17 16.015 C 77.684 16.188 77.252 16.424 76.876 16.722 C 76.515 17.005 76.224 17.366 76.005 17.806 C 75.785 18.23 75.675 18.748 75.675 19.361 C 75.675 19.926 75.793 20.421 76.028 20.845 C 76.264 21.269 76.57 21.622 76.946 21.905 C 77.339 22.188 77.778 22.4 78.265 22.541 C 78.767 22.683 79.277 22.753 79.795 22.753 C 80.548 22.753 81.239 22.612 81.866 22.329 C 82.494 22.031 83.012 21.56 83.42 20.916 Z M 82.737 17.405 L 83.326 17.405 L 83.326 18.041 C 83.326 18.842 83.09 19.478 82.62 19.95 C 82.164 20.405 81.45 20.633 80.477 20.633 C 80.242 20.633 80.007 20.609 79.771 20.562 C 79.536 20.499 79.324 20.405 79.136 20.28 C 78.947 20.154 78.79 20.005 78.665 19.832 C 78.555 19.643 78.5 19.416 78.5 19.149 C 78.5 18.74 78.649 18.426 78.947 18.206 C 79.245 17.971 79.606 17.798 80.03 17.688 C 80.47 17.562 80.933 17.484 81.419 17.452 C 81.906 17.421 82.345 17.405 82.737 17.405 Z"
                fill="#082446"
                id="logoText04"
              ></path>
              <path
                d="M 89.072 11.162 L 91.897 11.162 L 91.897 12.952 L 91.944 12.952 C 92.258 12.293 92.706 11.782 93.286 11.421 C 93.867 11.06 94.534 10.879 95.287 10.879 C 95.46 10.879 95.625 10.895 95.782 10.926 C 95.954 10.958 96.127 10.997 96.299 11.044 L 96.299 13.777 C 96.064 13.714 95.829 13.667 95.593 13.636 C 95.373 13.588 95.154 13.565 94.934 13.565 C 94.275 13.565 93.741 13.691 93.333 13.942 C 92.941 14.177 92.635 14.452 92.415 14.766 C 92.211 15.081 92.07 15.395 91.991 15.709 C 91.929 16.023 91.897 16.259 91.897 16.416 L 91.897 22.471 L 89.072 22.471 L 89.072 11.162 Z"
                fill="#082446"
                id="logoText05"
              ></path>
              <g id="logoText06">
                <path
                  d="M 101.094 11.162 L 98.269 11.162 L 98.269 22.471 L 101.094 22.471 L 101.094 11.162 Z"
                  fill="#082446"
                ></path>
                <path
                  d="M 99.676 9.08 C 100.63 9.08 101.403 8.307 101.403 7.353 C 101.403 6.398 100.63 5.625 99.676 5.625 C 98.723 5.625 97.95 6.398 97.95 7.353 C 97.95 8.307 98.723 9.08 99.676 9.08 Z"
                  fill="#082446"
                ></path>
              </g>
              <path
                d="M 104.337 11.162 L 107.021 11.162 L 107.021 12.976 L 107.068 12.976 C 107.335 12.411 107.743 11.924 108.292 11.515 C 108.841 11.091 109.587 10.879 110.528 10.879 C 111.282 10.879 111.917 11.005 112.435 11.256 C 112.969 11.507 113.4 11.837 113.73 12.246 C 114.059 12.654 114.295 13.125 114.436 13.659 C 114.577 14.193 114.648 14.751 114.648 15.332 L 114.648 22.471 L 111.823 22.471 L 111.823 16.746 C 111.823 16.431 111.807 16.086 111.776 15.709 C 111.745 15.316 111.658 14.955 111.517 14.625 C 111.391 14.28 111.187 13.997 110.905 13.777 C 110.622 13.541 110.238 13.424 109.751 13.424 C 109.281 13.424 108.88 13.502 108.551 13.659 C 108.237 13.816 107.97 14.028 107.75 14.295 C 107.546 14.562 107.397 14.869 107.303 15.214 C 107.209 15.56 107.162 15.921 107.162 16.298 L 107.162 22.471 L 104.337 22.471 L 104.337 11.162 Z"
                fill="#082446"
                id="logoText07"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 129.484 21.458 L 129.484 11.162 L 126.8 11.162 L 126.8 12.858 L 126.753 12.858 C 126.345 12.167 125.796 11.664 125.105 11.35 C 124.415 11.036 123.669 10.879 122.869 10.879 C 121.99 10.879 121.205 11.036 120.515 11.35 C 119.84 11.649 119.259 12.065 118.773 12.599 C 118.286 13.133 117.917 13.761 117.666 14.484 C 117.415 15.206 117.29 15.984 117.29 16.816 C 117.29 17.617 117.423 18.371 117.69 19.078 C 117.957 19.785 118.333 20.397 118.82 20.916 C 119.322 21.434 119.918 21.85 120.609 22.164 C 121.299 22.463 122.068 22.612 122.916 22.612 C 123.622 22.612 124.313 22.478 124.988 22.212 C 125.662 21.929 126.204 21.512 126.612 20.963 L 126.659 20.963 L 126.659 21.787 C 126.659 22.353 126.596 22.863 126.471 23.319 C 126.361 23.79 126.165 24.191 125.882 24.52 C 125.615 24.85 125.246 25.109 124.776 25.298 C 124.321 25.486 123.756 25.581 123.081 25.581 C 122.28 25.581 121.574 25.439 120.962 25.157 C 120.35 24.874 119.761 24.473 119.196 23.955 L 117.502 26.264 C 118.302 26.971 119.173 27.457 120.115 27.725 C 121.056 27.991 122.053 28.125 123.104 28.125 C 124.203 28.125 125.152 27.968 125.953 27.654 C 126.753 27.34 127.412 26.892 127.93 26.311 C 128.464 25.746 128.856 25.047 129.107 24.214 C 129.358 23.397 129.484 22.478 129.484 21.458 Z M 122.092 13.683 C 122.5 13.51 122.955 13.424 123.457 13.424 C 124.493 13.424 125.309 13.73 125.906 14.342 C 126.502 14.955 126.8 15.756 126.8 16.746 C 126.8 17.217 126.722 17.657 126.565 18.065 C 126.408 18.473 126.18 18.827 125.882 19.125 C 125.6 19.408 125.246 19.636 124.823 19.808 C 124.415 19.981 123.952 20.067 123.434 20.067 C 122.963 20.067 122.524 19.981 122.116 19.808 C 121.707 19.636 121.354 19.4 121.056 19.102 C 120.758 18.803 120.523 18.458 120.35 18.065 C 120.193 17.672 120.115 17.248 120.115 16.793 C 120.115 16.29 120.193 15.835 120.35 15.426 C 120.523 15.002 120.75 14.649 121.033 14.366 C 121.331 14.068 121.684 13.84 122.092 13.683 Z"
                fill="#082446"
                id="logoText08"
              ></path>
              <path
                d="M 131.152 11.162 L 134.213 11.162 L 136.661 19.078 L 136.708 19.078 L 138.992 11.162 L 142.052 11.162 L 144.5 19.078 L 144.547 19.078 L 146.901 11.162 L 149.75 11.162 L 145.913 22.471 L 143.111 22.471 L 140.428 14.743 L 140.38 14.743 L 138.003 22.471 L 135.084 22.471 L 131.152 11.162 Z"
                fill="#082446"
                id="logoText09"
              ></path>
              <g id="logoText10">
                <path
                  d="M 154.291 11.162 L 151.466 11.162 L 151.466 22.471 L 154.291 22.471 L 154.291 11.162 Z"
                  fill="#082446"
                ></path>
                <path
                  d="M 154.639 7.353 C 154.639 8.307 153.866 9.08 152.912 9.08 C 151.959 9.08 151.186 8.307 151.186 7.353 C 151.186 6.398 151.959 5.625 152.912 5.625 C 153.866 5.625 154.639 6.398 154.639 7.353 Z"
                  fill="#082446"
                ></path>
              </g>
              <g id="logoText11">
                <path
                  d="M 160.406 11.162 L 160.406 23.154 C 160.406 23.861 160.359 24.512 160.265 25.109 C 160.17 25.722 159.982 26.248 159.7 26.688 C 159.433 27.143 159.048 27.497 158.546 27.748 C 158.044 27.999 157.393 28.125 156.592 28.125 C 156.325 28.125 156.066 28.109 155.815 28.078 C 155.564 28.047 155.313 27.991 155.062 27.913 L 155.274 25.463 C 155.431 25.494 155.58 25.518 155.721 25.533 C 155.862 25.565 156.011 25.581 156.168 25.581 C 156.514 25.581 156.78 25.502 156.969 25.345 C 157.173 25.204 157.314 25.015 157.393 24.78 C 157.487 24.544 157.542 24.285 157.557 24.002 C 157.573 23.719 157.581 23.444 157.581 23.177 L 157.581 11.162 L 160.406 11.162 Z"
                  fill="#082446"
                ></path>
                <path
                  d="M 159.015 9.08 C 159.968 9.08 160.741 8.307 160.741 7.353 C 160.741 6.398 159.968 5.625 159.015 5.625 C 158.061 5.625 157.289 6.398 157.289 7.353 C 157.289 8.307 158.061 9.08 159.015 9.08 Z"
                  fill="#082446"
                ></path>
              </g>
              <path
                d="M 168.898 13.471 L 162.849 19.856 L 162.849 22.471 L 172.594 22.471 L 172.594 20.209 L 166.191 20.209 L 172.312 13.73 L 172.312 11.162 L 163.131 11.162 L 163.131 13.424 L 168.898 13.424 L 168.898 13.471 Z"
                fill="#082446"
                id="logoText12"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 177.265 17.806 C 177.36 18.654 177.689 19.314 178.254 19.785 C 178.819 20.256 179.502 20.492 180.302 20.492 C 181.008 20.492 181.597 20.35 182.068 20.067 C 182.554 19.769 182.978 19.4 183.339 18.96 L 185.363 20.492 C 184.704 21.308 183.967 21.89 183.151 22.235 C 182.335 22.581 181.479 22.753 180.585 22.753 C 179.737 22.753 178.937 22.612 178.184 22.329 C 177.43 22.047 176.779 21.646 176.23 21.128 C 175.68 20.609 175.241 19.989 174.911 19.267 C 174.597 18.528 174.441 17.712 174.441 16.816 C 174.441 15.921 174.597 15.112 174.911 14.39 C 175.241 13.651 175.68 13.023 176.23 12.505 C 176.779 11.986 177.43 11.586 178.184 11.303 C 178.937 11.02 179.737 10.879 180.585 10.879 C 181.369 10.879 182.083 11.02 182.727 11.303 C 183.386 11.57 183.943 11.963 184.398 12.481 C 184.869 13 185.23 13.643 185.481 14.413 C 185.748 15.167 185.881 16.039 185.881 17.028 L 185.881 17.806 L 177.265 17.806 Z M 183.056 15.685 C 183.041 14.853 182.782 14.201 182.28 13.73 C 181.777 13.243 181.079 13 180.184 13 C 179.337 13 178.662 13.243 178.16 13.73 C 177.673 14.217 177.375 14.869 177.265 15.685 L 183.056 15.685 Z"
                fill="#082446"
                id="logoText13"
              ></path>
              <path
                d="M 191.348 11.162 L 188.523 11.162 L 188.523 22.471 L 191.348 22.471 L 191.348 16.416 C 191.348 16.259 191.379 16.023 191.442 15.709 C 191.521 15.395 191.662 15.081 191.866 14.766 C 192.086 14.452 192.392 14.177 192.784 13.942 C 193.192 13.691 193.726 13.565 194.385 13.565 C 194.604 13.565 194.824 13.588 195.044 13.636 C 195.279 13.667 195.515 13.714 195.75 13.777 L 195.75 11.044 C 195.577 10.997 195.405 10.958 195.232 10.926 C 195.075 10.895 194.91 10.879 194.738 10.879 C 193.985 10.879 193.318 11.06 192.737 11.421 C 192.156 11.782 191.709 12.293 191.395 12.952 L 191.348 12.952 L 191.348 11.162 Z"
                fill="#082446"
                id="logoText14"
              ></path>
            </g>
            <g id="logoShape">
              <g id="logoCircleContainer">
                <path
                  id="logoCircle"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M 30 14.063 C 30 21.829 23.704 28.125 15.938 28.125 C 8.171 28.125 1.875 21.829 1.875 14.063 C 1.875 6.296 8.171 0 15.938 0 C 23.704 0 30 6.296 30 14.063 Z M 12.969 20.313 C 11.588 20.313 10.469 19.193 10.469 17.813 L 10.469 10.313 C 10.469 8.932 11.588 7.812 12.969 7.812 L 20.156 7.812 C 20.847 7.812 21.406 8.372 21.406 9.062 C 21.406 9.753 20.847 10.313 20.156 10.313 L 14.219 10.313 C 13.528 10.313 12.969 10.872 12.969 11.563 C 12.969 12.253 13.528 12.813 14.219 12.813 L 20.156 12.813 C 20.847 12.813 21.406 13.372 21.406 14.063 C 21.406 14.753 20.847 15.313 20.156 15.313 L 14.219 15.313 C 13.528 15.313 12.969 15.872 12.969 16.563 C 12.969 17.253 13.528 17.813 14.219 17.813 L 20.156 17.813 C 20.847 17.813 21.406 18.372 21.406 19.063 C 21.406 19.753 20.847 20.313 20.156 20.313 L 12.969 20.313 Z"
                  fill="#0085FF"
                ></path>
              </g>
              <path
                d="M 2.734 30 C 4.245 30 5.469 28.776 5.469 27.266 C 5.469 25.755 4.245 24.531 2.734 24.531 C 1.224 24.531 0 25.755 0 27.266 C 0 28.776 1.224 30 2.734 30 Z"
                fill="#0085FF"
                id="logodot"
              ></path>
            </g>
          </svg>
        </Link>
      </div>
    </>
  );
};

export default SiteLogo;
