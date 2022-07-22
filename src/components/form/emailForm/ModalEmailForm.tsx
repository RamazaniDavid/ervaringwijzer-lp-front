import React, { forwardRef, useImperativeHandle } from 'react';

import { IModalHandler } from '@/utils/handlers/IModalHandler';

import Modal from '../../misc/Modal';
import NormalButton from '../../misc/NormalButton';
import EmailForm from './EmailForm';

export interface IModalEmailFormProps {
  onSubmit?: (res: any) => void;
}

export interface IModalEmailFormHandler {
  openModal: () => void;
}

const ModalEmailForm = forwardRef<IModalEmailFormHandler, IModalEmailFormProps>(
  (props, ref) => {
    const modalComponent = React.useRef<IModalHandler>(null);
    const messageModalComponent = React.useRef<IModalHandler>(null);

    const onSubmit = (data: any) => {
      if (data.status !== 200) return;
      modalComponent.current?.close();
      messageModalComponent.current?.open();
      if (props.onSubmit) props.onSubmit(data);
    };

    useImperativeHandle(ref, () => ({
      openModal() {
        modalComponent.current?.open();
      },
    }));

    return (
      <>
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
  }
);

ModalEmailForm.displayName = 'ModalEmailForm';

export default ModalEmailForm;
