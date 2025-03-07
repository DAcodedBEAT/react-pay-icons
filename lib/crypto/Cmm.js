import * as React from "react";
const SvgCmm = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#2FD2E5" />
        <path
          d="M16.57 4.007A11.788 11.788 0 0 0 9.058 6.38a1.765 1.765 0 0 0-.11 2.732c.622.588 1.58.634 2.256.109a8.386 8.386 0 0 1 11.294.91c.59.61.608 1.571.042 2.203a1.588 1.588 0 0 1-2.245.078l-.077-.078a5.238 5.238 0 1 0 0 7.059 1.556 1.556 0 0 1 1.86-.353 1.578 1.578 0 0 1 .462 2.47 8.414 8.414 0 0 1-11.34.996 1.765 1.765 0 0 0-2.27.11 1.786 1.786 0 0 0 .149 2.756 11.852 11.852 0 1 0 7.49-21.364zm-.22 14.788a2.933 2.933 0 1 1 .022-5.866 2.933 2.933 0 0 1-.021 5.866z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgCmm;
