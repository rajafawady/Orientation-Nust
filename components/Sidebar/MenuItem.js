import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBuildingUser, faPeopleGroup, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
const variants = {
  open: {
    y: 0,
    display: "block",
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    display: "none",
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const icons = [faHome,faBuildingUser, faPeopleGroup,faCircleQuestion];

export const MenuItem = ({ i }) => {
  const icon = icons[i.id]
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
    <div className="flex items-center">
      
      <Link href={i.href}>
      <a>
      <div className="flex justify-center items-center my-2">
      <div className="icon-placeholder" >
      
      <FontAwesomeIcon icon={icon} size="2x" color="white" />
      </div>

        <div className="text-white text-3xl font-bold"  >
          {i.name}
        </div>
        </div>
        </a>
      </Link>
    </div>
    </motion.li>
  );
};
