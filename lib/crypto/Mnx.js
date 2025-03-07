import * as React from "react";
const SvgMnx = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#00ADEF" fillRule="nonzero" />
        <path
          fill="#FFF"
          d="M14.863 26.986C9.32 26.405 5 21.708 5 16c0-5.708 4.32-10.405 9.863-10.986v3.37A7.7 7.7 0 0 0 8.336 16a7.7 7.7 0 0 0 6.527 7.616v3.37zM17.038 5c5.23.479 9.403 4.617 9.948 9.837h-3.363a7.7 7.7 0 0 0-6.585-6.474V5zM27 17.017c-.482 5.29-4.684 9.5-9.962 9.983v-3.363a7.7 7.7 0 0 0 6.606-6.62H27z"
        />
      </g>
    </svg>
  );
export default SvgMnx;
