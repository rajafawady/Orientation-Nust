import React, { useState, Fragment } from "react";
import EcDialog from "./EcDialog";

const Card2 = ({ name, image, role, quote }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      layout
      className="flex text-tyrian-purple dark:text-pale-pink p-4 pr-2 rounded-3xl cursor-pointer bg-gradient-to-br  from-ultra-red via-pale-pink to-ultra-red dark:from-gray-500 dark:via-tyrian-purple dark:to-ultra-red w-80"
      onClick={() => setIsOpen(true)}
    >
      <div className="flex flex-col">
        <div className="flex">
          <div layout className="w-32">
            <img layout src={image} className="aspect-square rounded-full" />
          </div>
          <div className="flex flex-col align-middle px-4">
            <div
              layout
              className="text-2xl font-semibold h-1/2 font-montserrat justify-end flex flex-col "
            >
              {name}{" "}
            </div>
            <div
              layout="position"
              className="text-base font-montserrat h-1/2 justify-start flex flex-col "
            >
              {role}
            </div>
          </div>
        </div>
      </div>

      <EcDialog
        name={name}
        role={role}
        image={image}
        quote={quote}
        isOpen={isOpen}
        setOpen={setIsOpen}
      />
    </div>
  );
};

Card2.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  name: "John Doe",
  role: "VP Operations",
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue, nisl sed sodales varius, diam ante sagittis sapien, at sagittis magna sem et nulla. Quisque elementum viverra consequat. Duis at leo lobortis, tincidunt quam ut, porta ex. Vestibulum tellus massa, pretium quis bibendum pellentesque, luctus quis ex. Quisque non sem volutpat, tincidunt turpis nec, pharetra ipsum. Phasellus id facilisis leo, a commodo odio. Donec convallis non lacus eu commodo. Integer maximus nunc ut enim vestibulum volutpat. Nunc et neque est. Suspendisse a sapien quis purus egestas convallis a sit amet nunc. Aliquam nec varius felis, eu condimentum justo. Aliquam vestibulum.",
};

export default Card2;