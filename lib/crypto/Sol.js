import * as React from "react";
const SvgSol = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle fill="#66F9A1" cx={16} cy={16} r={16} />
        <path
          d="M9.925 19.687a.59.59 0 0 1 .415-.17h14.366a.29.29 0 0 1 .207.497l-2.838 2.815a.59.59 0 0 1-.415.171H7.294a.291.291 0 0 1-.207-.498l2.838-2.815zm0-10.517A.59.59 0 0 1 10.34 9h14.366c.261 0 .392.314.207.498l-2.838 2.815a.59.59 0 0 1-.415.17H7.294a.291.291 0 0 1-.207-.497L9.925 9.17zm12.15 5.225a.59.59 0 0 0-.415-.17H7.294a.291.291 0 0 0-.207.498l2.838 2.815c.11.109.26.17.415.17h14.366a.291.291 0 0 0 .207-.498l-2.838-2.815z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgSol;
