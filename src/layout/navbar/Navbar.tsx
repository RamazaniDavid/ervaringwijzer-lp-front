import React, { useEffect } from 'react';

import TryButton from '@/components/misc/TryButton';

import NavbarDropDown from './NavbarDropDown';
import NavbarItem from './NavbarItem';
import NavbarLogo from './NavbarLogo';

function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  // const [isScrolledTryBtn, setIsScrolledTryBtn] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [hideLogoText, setHideLogoText] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // setIsScrolledTryBtn(
      //   (window.innerWidth < 640 && window.scrollY > 350) ||
      //     (window.innerWidth >= 640 && window.scrollY > 500)
      // );
      setIsScrolled(window.scrollY > 30);
    });

    setHideLogoText(window.innerWidth < 640);
  }, []);

  const menu = [
    {
      text: 'Producten',
      subMenu: [
        {
          text: 'Software',
          path: '/software',
        },
        {
          text: 'Inhuren',
          path: '/hire',
        },
        {
          text: 'Servicezuilen',
          path: '/service-charges',
        },
      ],
    },
    {
      text: 'onderzoek',
      subMenu: [
        {
          text: 'Cliëntervaringsonderzoek',
          path: '/client-interview',
        },
        {
          text: 'Patiënttevredenheidsonderzoek',
          path: '/patient-satisfaction',
        },
      ],
    },
    {
      text: 'Learning community',
      path: '/learning-community',
    },
    {
      text: 'Werken bij',
      path: 'https://ervaringwijzer.homerun.co/?lang=nl',
      target: '_blank',
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 rounded z-30 w-full  transition-all ${
          isScrolled ? ' pt-0' : '  pt-4 '
        }`}
      >
        <nav
          className={`relative px-4  flex justify-between items-center${
            isScrolled ? ' backdrop-blur-sm bg-white  ' : 'bg-transparent'
          }`}
        >
          <div className="text-3xl font-bold leading-none">
            <NavbarLogo textInVisible={hideLogoText} />
          </div>
          <div className="lg:hidden">
            <button
              className="flex items-center p-3 text-blue-600"
              onClick={() => setShowMobileMenu(true)}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>

          <div
            className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6`}
          >
            <ul className="flex w-full flex-col space-y-2  lg:w-auto lg:flex-row lg:space-x-2 lg:space-y-0">
              {menu.map((item, index) => (
                <React.Fragment key={index}>
                  <li className="relative">
                    {item.subMenu ? (
                      <NavbarDropDown {...item} />
                    ) : (
                      <NavbarItem {...item} />
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div
            className={`hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 `}
          >
            <TryButton />
          </div>
        </nav>
      </header>
      <div
        className={`relative z-50 transition-opacity duration-10000 linear  ${
          showMobileMenu ? 'visible opacity-100' : 'opacity-0 invisible hidden'
        }`}
      >
        <div
          className="fixed inset-0 bg-gray-800 opacity-25"
          onClick={() => {
            setShowMobileMenu(false);
          }}
        ></div>
        <nav className="fixed inset-y-0 left-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white p-6">
          <div className="mb-8 flex items-center">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <NavbarLogo textInVisible={hideLogoText} />
            </a>
            <button
              className=""
              onClick={() => {
                setShowMobileMenu(false);
              }}
            >
              <svg
                className="h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {menu.map((item, index) => (
                <React.Fragment key={index}>
                  <li className="mb-1">
                    <a
                      className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                      href={item.path}
                    >
                      {item.text}
                    </a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="mb-2 block rounded-xl bg-[#0085ff] px-4 py-3 text-center text-xs font-semibold leading-loose text-white  hover:bg-blue-700"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-center text-xs text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
      {/* End Mobile Navigation */}
    </>
  );
}

export default Navbar;
