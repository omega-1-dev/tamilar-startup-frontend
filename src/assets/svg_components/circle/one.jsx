import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={9}
    height={9}
    viewBox="0 0 9 9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={4.5} cy={4.5} r={4} fill="white" />
  </svg>
);
export default SVGComponent;
