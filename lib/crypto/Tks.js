import * as React from "react";
const SvgTks = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#895AF8" fillRule="nonzero" />
        <g fill="#FFF">
          <path d="M17.77 14.25a4 4 0 0 1 .48 0c1.48.1 2.16 2.11 3.1 2a8.16 8.16 0 0 1-3 1.55 2 2 0 0 1-2.17-1.3v4L22 17.18V12l-4.23 2.25zm-2.89-.01a2.05 2.05 0 0 1-.74-1.49v-.08c0-1.16 1.87-3 1.93-3 .06.06 1.93 1.85 1.93 3v.09a2 2 0 0 1-.6 1.36l4.6-2.47-6-2.94-6 2.91 4.88 2.62zm.98 2.3a2 2 0 0 1-2.17 1.31 8.16 8.16 0 0 1-3-1.55c.94.07 1.61-1.95 3.1-2a4 4 0 0 1 .48 0L10 12v5.19l5.87 3.39-.01-4.04z" />
          <path
            d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0 0 16 4zm-6.7 7.19L16 7.94l6.71 3.25v6.39L16 21.45l-6.7-3.87v-6.39zm13.43 9-6.68 3.86-6.76-3.9v-.37l6.76 3.9 6.68-3.86v.37zm0-.75-6.68 3.86-6.76-3.9V19l6.76 3.91 6.68-3.86v.39zm0-.75-6.68 3.86-6.76-3.9v-.37l6.76 3.91 6.68-3.86v.36z"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
export default SvgTks;
