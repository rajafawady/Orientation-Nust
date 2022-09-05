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
    "name":"Legacy",
    "href":"/history",
  },
  {
    "id": 4,
    "name":"ON Station",
    "href":"/on-station/episode/1",
  },
  {
    "id": 5,
    "name":"OG Activites",
    "href":"/og-activities",
  },
  ,
  {
    id: 6,
    name: "Sports Fest",
    href: "/sports_fest",
  },
  {
    id: 7,
    name: "Downloads",
    href: "/downloads",
  },
  {
    id: 8,
    name: "Merchandise",
    href: "/merchandise",
  },
  {
    id: 9,
    name: "FAQs",
    href: "/faqs",
  },
  
];