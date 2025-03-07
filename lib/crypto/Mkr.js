import * as React from "react";
const SvgMkr = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle fill="#1AAB9B" cx={16} cy={16} r={16} />
        <path
          d="M7.558 21.156v-8.045l6.101 4.592v3.453h1.558V17.38a.909.909 0 0 0-.363-.726l-7.399-5.569A.909.909 0 0 0 6 11.81v9.346h1.558zm16.874 0v-8.045l-6.101 4.592v3.453h-1.558V17.38c0-.286.134-.555.362-.726l7.4-5.569a.909.909 0 0 1 1.455.726v9.346h-1.558z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgMkr;
