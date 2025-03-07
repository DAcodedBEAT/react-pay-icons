import * as React from "react";
const SvgMth = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} fill="#104fca" r={16} />
        <g fill="#fff">
          <path
            d="m7 9.568 4.234 7.103V24C8.896 24 7 22.164 7 19.899z"
            fillOpacity={0.5}
          />
          <path
            d="m20.765 16.663 4.232-7.099h.002V19.9C25 22.164 23.104 24 20.765 24z"
            fillOpacity={0.6}
          />
          <path
            d="M15.997 16.458 13.88 20.01c-.439-.11-.911-.536-1.416-1.277L7 9.568c2.025-1.133 4.615-.46 5.784 1.5z"
            fillOpacity={0.8}
          />
          <path d="M19.216 11.06C20.385 9.098 22.975 8.426 25 9.559l-5.464 9.165A4.267 4.267 0 0 1 16 20.568a4.33 4.33 0 0 1-1.9-.435l-.22-.123z" />
        </g>
      </g>
    </svg>
  );
export default SvgMth;
