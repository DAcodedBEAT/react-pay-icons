import * as React from "react";
const SvgSand = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle fill="#04ADEF" cx={16} cy={16} r={16} />
        <path
          d="M10.75 7.067 9 8.867V16l1.75 1.8h6.935v3.6H14.25v-1.8H9v3.6l1.75 1.8h10.435l1.75-1.8V16l-1.75-1.8H14.25v-3.6h3.5v1.8H23V8.8L21.25 7h-10.5z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgSand;
