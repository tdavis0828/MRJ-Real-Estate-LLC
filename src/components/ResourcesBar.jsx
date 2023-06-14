import React from 'react';
import { Link } from 'react-router-dom';
import { StyledResourcesBar } from '../styles/Stylesheet';
import calculator from '../images/calculator.png';
import dollarSign from '../images/coin.png';
import payment from '../images/payment-method.png';

function ResourcesBar() {
  return (
    <StyledResourcesBar>
      <div>
        <img src={dollarSign} alt="" />
        <Link to="/">What is my home worth</Link>
      </div>
      <div>
        <img src={calculator} alt="" />
        <Link to="calculator">Mortgage calculator</Link>
      </div>
      <div>
        <img src={payment} alt="" />
        <Link to="/">We buy houses</Link>
      </div>
    </StyledResourcesBar>
  );
}

export default ResourcesBar;
