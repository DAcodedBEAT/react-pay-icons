import * as React from "react";
const SvgKonbini = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        transform="translate(-1)"
        fillRule="nonzero"
        id="konbini"
        stroke="none"
        strokeWidth={1}
        fill="none"
      >
        <path id="Rectangle-path" fill="#000" d="M0 0h61.538v40H0z" />
        <g id="Page-1-2" transform="translate(19 8)">
          <g id="Group">
            <g id="Group-3" fill="#F91E13">
              <path
                d="M9.66 24.267c-.117.008-.234.024-.352.024-2.174.002-4.348.008-6.521-.005a2.892 2.892 0 0 1-.965-.153 2.22 2.22 0 0 1-1.585-1.994C.175 21.323.208 20.5.2 19.68c.03-.154.094-.3.186-.427 1.79-2.697 3.553-5.413 5.328-8.12 2.012-3.07 4.031-6.134 6.027-9.214a1.66 1.66 0 0 1 .537-.665c.672-.004 1.345-.01 2.018-.01 2.124-.002 4.248.017 6.372-.008a2.172 2.172 0 0 1 2.208 2.095c.01.487-.142.963-.43 1.356L21.089 6.75c-1.16 1.772-2.32 3.544-3.478 5.317-.064.098-.117.203-.175.305a3.834 3.834 0 0 1-.665 1.146c-1.9 2.877-3.764 5.777-5.673 8.649-.391.589-.772 1.185-1.154 1.781a.737.737 0 0 1-.283.32"
                id="Fill-1"
              />
            </g>
            <g id="Group-6" fill="#1E32C7">
              <path
                d="M12.277 1.253C11.515 2.425 10.756 3.6 9.99 4.768 6.826 9.601 3.66 14.434.492 19.265c-.092.141-.195.276-.293.415-.008-.117-.023-.234-.023-.35-.001-5.147 0-10.293.001-15.44a2.536 2.536 0 0 1 .832-2.03 2.311 2.311 0 0 1 1.536-.616c3.191-.004 6.383-.005 9.574-.001.053 0 .105.006.158.01"
                id="Fill-4"
              />
            </g>
            <path
              d="M9.66 24.267c.272-.442.533-.891.817-1.325 1.691-2.583 3.385-5.163 5.082-7.742.594-.904 1.186-1.808 1.778-2.712.03-.041.063-.08.098-.117.372.552.75 1.1 1.114 1.656a6215 6215 0 0 1 4.495 6.857 2.16 2.16 0 0 1-1.871 3.405c-2.52-.002-5.039-.002-7.558 0l-3.561-.002c-.131 0-.262-.013-.394-.02"
              id="Fill-7"
              fill="#FEC700"
            />
          </g>
        </g>
      </g>
    </svg>
  );
export default SvgKonbini;
