import * as React from "react";
const SvgBsd = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#000" />
        <path
          d="M28 15.127H4l13.964-4.69L19.927 4 28 15.127zM4.11 16.655h23.78l-13.963 4.581-1.963 6.655-7.855-11.236z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgBsd;
