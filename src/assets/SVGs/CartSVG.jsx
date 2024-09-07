import React from "react";

const CartSVG = ({className = '', number=0}) => {
  return (
    <svg
      width="33"
      height="34"
      viewBox="0 0 33 34"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.15865 22.6925L3.5539 13.1197C3.31126 11.6724 3.18995 10.9487 3.57843 10.4743C3.96693 10 4.68094 10 6.10898 10H25.8807C27.3087 10 28.0227 10 28.4112 10.4743C28.7996 10.9487 28.6783 11.6724 28.4357 13.1197L26.8309 22.6925C26.2991 25.8655 26.0331 27.4519 24.9472 28.3927C23.8615 29.3333 22.2961 29.3333 19.1657 29.3333H12.8239C9.69341 29.3333 8.12816 29.3333 7.04232 28.3927C5.95648 27.4519 5.69054 25.8655 5.15865 22.6925Z"
        stroke="#323232"
        stroke-width="3"
      />
      <path
        d="M23.3385 9.99935C23.3385 5.94926 20.0553 2.66602 16.0052 2.66602C11.9551 2.66602 8.67188 5.94926 8.67188 9.99935"
        stroke="#323232"
        stroke-width="3"
      />
      <rect x="17" y="18" width="16" height="16" rx="8" fill="#323232" />
      
      {/* Replace the complex path with a text element */}
      <text
        x="25"  /* Adjust the x position as needed */
        y="28.5"  /* Adjust the y position as needed */
        font-family="Arial, sans-serif"
        font-size="10"
        fill="white"
        text-anchor="middle"
        alignment-baseline="middle"
      >
        {number}
      </text>
    </svg>
  );
};

export default CartSVG;