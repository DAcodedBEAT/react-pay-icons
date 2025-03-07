import * as React from "react";
const SvgKrb = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#00AEEF" />
        <path
          fill="#FFF"
          d="M15.76 14.706c.238-.041.448-.13.632-.265s.358-.363.521-.675l3.625-6.987c.142-.234.316-.42.516-.566a1.2 1.2 0 0 1 .7-.213h2.299l-4.514 8.218c-.2.338-.427.613-.68.826a2.772 2.772 0 0 1-.851.483c.484.125.889.328 1.22.613.326.28.637.676.926 1.185L24.5 26h-2.53c-.511 0-.922-.275-1.232-.82l-3.562-7.351c-.184-.328-.384-.561-.6-.702-.215-.14-.489-.223-.815-.244v3.73h-1.989v-3.746H12.31V26H9.5V6h2.81v8.738h1.462v-4.322h1.989v4.29z"
        />
      </g>
    </svg>
  );
export default SvgKrb;
