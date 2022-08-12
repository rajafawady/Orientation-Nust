import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i.id} />
    ))}
  </motion.ul>
);

const itemIds = [
  {
    "id": 0,
    "name":"Home",
    "href":"/",
  },
  {
    "id": 1,
    "name":"Life AT NUST",
    "href":"/gallery",
  },
  {
    "id": 2,
    "name":"Our Team",
    "href":"/our_team",
  },
  {
    "id": 3,
    "name":"FAQs",
    "href":"/faqs",
  },
];
