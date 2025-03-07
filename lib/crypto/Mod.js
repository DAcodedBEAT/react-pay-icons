import * as React from "react";
const SvgMod = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} fill="#09547d" r={16} />
        <g fill="#fff">
          <path d="M22.985 21.007V8.08l-6.312 6.449z" opacity={0.5} />
          <path d="m9 7 .304.312 8.467 8.675L9 24.985z" />
        </g>
      </g>
    </svg>
  );
export default SvgMod;
