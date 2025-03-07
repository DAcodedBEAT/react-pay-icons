import * as React from "react";
const SvgNebl = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={16} cy={16} r={16} fill="#50479E" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M20.36 13.66v4.784l-4.307 2.367v-4.782l4.306-2.367zm5.14-1.226v7.131c0 .507-.14 1.003-.403 1.434-.26.43-.637.795-1.104 1.052l-3.212 1.765V19.11l.406-.223v-5.679l3.934-2.163c.244.42.379.895.379 1.39zM8.007 22.051a2.944 2.944 0 0 1-1.075-1.007 2.763 2.763 0 0 1-.432-1.478V15l4.424 3.455v.192l.007.198.344.203 4.416 2.428.364.2V26a3.13 3.13 0 0 1-1.562-.382L8.007 22.05zM7.823 10.06 12.5 7.5l3.18 3.08-4.756 2.623v.4L6.51 16.027l-.01-3.594c0-.507.14-1.005.405-1.436.232-.38.546-.7.918-.938zm16.17-.111a2.94 2.94 0 0 1 1.128 1.095l-3.934 2.163v-.036l-.406-.223-4.334-2.382 4.334-2.383 3.212 1.766zM6.51 16.029l4.414-2.427v4.853L6.51 16.028zm9.545-5.649V6a3.124 3.124 0 0 1 1.452.383l3.274 1.8-4.334 2.382-.392-.185zm-.364.2-4.408-2.422 3.402-1.871A3.14 3.14 0 0 1 16.055 6v4.38l-.364.2zm.392 11.111.364-.2 4.282 2.354-3.222 1.772a3.126 3.126 0 0 1-1.452.382v-4.323l.028.015zm4.698-2.582v4.707l-.052.029-4.282-2.354 4.334-2.382z"
        />
      </g>
    </svg>
  );
export default SvgNebl;
