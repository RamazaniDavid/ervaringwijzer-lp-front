import React from 'react';

interface INavbarDropDownProps {
  subMenu: any[];
  text: string;
  className?: string;
  style?: string;
  hoverStyle?: string;
  onClick?: () => void;
  path?: string;
}

function NavbarDropDown(props: INavbarDropDownProps) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <>
      <button
        onMouseEnter={() => {
          setDropdownOpen(true);
        }}
        onMouseLeave={() => {
          setDropdownOpen(false);
        }}
        className="flex space-x-2  px-4 py-2 font-medium text-cDarkOcean "
      >
        {props.text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`fill-current ml-1 mt-1 origin-center ${
            dropdownOpen ? '' : ' rotate-180'
          }`}
          viewBox="0 0 14 14"
          height="14"
          width="14"
          strokeWidth="1"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M7.75 0l7.145 11.25H.605L7.75 0z"
            fill="#D7DBE1"
          />
        </svg>
      </button>
      <div
        className={`left-0 mt-0 bg-transparent p-2  lg:absolute ${
          dropdownOpen ? 'flex flex-col' : 'hidden'
        }`}
        onMouseLeave={() => {
          setDropdownOpen(false);
        }}
        onMouseEnter={() => {
          setDropdownOpen(true);
        }}
      >
        <ul className=" space-y-2">
          {props.subMenu?.map((item) => (
            <li
              key={item.path}
              className="max-w-fit px-4 py-2 text-center lg:rounded-3xl lg:bg-gray-800 lg:text-white lg:shadow"
            >
              <a href={item.path}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavbarDropDown;
