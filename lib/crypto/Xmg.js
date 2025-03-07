import * as React from "react";
const SvgXmg = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#004a80" r={16} />
        <path
          d="M23 19.54 21.517 25H9v-.913l6.79-7.719-6.653-8.376V7h12.331l.43 4.252h-.79c-.521-.969-.963-1.694-1.328-2.175-.364-.481-.689-.78-.975-.899-.202-.098-.48-.168-.834-.21a10.88 10.88 0 0 0-1.273-.065h-3.503l5.249 6.54v.315l-6.488 7.365h7.405c.364 0 .698-.087 1-.26.302-.174.564-.392.785-.654a5.63 5.63 0 0 0 .615-.873 8.22 8.22 0 0 0 .498-1.022z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgXmg;
