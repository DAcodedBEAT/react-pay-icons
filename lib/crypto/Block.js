import * as React from "react";
const SvgBlock = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#101341" fillRule="nonzero" />
        <g fill="#FFF">
          <path d="M11.022 7H21.25l5.25 9-5.25 9H10.931l5.16-9-5.07-9zm5.43 3.166L19.803 16l-3.35 5.834h2.988L22.789 16l-3.35-5.834h-2.986z" />
          <path
            opacity={0.5}
            d="M12.113 11.026 9.211 16l2.876 4.93-1.839 3.209L5.5 16l4.789-8.211z"
          />
        </g>
      </g>
    </svg>
  );
export default SvgBlock;
