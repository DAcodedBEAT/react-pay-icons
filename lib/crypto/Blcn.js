import * as React from "react";
const SvgBlcn = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#2aabe4" r={16} />
        <path
          d="M7.9 7h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9H7.9a.9.9 0 0 1-.9-.9V7.9a.9.9 0 0 1 .9-.9zm10 0h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9h-6.2a.9.9 0 0 1-.9-.9V7.9a.9.9 0 0 1 .9-.9zm0 10h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9h-6.2a.9.9 0 0 1-.9-.9v-6.2a.9.9 0 0 1 .9-.9zm-10 0h6.2a.9.9 0 0 1 .9.9v6.2a.9.9 0 0 1-.9.9H7.9a.9.9 0 0 1-.9-.9v-6.2a.9.9 0 0 1 .9-.9z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgBlcn;
