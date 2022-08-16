import * as React from "react";
import { motion, useMotionValue } from "framer-motion";
import { Item } from "./Item";
import { device } from "./settings";
import { directorate } from "./directorate";
// Download the Framer Beta: https://www.framer.com/beta/
// Framer Beta API documentation: https://www.framer.com/api/

// Fill a grid of numbers to represent each app icon

export function AppleWatchDock() {
  // We manually create x/y motion values for the draggable plane as it allows us to pass these to
  // icon children, which can then listen to when they change and respond.
  // -220 is an arbitrary position that centers an initial icon - this could be calculated
  const x = useMotionValue(-285);
  const y = useMotionValue(-185);
  return (
    <div className="shadow-sm md:shadow-lg rounded-lg device bg-gray-100 dark:bg-gray-900 " style={device}>
      <motion.div
        drag
        // These constraints could be calculated dynamically based on icon.size and grid length
        dragConstraints={{ left: -720, right: 50, top: -300, bottom: 50 }}
        style={{
          // Likewise these draggable plane dimensions could be calculated, but 1000x1000 is arbitrary and big
          x,
          y,
          background: "transparent"
        }}
      >
        {directorate.map((rows) =>
          rows.map(item => (
            <Item row={item.rowIndex} col={item.colIndex} planeX={x} planeY={y} key={item.id} image={item.image}/>
          ))
        )}
      </motion.div>
    </div>
  );
}
