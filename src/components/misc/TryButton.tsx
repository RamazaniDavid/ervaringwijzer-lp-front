import React from 'react';

import { IModalHandler } from '@/utils/handlers/IModalHandler';

import EmailForm from '../form/EmailForm';
import Modal from './Modal';
import NormalButton from './NormalButton';

const TryButton = () => {
  const modalComponent = React.useRef<IModalHandler>(null);
  const messageModalComponent = React.useRef<IModalHandler>(null);

  const onSubmit = (data: any) => {
    console.log(data);

    if (data.status !== 200) return;
    modalComponent.current?.close();
    messageModalComponent.current?.open();
  };

  return (
    <>
      <NormalButton onClick={() => modalComponent.current?.open()}>
        Probeer gratis
      </NormalButton>

      <Modal ref={modalComponent}>
        <EmailForm onSubmit={onSubmit} />
      </Modal>
      <Modal ref={messageModalComponent}>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-semibold">Succesvol aangemaakt!</h3>
          <p className="mt-4">
            We hebben een demo account voor je aangemaakt. De inloggegevens
            hebben we naar het ingevulde e-mailadres verzonden.
          </p>
          <NormalButton
            onClick={() => {
              messageModalComponent.current?.close();
            }}
          >
            Begrepen
          </NormalButton>
        </div>
      </Modal>
    </>
  );
};

export default TryButton;
