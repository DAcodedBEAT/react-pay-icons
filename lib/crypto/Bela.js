import * as React from "react";
const SvgBela = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#13a0f6" r={16} />
        <path
          d="M8.297 11.568A2.422 2.422 0 0 1 7 9.422a2.416 2.416 0 1 1 4.553-1.134 8.891 8.891 0 0 1 4.501-1.216c4.94 0 8.946 4.014 8.946 8.964S20.995 25 16.054 25s-8.946-4.013-8.946-8.964a8.94 8.94 0 0 1 1.189-4.468zm7.757 8.878c2.43 0 4.4-1.974 4.4-4.41s-1.97-4.41-4.4-4.41-4.4 1.975-4.4 4.41 1.97 4.41 4.4 4.41z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgBela;
