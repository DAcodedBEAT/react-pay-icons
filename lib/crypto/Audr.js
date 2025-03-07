import * as React from "react";
const SvgAudr = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#34318A" />
        <path
          d="m10.854 13.264 3.61 1.92 1.92-.96-4.589-2.486V7.36l8.823 4.58 1.92-.96-11.3-5.924A.845.845 0 0 0 10 5.805v6.067c.003.587.332 1.124.854 1.392zm13.757-1.018a.845.845 0 0 0-.96-.153l-12.797 6.643c-.525.27-.855.811-.854 1.402v6.057a.845.845 0 0 0 1.238.749l12.768-6.624c.533-.276.864-.83.855-1.43v-6.048a.835.835 0 0 0-.25-.596zm-1.536 6.538-11.28 5.856v-4.378l11.28-5.856v4.378z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgAudr;
