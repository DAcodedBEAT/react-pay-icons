import * as React from "react";
const SvgOxxo = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        transform="translate(-2)"
        fillRule="nonzero"
        id="oxxo"
        stroke="none"
        strokeWidth={1}
        fill="none"
      >
        <path id="Rectangle" fill="#EDA42D" d="M0 0h61.538v40H0z" />
        <g id="Page-1" transform="translate(0 7.692)">
          <path id="Fill-4" fill="#FEFEFE" d="M0 24.102h61.605V.943H0z" />
          <path
            d="M52.208 6.958a5.193 5.193 0 1 0 5.116 5.193 5.164 5.164 0 0 0-5.116-5.193"
            id="Fill-6"
            fill="#ED1C24"
          />
          <path
            d="M10.04 6.958a5.193 5.193 0 1 0 5.115 5.193 5.164 5.164 0 0 0-5.116-5.193"
            id="Fill-7"
            fill="#ED1C24"
          />
          <path
            d="M52.208 20.355a8.205 8.205 0 1 1 8.083-8.204 8.16 8.16 0 0 1-8.083 8.204ZM18.122 12.15a8.16 8.16 0 0 1-8.083 8.204 8.205 8.205 0 0 1 0-16.408 8.159 8.159 0 0 1 8.083 8.204Zm33.685-9.763c-4.737-.11-6.963 2.972-10.195 6.773l-3.048 3.586 4.827 5.865c1.15 1.803-1.045 3.591-2.406 1.942l-4.464-5.403-4.349 5.117c-1.385 1.629-3.555-.191-2.38-1.976l4.721-5.573-3.093-3.745 1.99-2.5 3.146 3.834 2.71-3.2a21.53 21.53 0 0 1 4.447-4.72H0v20.27h10.22c4.737 0 6.887-2.875 10.031-6.75l2.967-3.658-4.96-5.75c-1.19-1.775.963-3.614 2.362-1.997L25.205 9.8l4.232-5.218c1.348-1.661 3.558.108 2.424 1.92l-4.593 5.682 3.177 3.672-2.002 2.406-3.163-3.62-2.637 3.262a21.192 21.192 0 0 1-4.34 4.753h43.301V2.388h-9.797Z"
            id="Fill-8"
            fill="#ED1C24"
          />
        </g>
      </g>
    </svg>
  );
export default SvgOxxo;
