import React from 'react';
import { StyledCapabilities } from '../styles/Stylesheet';
import capabilitiesStatement from '../images/capabilitiesStatement.png';

const Capabilities = () => {
  return (
    <StyledCapabilities>
      <div className="cap-container">
        <img src={capabilitiesStatement} alt="Capabilities Statement" />
      </div>
    </StyledCapabilities>
  );
};

export default Capabilities;
