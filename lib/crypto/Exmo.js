import * as React from "react";
const SvgExmo = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#347FFB" fillRule="nonzero" />
        <path
          fill="#FFF"
          d="m19.7 13.055-2.869 7.75-.018.047-.526-1.055-1.1.5 2.885-7.797 1.1-.5.527 1.055zm7.18.183L24.012 21l-.527-1.058-1.1.5.067-.182 2.867-7.76 1.1-.5.525 1.055-.064.183zm-6.14 6.712 1.689-4.563-1.103.5-.524-1.057-1.694 4.562.525 1.058 1.107-.5zm-9.137-4.5H6.558l.86.8-.86.813h5.04l.856-.813-.851-.8zM5.86 18.833h8.155l-.857.807.857.805H5.86L5 19.64l.86-.808zm2.501-6.768h8.15l-.854.808.855.805h-8.15l-.86-.806.86-.807z"
        />
      </g>
    </svg>
  );
export default SvgExmo;
