import * as React from "react";
const SvgWax = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#f89022" r={16} />
        <path
          d="M28 18.962h-2.364l-1.677-1.436-1.671 1.43H20.29l-.955-1.16h-3.292l.833-1.029h1.619l-1.233-1.508-4.305 5.241H10.96l1.246-1.522h-2.081L9 15.824l-1.116 3.13H5.773L4 14.041h1.62l1.192 3.346L8 14.056h2l1.185 3.324 1.184-3.325h1.625l-1.788 4.923.398-.486 3.652-4.445h2.01l3.039 3.708 1.462-1.257L18.14 12.5h2.375zm-2.345-2.972-1.115-.956 1.113-.948 2.25.002z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgWax;
