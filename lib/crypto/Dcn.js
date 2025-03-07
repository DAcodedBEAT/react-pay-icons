import * as React from "react";
const SvgDcn = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#136485" />
        <path
          fill="#FFF"
          d="M10.436 31.006a16.008 16.008 0 0 1-5.604-3.548l.147-.257c2.388-3.773 4.533-7.678 6.148-11.85 1.713-4.425 3.084-8.967 4.39-13.527.117-.407.256-.807.384-1.21.138.158.188.305.23.454.82 2.926 1.613 5.86 2.464 8.776 1.55 5.313 3.73 10.353 6.617 15.077.337.55.91 1.472 1.72 2.762a15.988 15.988 0 0 1-6.035 3.554 4320.193 4320.193 0 0 0-5.002-15.17l-.154-.002c-1.166 3.277-2.934 8.257-5.305 14.941zM16.075.049h-.124L16 0l.075.049z"
        />
      </g>
    </svg>
  );
export default SvgDcn;
