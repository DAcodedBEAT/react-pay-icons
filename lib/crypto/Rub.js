import * as React from "react";
const SvgRub = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#64d1ff" r={16} />
        <path
          d="M10.5 15.238h1.764V7h4.547c.844 0 1.614.099 2.31.297.696.198 1.292.5 1.789.904s.886.917 1.168 1.536c.281.62.422 1.36.422 2.221s-.15 1.61-.447 2.247a4.478 4.478 0 0 1-1.218 1.588 5.113 5.113 0 0 1-1.813.943 7.91 7.91 0 0 1-2.261.31h-2.51v2.608h4v1.705h-4V25h-1.987v-3.641H10.5v-1.705h1.764v-2.608H10.5zm6.31 0c1.143 0 2.042-.271 2.696-.813.654-.543.982-1.365.982-2.467 0-1.101-.328-1.902-.982-2.401-.654-.5-1.553-.75-2.695-.75h-2.56v6.431z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgRub;
