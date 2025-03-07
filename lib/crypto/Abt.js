import * as React from "react";
const SvgAbt = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#3EFFFF" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M6.5 10.487 16 5l9.5 5.487v11.026L16 27l-9.5-5.487V10.487zm.912 9.97 3.81-2.205 1.933-3.385-5.743-3.323v8.913zm.457.791 7.702 4.449V21.44l-4.038-2.313-3.664 2.12zm16.719-9.673-5.692 3.293 1.932 3.382 3.76 2.176v-8.851zm-.43-.808-7.675-4.433v4.309l1.96 3.431 5.715-3.307zm-6.047 4.555L16.939 16l2.325 1.345-1.153-2.023zm-.453-.794-1.175-2.06v2.74l1.175-.68zm-4.864 2.815L15.114 16l-1.169-.676-1.15 2.019zm-.346 1.256 3.123 1.788v-3.595l-3.123 1.807zm-4.58-7.847 5.74 3.32 1.963-3.435V6.303l-7.703 4.449zm16.29 10.481-3.636-2.104-4.039 2.341v4.196l7.675-4.433zm-4.548-2.632-3.127-1.809v3.622L19.61 18.6zm-5.212-4.071 1.173.678v-2.735l-1.173 2.057z"
        />
      </g>
    </svg>
  );
export default SvgAbt;
