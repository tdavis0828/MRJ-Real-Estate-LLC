import React from 'react';
import { StyledFaq } from '../styles/Stylesheet';

function FAQ() {
  return (
    <StyledFaq id="faqs">
      <h1>Frequently asked questions</h1>
      <div className="faq">
        <p>Q: What the first step of the home buying process?</p>
        <p>
          A: Getting pre-approved for a mortgage is the first step of the home
          buying process. Getting a pre-approval letter from a lender get the
          ball rolling in the right direction.
        </p>
      </div>
      <div className="faq">
        <p>Q: How long does it take to buy a home?</p>
        <p>
          A: From start (searching online) to finish (closing escrow), buying a
          home takes about 10 to 12 weeks. Once a home is selected an the offer
          is accepted, the average time to complete the escrow period on a home
          is 30 to 45 days (under normal market conditions).{' '}
        </p>
      </div>
      <div className="faq">
        <p>Q: What is earnest money?</p>
        <p>
          A: When you make an offer on a home, your agent will ask for a check
          to accompany it (checks are the same as cash, and the deposit is
          typically 1% to 2% of the purchase price). Earnest money is made in
          good faith to demonstrate - to the seller - that the buyer’s offer is
          genuine. Earnest money essentially takes the home off the market to
          anyone else and reserves it for you.
        </p>
      </div>
      <div className="faq">
        <p>Q: Do I need to do a final walk-through?</p>
        <p>
          A: It’s not required, but it’s a darn good idea! Final walk-throughs
          give buyers a chance to make sure nothing had changed since their
          first visit. If repairs were requested, as part of the offer, a
          follow-up visit ensures that everything is squared-away, as expected,
          per the terms of the contract.
        </p>
      </div>
    </StyledFaq>
  );
}

export default FAQ;
