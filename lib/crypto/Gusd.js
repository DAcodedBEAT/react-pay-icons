import * as React from "react";
const SvgGusd = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#00DCFA" />
        <path
          d="M19.378 5c-3.87 0-7.157 2.976-7.57 6.807C7.975 12.221 5 15.508 5 19.377A7.627 7.627 0 0 0 12.622 27c3.87 0 7.17-2.976 7.57-6.807 3.832-.414 6.808-3.701 6.808-7.57A7.627 7.627 0 0 0 19.378 5zm5.836 8.476a5.93 5.93 0 0 1-4.97 4.97v-4.97h4.97zM6.786 18.524a5.93 5.93 0 0 1 4.97-4.983v4.97h-4.97v.013zm11.673 1.72a5.895 5.895 0 0 1-5.837 5.035 5.894 5.894 0 0 1-5.836-5.034h11.673zm.065-6.768v5.035h-5.048v-5.035h5.048zm6.69-1.72H13.541a5.895 5.895 0 0 1 5.837-5.035 5.894 5.894 0 0 1 5.836 5.034z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgGusd;
