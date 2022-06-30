import React from 'react';

import StyledButton from '../StyledButton';

function ScheduleMeeting() {
  return (
    <StyledButton
      className="hover:animate-pulse"
      onClick={() => {
        window.open(`https://calendly.com/ward-ervaringwijzer/60min`, '_blank');
      }}
    >
      Plan gesprek
    </StyledButton>
  );
}

export default ScheduleMeeting;
