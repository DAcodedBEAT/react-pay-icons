import * as React from "react";
const SvgVia = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#565656" r={16} />
        <path
          d="M11.133 14.296H8.005v-1.719h2.47L8.58 7.627 10.144 7l3.55 9.267 4.601.03L21.856 7l1.565.627-1.896 4.95h2.47v1.72h-3.128l-.771 2.01 3.904.025-.01 1.719-4.55-.029L16 27l-3.456-9.021L8 17.949l.01-1.718 3.874.025zm3.22 3.694L16 22.288l1.638-4.277z"
          fill="#fff"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
export default SvgVia;
