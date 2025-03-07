import * as React from "react";
const SvgGvt = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} fill="#16b9ad" r={16} />
        <path
          d="M26 13.193C26 18.601 21.513 23 16 23S6 18.6 6 13.195c0-.398.024-.797.074-1.193H7.87c-.06.395-.09.794-.09 1.193 0 4.445 3.688 8.062 8.221 8.062 4.326 0 7.882-3.292 8.2-7.455H11.48c.27 1.944 1.803 3.488 3.777 3.807 1.975.318 3.93-.664 4.822-2.42h1.925c-.875 2.522-3.29 4.218-6.006 4.22-3.496 0-6.341-2.789-6.341-6.216 0-.4.04-.8.117-1.193h16.152c.05.396.074.794.074 1.193z"
          fill="#fff"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
export default SvgGvt;
