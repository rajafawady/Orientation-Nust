import React from "react";

const Star = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnsSvgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 2000 2000"
    >
      <g>
        <g fill="hsl(43, 97%, 49%)" id="star">
          <path
            fill={color}
            stroke={color}
            d="M 500 500 C 989.5379246129569 1020.924150774086 989.5379246129569 1020.924150774086 1500 500 C 989.5379246129569 1020.924150774086 989.5379246129569 1020.924150774086 1500 1500 C 989.5379246129569 1020.924150774086 989.5379246129569 1020.924150774086 500 1500 C 989.5379246129569 1020.924150774086 989.5379246129569 1020.924150774086 500 500"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default Star;
