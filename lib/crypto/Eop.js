import * as React from "react";
const SvgEop = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#35A7DF" />
        <path
          d="M14.714 28 9.366 13.737l-2.16 9.84zM16.12 4.171l-5.863 7.132 5.863 14.983 5.897-14.983zM17.56 28l5.349-14.263 2.125 9.84z"
          fill="#FEFFFE"
        />
      </g>
    </svg>
  );
export default SvgEop;
