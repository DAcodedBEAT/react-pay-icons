import * as React from "react";
const SvgItau = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" {...props}>
      <path fill="#2f3490" d="M0 0h40v26H0z" />
      <path
        fill="#fff100"
        d="M33.85 9.88h-2.4v5.36a1.84 1.84 0 0 1-1.85 2.1c-.75 0-1.57-.3-1.56-1.72V9.88h-2.41l-.01 6.1c0 2.36 1.3 3.41 3.12 3.41a2.98 2.98 0 0 0 2.77-1.55h.03v1.3h2.31zm-1.63-3.25h-2.46l-1.02 2h1.73zm-18.72 0h-2.4v3.24H9.88v1.74h1.22v5.63c0 1.19.38 2 2.46 2h.32l1.13-.03v-1.86c-.17.01-.35.04-.5.04-.98 0-1-.2-1-.76v-5.02h1.51V9.87h-1.5z"
      />
      <path fill="#fff100" d="M8.75 6.62H6.16l-.01 12.5h2.59z" />
      <path
        fill="#fff100"
        d="M21.42 15.83a2 2 0 0 1-2.16 1.8 1.07 1.07 0 0 1-1.13-1.1c0-1 .74-1.25 1.65-1.4a3.6 3.6 0 0 0 1.64-.5zm2.33 1.5v-5c0-2.29-2.33-2.7-3.62-2.7-1.89 0-3.82.41-4.12 3.25h2.33a1.32 1.32 0 0 1 1.5-1.3c.6 0 1.58.06 1.58 1.08 0 .52-.47.68-.86.73l-2.16.34a2.82 2.82 0 0 0-2.68 2.96 2.6 2.6 0 0 0 2.79 2.7 3.69 3.69 0 0 0 2.95-1.33 4.34 4.34 0 0 0 .24 1.07l2.06-.01-.01-1.78z"
      />
    </svg>
  );
export default SvgItau;
