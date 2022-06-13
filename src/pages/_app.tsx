import '../styles/global.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      delay: 500,
    });
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
