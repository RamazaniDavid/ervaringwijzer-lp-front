import React from 'react';

import NormalButton from '../NormalButton';

function ContactButton() {
  return (
    <NormalButton
      onClick={() => {
        window.open(`/contact`, '_blank');
      }}
      className="!hover:text-cBlue-700 !bg-white !text-cBlue-500"
    >
      Contact opnemen
    </NormalButton>
  );
}

export default ContactButton;
