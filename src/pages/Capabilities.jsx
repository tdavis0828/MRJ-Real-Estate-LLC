import React from 'react';
import { StyledCapabilities } from '../styles/Stylesheet';
import capabilitiesStatement from '../images/CapabilityStatement.pdf';

const Capabilities = () => {
  return (
    <StyledCapabilities>
      <iframe
        src={capabilitiesStatement}
        title="Capabilites Statement"
        height="100%"
        width="100%"
      />
    </StyledCapabilities>
  );
};

export default Capabilities;
