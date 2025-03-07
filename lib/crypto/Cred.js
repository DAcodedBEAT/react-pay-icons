import * as React from "react";
const SvgCred = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#37e8a3" r={16} />
        <path
          d="m12.136 15.966 3.482 3.493 9.13-9.191L26 11.538 15.618 22l-4.735-4.763zm2.11-.31L19.864 10l1.253 1.27-5.617 5.66zm-2.276 4.83-1.236 1.246L6 16.97l1.251-1.27z"
          fill="#fff"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
export default SvgCred;
