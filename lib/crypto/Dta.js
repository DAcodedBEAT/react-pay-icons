import * as React from "react";
const SvgDta = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#74d269" r={16} />
        <path
          d="M24.963 14.512h.02L25 19.478 13.823 26l-2.992-1.682v.002l-.019-.012L8 22.505V9.484l3.073-1.813.006.003L13.792 6l11.15 6.563zm-3.275 3.112-2.339-1.339-7.807 4.594 2.292 1.363zm-2.866-1.64-4.816-2.758-.021 5.681zm-4.814-3.366 7.742 4.531v-2.705l-7.732-4.515zM10.82 23.57l.03-2.713-.018.011v-9.572l-2.347-1.4v12.28zm.416-3.001 2.345-1.418V9.896l-2.345 1.401zm2.881 2.031-.047 2.836L24.506 19.3l.03-2.82zm7.793-8.584 2.429-1.386-10.455-6.105-2.406 1.392z"
          fill="#fff"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
export default SvgDta;
