import * as React from "react";
const SvgCob = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#13bf99" r={16} />
        <path
          d="M16 25h-4.536l2.272-3.957h4.528L20.536 25H16zm-2.263-14.044h-.001L11.464 7h9.072l-2.272 3.956h-4.528zm9.999 9.539h-.002.002l-2.273 3.958-2.264-3.957h.001l2.263-3.958H26l-2.264 3.957zM8.264 11.496l2.272-3.957 2.264 3.957-2.264 3.956H6zm4.535 9h.001l-2.264 3.957-2.272-3.957L6 16.537h4.536l2.264 3.957zm10.937-9L26 15.453h-4.536l-2.265-3.957 2.264-3.957 2.273 3.957z"
          fill="#fff"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
export default SvgCob;
