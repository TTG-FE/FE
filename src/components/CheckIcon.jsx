import React from 'react'

const CheckIcon = ({ isCheck }) => {
  // console.log(isCheck);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Check_ring">
        <circle
          id="Ellipse 47"
          cx="12"
          cy="12"
          r="9"
          stroke={isCheck ? "red" : "black"}
          strokeOpacity={isCheck ? "1" : "0.3"}
          strokeWidth="2"
        />
        <path
          id="Line 1"
          d="M8 12L11 15L16 9"
          stroke={isCheck ? "red" : "black"}
          strokeOpacity={isCheck ? "1" : "0.3"}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export default CheckIcon