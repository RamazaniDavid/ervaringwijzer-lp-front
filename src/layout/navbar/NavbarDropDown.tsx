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
        className="flex space-x-2  px-4 py-2 font-medium text-gray-600  hover:scale-110 hover:text-gray-800"
      >
        {props.text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" h-3 w-3 fill-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
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
