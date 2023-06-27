import React from 'react';
import { StyledBuyHouses } from '../styles/Stylesheet';
import moneyHouse from '../images/moneyHouse.png';
import flower from '../images/flower.png';
import avoidSign from '../images/avoidSign.png';
import piggyBank from '../images/piggyBank.png';
import mapImage from '../images/mapImage.png';

function BuyHouses() {
  return (
    <StyledBuyHouses>
      <div className="links-container">
        <h2>Fast Cash For Your House. We Buy Houses On The Spot!</h2>

        <div className="link">
          <p className="header">We Buy Houses</p>
          <p className="header">As-Is Any</p>
          <p className="header">Condition For Cash</p>
          <img src={moneyHouse} alt="House made of money" />
          <p>No Need For repairs, Hidden Fees Or Commissions.</p>
        </div>

        <h2>Unlocking Your House Value: Top Reasons To Sell For Cash!</h2>

        <div className="link">
          <p className="header">Divorce Or Separation</p>
          <img src={flower} alt="House made of money" />
          <p>
            Selling The House For Cash Can Simplify The Asset Division Process.
          </p>
        </div>

        <div className="link">
          <p className="header"> Avoid Foreclosure</p>
          <img src={avoidSign} alt="street sign" />
          <p>
            Selling For Cash Can Help Settle Debts And Avoid Negative
            Consequences Of Foreclosure On Credit History.
          </p>
        </div>

        <div className="link">
          <p className="header">Financial Urgency</p>
          <img src={piggyBank} alt="gold piggy bank next to rulers" />
          <p>Selling For Cash Can Provide Immediate Access To Funds.</p>
        </div>

        <div className="link">
          <p className="header">Relocating Quickly</p>
          <img src={mapImage} alt="woman holding map" />
          <p>A Cash Sale Can Expedite The Process.</p>
        </div>
      </div>
    </StyledBuyHouses>
  );
}

export default BuyHouses;
