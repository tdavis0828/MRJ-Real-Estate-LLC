import React from 'react';
import { StyledListings } from '../styles/Stylesheet';
import Slider from 'react-slick';

function Listings() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: 'image-slider',
    autoplay: true,
  };
  return (
    <StyledListings>
      <h1>Previous Listings</h1>
      <Slider {...settings}>
        <div className="slide">
          <div
            className="slide-content"
            style={{
              background:
                'url(https://ap.rdcpix.com/d256462895026384d52a6aa85ec89b41l-m2399071125od-w480_h360_x2.webp?w=640&q=75)',
            }}
          >
            <div className="overlay" />
            <p>2803 Rising Mist Ln, Bakersfield, CA 93313</p>
            <p>3 bed | 2 bath | 1,487 square feet | 7,405sqft lot</p>
          </div>
        </div>
        <div className="slide">
          <div
            className="slide-content"
            style={{
              background:
                'url(https://ap.rdcpix.com/62dc21a9cd234aa0d79af39829a5d9a9l-m2771632218od-w480_h360_x2.webp?w=640&q=75)',
            }}
          >
            <div className="overlay" />
            <p>3817 Hillburn Rd, Bakersfield, CA 93306</p>
            <p>3 bed | 1 bath | 1,168 square feet | 6,534sqft lot</p>
          </div>
        </div>
        <div className="slide">
          <div
            className="slide-content"
            style={{
              background:
                'url(https://ap.rdcpix.com/967f5ddaad5856f117cfb1bcafe1385el-m4152255083od-w480_h360_x2.webp?w=640&q=75)',
            }}
          >
            <div className="overlay" />
            <p>713 Woodrow Ave, Bakersfield, CA 93308</p>
            <p>3 bed | 1 bath | 824 square feet | 6,098sqft lot</p>
          </div>
        </div>
        <div className="slide">
          <div
            className="slide-content"
            style={{
              background:
                'url(https://ap.rdcpix.com/23e8a00a176015fdc5898c38a8d8e472l-m1275221697od-w480_h360_x2.webp?w=640&q=75)',
            }}
          >
            <p>617 Meadow Grove Ct, Bakersfield, CA 93308</p>
            <p>3 bed | 1 bath | 1,412 square feet | 6,969sqft lot</p>
          </div>
        </div>
      </Slider>
    </StyledListings>
  );
}

export default Listings;
