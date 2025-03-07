import * as React from "react";
const SvgElla = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#396a28" r={16} />
        <path
          d="M18.073 13.212 16 11.14l-2.087 2.086-2.164-2.164L16 5l4.28 6.005zm-4.883.738L11.14 16l2.072 2.073-2.156 2.156L5 16l5.99-4.25zm5.584 4.137L20.86 16l-2.064-2.064 2.226-2.226L27 16l-6.044 4.269zm-4.838.71L16 20.86l2.05-2.05 2.182 2.183L16 27l-4.204-6.064zM16 12.527 19.472 16 16 19.472 12.528 16z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgElla;
