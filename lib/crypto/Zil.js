import * as React from "react";
const SvgZil = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} fill="#49c1bf" r={16} />
        <g fill="#fff">
          <path
            d="m9 7.281 11.114 5.383 2.845-1.282L11.891 6z"
            fillOpacity={0.304}
          />
          <path
            d="m20.114 12.651 2.845-1.281v2.865l-2.845 1.281zm0 13.284v-8.937l2.845-1.295v8.951z"
            fillOpacity={0.646}
          />
          <path d="M9 7.284v2.897l7.693 3.737L9 17.728v2.856l11.114 5.373v-2.874l-7.548-3.671 7.548-3.881v-2.865z" />
        </g>
      </g>
    </svg>
  );
export default SvgZil;
