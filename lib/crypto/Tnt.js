import * as React from "react";
const SvgTnt = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} fill="#ff4081" r={16} />
        <path
          d="M13.89 21.503 14.048 25s1.875-.318 3.828 0l.156-3.497zM11.626 18.8s5.469-.477 8.672 0l.312-3.815a59.109 59.109 0 0 0-9.14 0zM26 8.944S15.531 6.718 6 9.103l.703 4.371.86-1.669s8.984-1.351 17.03 0l.782 1.67z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgTnt;
