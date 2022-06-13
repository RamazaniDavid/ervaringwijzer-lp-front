import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Layout = (props: IMainProps) => (
  <>
    {props.meta}
    <div className=" h-full w-full ">
      <Header />
      <div className="mt-36 ">{props.children}</div>
      <Footer />
    </div>
  </>
);

export { Layout };
