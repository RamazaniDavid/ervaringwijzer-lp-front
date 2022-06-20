import Link from 'next/link';
import React from 'react';

import SiteLogo from '@/components/misc/SiteLogo';

const linkGenerator = (href: string, text: string) => (
  <>
    {href === '*soon*' ? (
      <div className="flex flex-row items-center space-x-2">
        <span className="rounded-2xl bg-gray-300 p-2 text-[0.6rem]">
          Binnenkort
        </span>
        <span className="">{text}</span>
      </div>
    ) : (
      <Link href={href}>
        <a target={href.startsWith('/') ? '_self' : '_blank'}>{text}</a>
      </Link>
    )}
  </>
);

const Footer = () => {
  const footerLinks = {
    wrapCount: 4,
    links: [
      {
        href: '/privacy',
        label: 'Privacy statement & cookies',
      },
      {
        href: '/gebruikersvoorwaarden',
        label: 'Gebruikersvoorwaarden',
      },
      {
        href: 'https://drive.google.com/drive/folders/1qQMhGah0kw7F_jxbPesZp0lMrjKRkKm3',
        label: 'Stappenplan',
      },
      {
        href: '*soon*',
        label: 'Rest API',
      },
      {
        href: 'https://drive.google.com/drive/folders/1vxKibS4irwKpGSNHXQJBd2FJ12_nEWSO',
        label: 'Designs',
      },
      {
        href: 'https://drive.google.com/drive/folders/1d21pbkYS_9eWna8SsDDH1qcFnmTmwxqM',
        label: 'Brand assets',
      },
      {
        href: '*soon*',
        label: 'Verhalen',
      },
      {
        href: '*soon*',
        label: 'Alternatieven',
      },
      {
        href: 'http://youtube.com/channel/UCLwWSWveMIIFG17yRUZDzvg',
        label: 'YouTube',
      },
      {
        href: 'https://www.linkedin.com/company/ervaringwijzer',
        label: 'LinkedIn',
      },
      {
        href: 'https://www.facebook.com/Ervaringwijzer',
        label: 'Facebook',
      },
      {
        href: 'https://www.instagram.com/ervaringwijzer/',
        label: 'Instagram',
      },
    ],
  };

  return (
    <footer className="">
      <div className="my-14 mx-auto w-full px-4 lg:w-11/12 xl:w-10/12 2xl:w-9/12">
        <div className="mx-auto flex flex-col space-y-4 px-4 text-lg font-normal">
          <div className="flex flex-col lg:flex-row ">
            <div className="mx-auto mb-4 flex flex-1 flex-col items-center">
              <Link href="/">
                <a className="">
                  <SiteLogo textInVisible={false} />
                </a>
              </Link>
            </div>
            {footerLinks.wrapCount > 0 &&
              Array.from(
                Array(footerLinks.links.length / footerLinks.wrapCount).keys()
              ).map((i) => (
                <div
                  className="mb-4 flex flex-1 flex-col items-center space-y-4 lg:items-start"
                  key={i}
                >
                  {footerLinks.links
                    .slice(
                      i * footerLinks.wrapCount,
                      (i + 1) * footerLinks.wrapCount
                    )
                    .map((link) => (
                      <div className="flex flex-1 flex-col" key={link.label}>
                        {linkGenerator(link.href, link.label)}
                      </div>
                    ))}
                </div>
              ))}
          </div>
          <div className="flex w-full flex-col-reverse items-center space-y-4 lg:flex-row lg:justify-between">
            <span className="mt-4">© 2022 - Ervaringwijzer</span>
            <div className="space-x-1 text-xs">
              <span className="rounded-2xl bg-gray-300 p-2">ISO27001</span>
              <span className="rounded-2xl bg-gray-300 p-2">NEN7510</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
