import React from "react";
import styled from "styled-components";

const Wrapper = styled.svg`
  fill: "#FF0000";
  width: ${props => props.svgWidth}px;
  height: ${props => props.svgHeight}px;
`;

const Logo = ({ height = 47, width = 60, className }) => {
  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      id="Laag_1"
      data-name="Laag 1"
      viewBox="0 0 67 46.97"
      svgHeight={height}
      svgWidth={width}
      className={className}
    >
      <title>logo_leesqueue</title>
      <path
        d="M82,52.58,74.68,31.06a5.81,5.81,0,0,0-3.47-3.86,9.11,9.11,0,0,0-5.73-.41,1.47,1.47,0,1,0,.68,2.85,6.29,6.29,0,0,1,3.87.25,2.92,2.92,0,0,1,1.81,1.92L77,46.9a14.3,14.3,0,0,0-8-2.4A14.51,14.51,0,0,0,54.67,57a17.45,17.45,0,0,0-4.81-.68,15.6,15.6,0,0,0-4.54.65A14.48,14.48,0,0,0,22.9,47l5.12-15,0-.13a2.94,2.94,0,0,1,1.81-1.92,6.22,6.22,0,0,1,3.87-.25,1.47,1.47,0,1,0,.68-2.85,9.11,9.11,0,0,0-5.73.41,5.79,5.79,0,0,0-3.47,3.86L17.89,52.58a1.76,1.76,0,0,0-.07.4,14.48,14.48,0,1,0,27.62,7,12.33,12.33,0,0,1,4.42-.76,14.19,14.19,0,0,1,4.7.79A14.49,14.49,0,1,0,82,52.67S82,52.61,82,52.58Zm-51,18A11.56,11.56,0,1,1,42.55,59,11.57,11.57,0,0,1,31,70.55Zm38,0A11.56,11.56,0,1,1,80.56,59,11.57,11.57,0,0,1,69,70.55Z"
        transform="translate(-16.5 -26.51)"
      />
    </Wrapper>
  );
};

export default Logo;