import * as React from "react";
const SvgNmc = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#186C9D" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="m19.261 23.5.001-.002a1.8 1.8 0 0 0 .458-.05c.876-.205 1.617-.97 1.793-1.796L25 8.556l-2.772-.014-2.286 8.568-6.18-8.597-.004.004.003-.01L12.74 8.5v.001a1.9 1.9 0 0 0-.459.049c-.875.206-1.616.971-1.793 1.796L7 23.445l2.773.012 2.285-8.568 6.18 8.598h.003l1.02.013zm-6.593-10.894.483-1.81 6.181 8.599-.483 1.81-6.18-8.6z"
        />
      </g>
    </svg>
  );
export default SvgNmc;
