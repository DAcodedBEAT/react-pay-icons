import * as React from "react";
const SvgBand = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle fill="#516AFF" cx={16} cy={16} r={16} />
        <g fill="#FFF">
          <path d="m18.286 12.479 2.2 1.257V7.45l-4.4-2.2L9.25 9.1v13.671l6.836 3.929 6.757-4.007v-6.757l-6.522-3.929-2.2 1.1 6.522 3.85.078 4.636-4.635 2.593-4.715-2.672V10.2l4.715-2.593 2.2 1.179v3.693z" />
          <path d="m15.85 16.25 1.493-.786 1.65 1.022-4.872 2.75v-5.657L15.85 14.6" />
        </g>
      </g>
    </svg>
  );
export default SvgBand;
