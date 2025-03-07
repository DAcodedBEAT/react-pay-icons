import * as React from "react";
const SvgCtr = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#fdde6c" fillRule="nonzero" r={16} />
        <path
          d="M16 27C9.925 27 5 22.075 5 16S9.925 5 16 5s11 4.925 11 11-4.925 11-11 11zm0-1.546a9.454 9.454 0 1 0 0-18.908 9.454 9.454 0 0 0 0 18.908zm.072-2.913c-3.597 0-6.494-2.75-6.494-6.505V16c0-3.666 2.825-6.54 6.638-6.54 2.572 0 4.227 1.078 5.343 2.623l-2.627 2.03c-.72-.898-1.547-1.473-2.752-1.473-1.763 0-3.004 1.491-3.004 3.324V16c0 1.887 1.241 3.36 3.004 3.36 1.313 0 2.087-.61 2.842-1.527l2.627 1.869c-1.188 1.635-2.789 2.839-5.577 2.839z"
          fill="#fff"
        />
      </g>
    </svg>
  );
export default SvgCtr;
