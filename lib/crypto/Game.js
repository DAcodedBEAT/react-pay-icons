import * as React from "react";
const SvgGame = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#2d475b" r={16} />
        <path
          d="M12.869 12.685h11.085v2.488H12.869zm11.085 4.144H24v6.543s-8.647 6.265-15.363-.552c0 0-3.68-3.732-2.346-9.168 0 0 1.058-6.771 9.108-7.6 0 0 4.967-.692 8.187 2.994l-1.932 1.888s-4.094-4.238-9.567-.92c0 0-4.462 2.487-2.622 8.752 0 0 2.024 5.436 8.371 4.33 0 0 2.162-.492 3.266-1.444v-2.335H12.87v-2.488z"
          fill="#fff"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
export default SvgGame;
