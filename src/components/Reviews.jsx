import React from 'react';
import { StyledReviews } from '../styles/Stylesheet';
import stars from '../images/stars.png';

const Reviews = () => {
  return (
    <StyledReviews>
      <h1>A few words from previous clients</h1>
      <div className="reviews-container">
        <div className="review">
          <p className="author">Brenda Martinez</p>
          <p>
            If you are looking for a good Realtor to help you with the tedious
            process of buying or selling your house, Marcy Jones is the answer.
            Marcy works in a clear and transparent way, she solves your doubts
            and keeps in touch with you all the time. She takes you by the hand
            throughout the process and she always gives more of herself to
            achieve the satisfaction of her clients. Thank you Marcy!
          </p>
        </div>
        <div className="review">
          <p className="author">The UFW Foundation</p>
          <p>
            I am writing a review for Marcy Jones on behalf of our organization.
            Marcy is outstanding, detail-oriented, helpful, and a hard worker.
            She went above and beyond our expectations by helping us with all
            our needs. Every question we had, she was able to answer. She is a
            total professional in what she does and we will use her in any of
            our future needs. I recommend her 100 percent
          </p>
        </div>
        <div className="review">
          <p className="author">LaNiesa</p>
          <p>
            Marcy gets the job done. I was an out-of-state buyer and she made me
            feel comfortable and relaxed about purchasing a home that I was not
            there to be physically involved in the process. She kept me involved
            and updated on everything. I would highly recommend her in your home
            buying process!!!
          </p>
        </div>
        <div className="review">
          <p className="author">Lorena Santiago</p>
          <p>
            I Highly recomend marcy. She did an amazing job helping my family
            and i to find our home. Very reliable, VERY PROFESSIONAL. In less
            than a month we were able to move in to our home,everything went so
            quick thanks to her amazing job. she is very passionate about her
            work. "Helping her costumers is what she does best". Thanks marcy
          </p>
        </div>
      </div>
    </StyledReviews>
  );
};

export default Reviews;
