import * as React from "react";
const SvgSai = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#B68900" />
        <path
          d="M26.633 15.817 15.817 5 5 15.817l10.817 3.996 10.816-3.996zM8.364 14.9l7.333-7.498s7.169 7.333 7.471 7.48c.303.146-4.931 0-4.931 0l-2.42-2.475-2.448 2.493H8.364zm7.453 5.674 10.816-4.024-10.816 10.083L5 16.605l10.817 3.97z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgSai;
