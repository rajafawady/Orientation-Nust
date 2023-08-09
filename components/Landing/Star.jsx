import React, { useEffect, useRef } from "react";

const Star = ({ color = "white" }) => {
  const ref = useRef(null);
  let scrollY = 0;
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const multiplier = window.scrollY - scrollY > 0 ? 1 : -1;
        // const y = window.scrollY;
        ref.current.style.transform = `translateY(${multiplier / 2}rem)`;
        scrollY = window.scrollY;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <svg
      ref={ref}
      className="transition-transform duration-1000"
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
