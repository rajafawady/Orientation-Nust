import * as React from "react";
import { motion, useMotionValue } from "framer-motion";
import { icon } from "./settings";
import { useIconTransform } from "./use-icon-transform";
import Image from "next/image";

export function Item({ row, col, planeX, planeY, image }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  // Calculate the origin x and y offsets of this icon based on
  // its column and row position
  const xOffset =
    col * (icon.size + icon.margin) +
    (row % 2) * ((icon.size + icon.margin) / 2);
  const yOffset = row * icon.size;

  // Transform the icon's x, y and scale based on the position of the draggable plane
  useIconTransform({ x, y, scale, planeX, planeY, xOffset, yOffset });

  return (
    <motion.div
      style={{
        position: "absolute",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        left: xOffset,
        top: yOffset,
        x,
        y,
        scale,
        width: icon.size,
        height: icon.size,
        borderRadius: "50%",
        // This will change the color of an icon every render. In production
        // you'd want to save this as a ref or similar. But here it makes a nice
        // visual indicator that we're doing all this without any re-renders :)
        background: "black",
      }}
    >
      <Image src={image} layout="fill" objectFit="cover" className="rounded-full pointer-events-none"  />
    </motion.div>
  );
}
