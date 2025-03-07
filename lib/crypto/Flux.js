import * as React from "react";
const SvgFlux = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle fill="#2B61D1" cx={16} cy={16} r={16} />
        <g fill="#FFF">
          <path d="M17.963 25.862 16 27l-4.218-2.442 1.915-1.109.048-.028.073.042zM25.5 10.5v2.289l-4.152-2.403-1.126-.652-1.126.652-5.278 3.055-1.126.652v1.348l-2.03-1.176-1.127-.652-1.126.652L6.5 15.371V10.5L16 5z" />
          <path d="M25.5 15.397v6.111l-5.278 3.056-.007-.004-5.27-3.052v-6.11l5.277-3.058zm-12.929 2.582v3.514L9.536 23.25 6.5 21.493v-3.514l3.036-1.758z" />
        </g>
      </g>
    </svg>
  );
export default SvgFlux;
