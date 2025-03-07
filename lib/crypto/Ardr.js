import * as React from "react";
const SvgArdr = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#3C87C7" />
        <path
          fill="#FFF"
          d="m15.883 17.19 1.769 2.312L12.5 23l3.383-5.81zM16 6l2.727 4.474L11.455 23H6L16 6zm0 9.842 3.636-2.684L26 23h-4.545L16 15.842z"
        />
      </g>
    </svg>
  );
export default SvgArdr;
