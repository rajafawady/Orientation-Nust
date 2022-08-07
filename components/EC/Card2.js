import React, { useState } from "react";
import { motion } from "framer-motion";

const Card2 = ({ name, image, role, quote }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`flex text-tyrian-purple dark:text-pale-pink p-4 pr-2 rounded-3xl cursor-pointer bg-gradient-to-br  from-pale-pink via-ultra-red to-pale-pink dark:from-tyrian-purple dark:via-ultra-red dark:to-tyrian-purple ${
        isOpen ? "w-96" : "w-80 "
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div className="flex flex-col">
        <div className="flex">
          <div layout className={`${isOpen ? "w-40" : "w-32"}`}>
            <motion.img layout src={image} className="aspect-square rounded-full" />
          </div>
          <div className="flex flex-col align-middle px-4">
            <motion.div
              layout
              className="text-2xl font-semibold h-1/2 font-montserrat justify-end flex flex-col "
            >
              {name}{" "}
            </motion.div>
            <motion.div
              layout="position"
              className="text-lg font-montserrat italic h-1/2 justify-start flex flex-col "
            >
              {role}
            </motion.div>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 font-montserrat text-justify"
          >
            {quote}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

Card2.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  name: "John Doe",
  role: "VP Operations",
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus, consectetur adipiscing elit. Morbi maximus, ligula eget semper ornare, eros diam laoreet mi, vitae lacinia massa lacus nec elit. In aliquam lacus id rhoncus dictum.  ",
};

export default Card2;
