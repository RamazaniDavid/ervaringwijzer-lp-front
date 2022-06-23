import React, { useEffect, useImperativeHandle } from 'react';

import { IModalHandler } from '@/utils/handlers/IModalHandler';

type IModalProps = {
  children: React.ReactNode;
  childrenContainer?: {
    className?: string;
    style?: React.CSSProperties;
  };
  title?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onClose?: () => void;
  onOpen?: () => void;
  onConfirm?: () => void;
  showFooter?: boolean;
  hideCloseBtn?: boolean;
};

const Modal = React.forwardRef<IModalHandler, IModalProps>((props, ref) => {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'auto';
  }, [show]);

  const openModal = () => {
    setShow(true);
    if (props.onOpen) {
      props.onOpen();
    }
  };

  const closeModal = () => {
    setShow(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  const confirmModal = () => {
    closeModal();
    if (props.onConfirm) {
      props.onConfirm();
    }
  };

  const renderFooter = () => {
    return props.showFooter ? (
      <>
        <div className=" flex  items-center justify-end rounded-b border-t border-solid border-slate-200 p-6 ">
          {props.footer ? (
            props.footer
          ) : (
            <>
              <button
                className="mr-1 mb-1 bg-transparent px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={() => closeModal()}
              >
                Close
              </button>
              <button
                className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                type="button"
                onClick={() => confirmModal()}
              >
                OK
              </button>
            </>
          )}
        </div>
      </>
    ) : null;
  };

  const renderCloseBtn = () => {
    return props.hideCloseBtn ? null : (
      <button
        className="float-right ml-auto border-0 bg-transparent p-1 text-3xl outline-none focus:outline-none"
        onClick={() => closeModal()}
      >
        <span className="block h-6 w-6 origin-center bg-transparent text-3xl  text-black outline-none hover:animate-wiggle focus:outline-none">
          ×
        </span>
      </button>
    );
  };

  const renderHeader = () => {
    return (
      <div className="flex items-start justify-between rounded-t  px-2">
        {props.title ? (
          <h3 className="text-3xl font-bold">{props.title}</h3>
        ) : null}
        {props.header ? (
          <div className="flex items-center">{props.header}</div>
        ) : null}
        {renderCloseBtn()}
      </div>
    );
  };

  useImperativeHandle(ref, () => ({
    close: () => {
      closeModal();
    },
    open: () => {
      openModal();
    },
  }));

  return (
    <>
      {show ? (
        <>
          <div className=" fixed inset-0 z-50 mx-auto  flex h-screen w-screen  items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none ">
            <div className="relative my-6 mx-auto w-full max-w-3xl">
              {/* content */}
              <div
                className={`relative  flex w-full flex-col rounded-lg border-0 outline-none focus:outline-none ${
                  props.childrenContainer?.className
                    ? ''
                    : 'bg-white p-8 rounded-xl'
                }`}
              >
                {/* header */}
                {renderHeader()}
                {/* body */}
                <div
                  className={`relative mt-4 flex-auto p-6 ${props.childrenContainer?.className}`}
                  style={{ ...props.childrenContainer?.style }}
                >
                  {props.children}
                </div>
                {/* footer */}
                {renderFooter()}
              </div>
            </div>
          </div>
          <div className="fixed  inset-0 z-40 h-screen w-screen bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
});

Modal.displayName = 'Modal';

export default Modal;
