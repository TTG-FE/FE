import React from "react";

const DownloadIcon = ({ isCoupon }) => {
  return (
    <svg
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Download">
        <path
          id="Vector 9"
          d="M34 45.333L31.9965 47.3365L34 49.3399L36.0035 47.3365L34 45.333ZM36.8333 11.333C36.8333 9.7682 35.5648 8.49968 34 8.49968C32.4352 8.49968 31.1667 9.7682 31.1667 11.333L36.8333 11.333ZM14.9965 30.3365L31.9965 47.3365L36.0035 43.3295L19.0035 26.3295L14.9965 30.3365ZM36.0035 47.3365L53.0035 30.3365L48.9965 26.3295L31.9965 43.3295L36.0035 47.3365ZM36.8333 45.333L36.8333 11.333L31.1667 11.333L31.1667 45.333L36.8333 45.333Z"
          fill={isCoupon ? "#8F8F8F" : "#FF0068"}
        />
        <path
          id="Vector 4"
          d="M14.1666 59.5L53.8333 59.5"
          stroke={isCoupon ? "#8F8F8F" : "#FF0068"}
          strokeWidth="5.66667"
        />
      </g>
    </svg>
  );
}

export default DownloadIcon;
