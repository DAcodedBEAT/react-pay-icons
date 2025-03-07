import * as React from "react";
const SvgZip = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 26"
      {...props}
    >
      <path fill="#fff" d="M0 0h40v26H0V0Z" />
      <path
        fill="#1A0826"
        d="m2.81 15.9.31 2.56h11l-.35-2.94H8.64l-.05-.36 4.73-3.31L13 9.27H2l.36 2.94H7.5l.04.37-4.73 3.31Z"
      />
      <path fill="#AA8FFF" d="m14.28 9.27 1.13 9.2h11l-1.12-9.2H14.28Z" />
      <path
        fill="#1A0826"
        d="M37.96 12.58c-.25-2.06-1.87-3.32-4.07-3.3h-7.32l1.12 9.18H31l-.23-1.84h3.49c2.74 0 4-1.71 3.71-4.04Zm-4.07 1.47h-3.44l-.27-2.2h3.46c.81 0 1.23.47 1.3 1.1.04.4-.14 1.1-1.05 1.1Z"
      />
      <path
        fill="#000"
        d="M17.91 8.05c.58-.62.48-1.66-.22-2.32-.7-.66-1.75-.68-2.33-.06-.57.62-.47 1.66.23 2.32.7.66 1.74.68 2.32.06Z"
      />
    </svg>
  );
export default SvgZip;
