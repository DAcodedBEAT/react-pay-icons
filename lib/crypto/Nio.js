import * as React from "react";
const SvgNio = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#70C9C9" />
        <path
          fill="#FFF"
          d="M16 13.764h-4.822L16 5.5l4.822 8.264H16zm.655 9.736 2.515-4.309 2.411-4.131L26.5 23.5h-9.845zm-3.825-4.309 2.515 4.309H5.5l4.919-8.44 2.41 4.131z"
        />
      </g>
    </svg>
  );
export default SvgNio;
