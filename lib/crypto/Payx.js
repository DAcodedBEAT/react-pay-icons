import * as React from "react";
const SvgPayx = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#630" />
        <g fill="#FFF">
          <path d="M11.688 10.063 12.938 7l8.562.031c1.25.094 2.75.094 3.594 1.157 1 1.156.781 2.812.281 4.124A8.712 8.712 0 0 1 19.031 18c-2.062.313-4.156.219-6.25.219.417-1.017.834-2.038 1.25-3.063 1.719 0 3.469.094 5.219-.187 1.594-.406 3.063-2 2.813-3.75-.157-.75-1-1.094-1.72-1.094-2.874-.125-5.75 0-8.624-.063h-.031z" />
          <path d="M8 10.906h10.156l-1.343 3.469H6.624L8 10.937v-.03zm1.625 4.25h3.531L9.47 24.531H6l3.656-9.375h-.031z" />
        </g>
      </g>
    </svg>
  );
export default SvgPayx;
