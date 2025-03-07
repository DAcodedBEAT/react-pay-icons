import * as React from "react";
const SvgStak = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <circle cx={16} cy={16} r={16} fill="#F2941B" />
        <path
          d="M16.566 5h.011c2.072 2.05 4.121 4.12 6.181 6.181h5.14l-11.57 16.393c-.192-1.925-.34-3.85-.51-5.774 1.676-2.411 3.397-4.8 5.073-7.2l-3.827-3.815a8.889 8.889 0 0 0-.113-1.347c-.125-1.472-.204-2.966-.385-4.438zM4.011 21.46c3.883-5.456 7.732-10.935 11.604-16.403l.487 5.796c-1.687 2.411-3.385 4.789-5.072 7.189 1.257 1.256 2.513 2.535 3.793 3.792.17 1.924.317 3.872.51 5.808h-.024l-6.147-6.159c-1.72.023-3.441-.011-5.162.023v-.046h.011z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
export default SvgStak;
