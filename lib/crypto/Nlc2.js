import * as React from "react";
const SvgNlc2 = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#f28f01" r={16} />
        <path
          d="M18.151 13.719 16.21 9.903c.404-.88.606-1.38.606-1.495 0-.413-.272-.715-.815-.908h5.948c-.733.33-1.385 1.155-1.955 2.476zm-2.916 5.928-.905 1.84h5.337c2.417 0 4.033-.453 4.848-1.36L21.663 24.5H7.078c1.575-.303 3.164-2.2 4.766-5.694.54-1.074 1.035-2.066 1.487-2.974zM5 20.25c1.181-.701 5.5-8.172 5.5-10.274 0-.495-.299-.963-.896-1.403h4.644l4.033 7.922 3.912-7.922H27c-2.037.536-6.07 10.146-6.07 11.264 0 .22.04.358.122.413h-4.237l-3.626-7.262-3.585 7.262z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgNlc2;
