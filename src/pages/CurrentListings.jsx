import React from "react";
import { StyledCurrentListings } from "../styles/Stylesheet";

function CurrentListings() {
  return (
    <StyledCurrentListings>
      <div className="map" id="map">
        map goes here
      </div>
      <div className="list">list of listing goes here</div>
    </StyledCurrentListings>
  );
}

export default CurrentListings;
