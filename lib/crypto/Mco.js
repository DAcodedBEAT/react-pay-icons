import * as React from "react";
const SvgMco = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#103F68" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="m15.98 5.018 9.52 5.483v11L15.991 27l-.077-.019-9.414-5.48v-11l9.414-5.483h.066zm-.031 1.138L7.5 11.076v9.85l8.448 4.919 1.032-.597 7.52-4.325v-9.845l-7.52-4.35-1.031-.572zm-7.14 10.61 2.501-1.87 2.211 1.412v2.54l1.673 1.612-.001.756-1.612 1.51H12.22l-3.41-5.96zm7.903 4.452-.003-.76 1.667-1.61v-2.54l2.187-1.43 2.496 1.889-3.393 5.942h-1.344l-1.61-1.491zm-2.37-4.91-.814-2.131h4.838l-.798 2.131.236 2.382-1.867.004-1.845.003.25-2.389zm1.595-2.715-4.598-.002.855-3.82h7.464l.9 3.825-4.621-.003z"
        />
      </g>
    </svg>
  );
export default SvgMco;
