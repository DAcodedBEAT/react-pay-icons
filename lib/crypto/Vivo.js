import * as React from "react";
const SvgVivo = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#408af1" r={16} />
        <path
          d="M23.049 10.277a1.574 1.574 0 0 1 2.19-.537c.75.47.986 1.47.526 2.237-1.704 2.838-3.627 5.808-5.23 8.076-2.34 3.31-2.847 4.447-4.535 4.447s-2.068-1.003-4.475-4.456c-1.43-2.05-3.223-4.795-5.27-8.036A1.647 1.647 0 0 1 6.73 9.76a1.573 1.573 0 0 1 2.202.485c2.023 3.202 6.593 9.876 7.081 10.471.51-.604 5.372-7.667 7.036-10.44z"
          fill="#fff"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
export default SvgVivo;
