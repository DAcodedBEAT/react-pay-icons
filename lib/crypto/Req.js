import * as React from "react";
const SvgReq = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle fill="#00E6A0" cx={16} cy={16} r={16} />
        <path
          d="M23.073 7.5a.653.653 0 0 1 .477.192l-.006-.006a.65.65 0 0 1 .184.364l.009.104-.007 3.417c0 .449-.178.88-.496 1.197l-4.24 4.227 4.537 4.523a1.689 1.689 0 1 1-2.383 2.394l-5.735-5.717a1.686 1.686 0 0 1 0-2.395l5.022-5.012h-8.498v11.889a1.69 1.69 0 0 1-1.718 1.718l-.17-.006A1.696 1.696 0 0 1 8.5 22.677V9.347c0-1.066.763-1.847 1.796-1.847z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgReq;
