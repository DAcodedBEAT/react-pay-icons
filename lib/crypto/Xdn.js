import * as React from "react";
const SvgXdn = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#4f7aa2" r={16} />
        <path
          d="M13.309 12h2.738c1.322 0 3.683.803 3.683 4s-2.36 4-3.683 4H13.31zm1.51 6.38h1.134c.944 0 2.077-.578 2.077-2.38s-1.133-2.38-2.077-2.38H14.82zM20.77 12h.566l5.098 7.026V12H27v8h-.567l-5.098-6.872V20h-.567zM5 12h1.888v2H5zm2.833 0H9.72v2H7.833zm2.832 0h1.889v2h-1.889zm0 3h1.889v2h-1.889zm0 3h1.889v2h-1.889zm-2.832-3H9.72v2H7.833z"
          fill="#fff"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
export default SvgXdn;
