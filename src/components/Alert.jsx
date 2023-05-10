import React from 'react';
import { StyledAlert } from '../styles/Stylesheet';

function Alert({ isErr }) {
  console.log(isErr);
  const success = '#539165';
  const error = '#ED2B2A';
  return (
    <StyledAlert style={{ background: isErr === 'success' ? success : error }}>
      {isErr === 'success' ? (
        <p> Request Submitted Successfully!</p>
      ) : (
        <p>Error Submitting Request!</p>
      )}
    </StyledAlert>
  );
}

export default Alert;
