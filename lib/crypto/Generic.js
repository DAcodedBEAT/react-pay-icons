import * as React from "react";
const SvgGeneric = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#efb914" fillRule="nonzero" r={16} />
        <path
          d="M21.002 9.855A7.947 7.947 0 0 1 24 15.278l-2.847-.708a5.357 5.357 0 0 0-3.86-3.667c-2.866-.713-5.76.991-6.465 3.806s1.05 5.675 3.917 6.388a5.373 5.373 0 0 0 5.134-1.43l2.847.707a7.974 7.974 0 0 1-5.2 3.385L16.716 27l-2.596-.645.644-2.575a8.28 8.28 0 0 1-1.298-.323l-.643 2.575-2.596-.646.81-3.241c-2.378-1.875-3.575-4.996-2.804-8.081s3.297-5.281 6.28-5.823L15.323 5l2.596.645-.644 2.575a8.28 8.28 0 0 1 1.298.323l.643-2.575 2.596.646z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgGeneric;
