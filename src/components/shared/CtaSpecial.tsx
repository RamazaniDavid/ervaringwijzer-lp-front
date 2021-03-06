import React from 'react';

import ModalEmailForm, {
  IModalEmailFormHandler,
} from '../form/emailForm/ModalEmailForm';

interface CtaSpecialProps {
  sectionId?: string;
}

function CtaSpecial(props: CtaSpecialProps) {
  const emailFormRef = React.useRef<IModalEmailFormHandler>(null);

  const ctas = [
    {
      title: 'Ik ben aan het orienteren',
      svgPaths: [
        'M52.054 104c-13.42 0-26.406-5.195-36.795-15.15-20.345-20.346-20.345-53.245 0-73.59 20.346-20.346 53.245-20.346 73.59 0C98.805 25.214 104 38.201 104 52.053c0 13.852-5.195 26.839-15.15 36.795C78.46 98.805 65.473 104 52.053 104zm0-97.831c-11.688 0-23.376 4.328-32.466 13.419-17.748 17.748-17.748 47.184 0 64.932 17.748 17.748 47.184 17.748 64.932 0 8.658-8.657 13.42-20.345 13.42-32.466 0-12.12-4.762-23.808-13.42-32.466-9.09-9.09-20.778-13.42-32.466-13.42z',
        'M71.1 44.261c-3.896 0-7.792-1.731-10.39-5.194-1.298-1.299-.865-3.03.434-4.329 1.298-1.299 3.03-.866 4.329.433 1.298 1.298 3.03 3.03 5.627 3.03 2.165 0 4.329-.866 5.628-3.03.865-1.299 3.03-1.299 4.328-.433 1.299.866 1.299 3.03.433 4.329-2.597 3.463-6.493 5.194-10.389 5.194zM33.007 44.261c-3.896 0-7.792-1.731-10.389-5.194-1.298-1.299-.866-3.463.433-4.329 1.299-1.299 3.03-.866 4.329.433.866 1.298 3.03 3.03 5.627 3.03 2.165 0 4.33-.866 5.628-3.03.866-1.299 3.03-1.299 4.329-.433 1.298.866 1.298 3.03.433 4.329-2.598 3.463-6.494 5.194-10.39 5.194zM52.055 63.201c12.986 0 20.778 7.792 21.211 8.225 1.299 1.299 1.299 3.03 0 4.329-1.298 1.299-3.03 1.299-4.329 0 0 0-6.493-6.06-16.882-6.06-10.39 0-16.882 6.06-16.882 6.06-1.3 1.299-3.03 1.299-4.33 0-1.298-1.299-1.298-3.03 0-4.329.434-.433 8.226-8.225 21.212-8.225z',
      ],
      action: () => {},
      containerClassName: 'bg-[#ffeef1] hover:bg-[#ff0c37] flex-1',
      svgClassName: ' group-hover:fill-[#ffeef1] fill-[#ff0c37]',
      titleClassName: 'text-[#ff0c37] group-hover:text-[#ffeef1]',
    },
    {
      title: 'Ik wil een demo!',
      svgPaths: [
        'M52.054 104c-13.42 0-26.406-5.195-36.795-15.15-20.345-20.346-20.345-53.245 0-73.59 20.346-20.346 53.245-20.346 73.59 0C98.805 25.214 104 38.201 104 52.053c0 13.852-5.195 26.839-15.15 36.795C78.46 98.805 65.473 104 52.053 104zm0-97.831c-11.688 0-23.376 4.328-32.466 13.419-17.748 17.748-17.748 47.184 0 64.932 17.748 17.748 47.184 17.748 64.932 0 8.658-8.657 13.42-20.345 13.42-32.466 0-12.12-4.762-23.808-13.42-32.466-9.09-9.09-20.778-13.42-32.466-13.42z',
        'M70.92 33.954c3.896 0 7.792 1.731 10.39 5.194 1.298 1.299.865 3.03-.433 4.33-1.299 1.298-3.03.865-4.33-.434-1.298-1.298-3.03-3.03-5.626-3.03-2.165 0-4.33.866-5.628 3.03-.866 1.299-3.03 1.299-4.329.433-1.298-.866-1.298-3.03-.433-4.329 2.598-3.463 6.494-5.194 10.39-5.194zM32.825 33.954c3.896 0 7.792 1.732 10.389 5.195 1.299 1.298.866 3.463-.433 4.329-1.299 1.298-3.03.865-4.329-.433-.866-1.299-3.03-3.03-5.627-3.03-2.165 0-4.33.865-5.628 3.03-.866 1.298-3.03 1.298-4.329.433-1.298-.866-1.298-3.03-.432-4.33 2.597-3.462 6.493-5.194 10.389-5.194zM52.054 76.728c-12.986 0-20.778-7.792-21.21-8.224-1.3-1.3-1.3-3.03 0-4.33 1.298-1.298 3.03-1.298 4.328 0 0 0 6.493 6.061 16.882 6.061 10.39 0 16.883-6.06 16.883-6.06 1.299-1.299 3.03-1.299 4.329 0 1.298 1.298 1.298 3.03 0 4.329-.433.432-8.225 8.224-21.212 8.224z',
      ],
      action: () => {
        emailFormRef.current?.openModal();
      },
      containerClassName:
        'bg-[#effaf5] hover:bg-[#16b86a] flex-1  lg:scale-110 ',
      svgClassName: ' group-hover:fill-[#effaf5] fill-[#16b86a]',
      titleClassName: 'text-[#16b86a] group-hover:text-[#effaf5]',
    },
    {
      title: 'Ik heb nog vragen',
      svgPaths: [
        'M52 104C23.4 104 0 80.6 0 52S23.4 0 52 0s52 23.4 52 52-23.4 52-52 52zm0-97.933C26.867 6.067 6.067 26.867 6.067 52S26.867 97.933 52 97.933 97.933 77.133 97.933 52 77.133 6.067 52 6.067z',
        'M68.467 71.498H35.533c-1.733 0-3.033-1.3-3.033-3.033 0-1.733 1.3-3.033 3.033-3.033h32.5c1.734 0 3.034 1.3 3.034 3.033.433 1.733-.867 3.033-2.6 3.033zM32.934 44.2c-1.734 0-3.034-1.3-3.034-3.033v-5.634c0-1.733 1.3-3.033 3.034-3.033 1.733 0 3.033 1.3 3.033 3.033v5.634c0 1.733-1.3 3.033-3.033 3.033zM71.065 44.2c-1.734 0-3.034-1.3-3.034-3.033v-5.634c0-1.733 1.3-3.033 3.034-3.033 1.733 0 3.033 1.3 3.033 3.033v5.634c0 1.733-1.3 3.033-3.033 3.033z',
      ],
      action: () => {},
      containerClassName: 'bg-[#fffaed] hover:bg-[#FFB802]  flex-1 ',
      svgClassName: ' group-hover:fill-[#fffaed] fill-[#FFB802]',
      titleClassName: 'text-[#FFB802] group-hover:text-[#fffaed]',
    },
  ];

  return (
    <section id={props.sectionId ?? 'cta-special'}>
      <div className="mt-12 flex w-full flex-col bg-cBlue-500 py-24">
        <div className="mx-auto flex w-11/12 flex-col lg:w-10/12 xl:w-9/12 2xl:w-8/12">
          <div className="mb-8 text-center text-3xl text-white">
            <h1>Samen wijzer worden?</h1>
          </div>

          <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-16">
            {ctas.map((cta, index) => (
              <div
                key={index}
                className={`group flex flex-row items-center rounded-2xl duration-75 ${cta.containerClassName}
                lg:flex-col lg:px-8 lg:py-16 cursor-pointer min-h-[100px]`}
                onClick={cta.action}
              >
                <div className="my-0 h-16 w-16 lg:my-12 lg:h-36 lg:w-36">
                  <svg
                    viewBox="0 0 104 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`px-2 h-full w-full duration-75 ${cta.svgClassName} `}
                  >
                    {cta.svgPaths.map((path, ix) => (
                      <path
                        key={ix}
                        d={path}
                        className={`duration-75 ${cta.svgClassName}`}
                      />
                    ))}
                  </svg>
                </div>
                <div
                  className={`text-lg duration-75 ${cta.titleClassName} lg:text-2xl`}
                >
                  <h2>{cta.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalEmailForm ref={emailFormRef} />
    </section>
  );
}

export default CtaSpecial;
