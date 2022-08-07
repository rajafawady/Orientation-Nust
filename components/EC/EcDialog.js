import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";

const EcDialog = ({ name, image, role, quote, isOpen, setOpen }) => {
  const [classes, setClasses] = useState(false);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const closeFunc = () => {
    setClasses(true);
    timeout(300).then(() => {
      setOpen(false);
      setClasses(false);
    });
  };

  return (
    <div>
      <Transition show={isOpen} as={Fragment}>
        <Dialog open={isOpen} onClose={closeFunc} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-out duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`fixed inset-0 bg-black/70 transition-all duration-300 ${
                classes ? "opacity-0" : ""
              } `}
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition-opacity ease-out duration-700"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel
                  className={`w-11/12 rounded-xl transition-all duration-300 bg-gradient-to-br from-lapis-lazuli to-white  dark:from-gray-900
                dark:to-prussian-blue text-tyrian-purple dark:text-pale-pink p-4 sm:p-6 md:p-8 lg:py-12 lg:px-8 min-h-[80vh]
                  ${classes ? "min-h-[60vh] opacity-0 " : ""}  `}
                >
                  <div className="grid grid-cols-6 justify-center">
                    <div className="col-span-2 mx-auto lg:ml-8 ">
                      <img
                        src="/svg/blue-svg/5.svg"
                        className="h-36  hidden dark:sm:block  "
                      />
                      <img
                        src="/svg/purple-svg/5.svg"
                        className="h-36 sm:block hidden dark:hidden"
                      />
                    </div>
                    <div className="col-start-2 sm:col-start-3 col-span-4 sm:col-span-2 flex flex-col text-center my-auto">
                      <div className="text-2xl md:text-3xl  lg:text-5xl  font-montserrat ">
                        {name}
                      </div>
                      <div className="md:text-xl  lg:text-3xl font-brittany p-2 sm:p-4 lg:p-8 font-semibold">
                        {role}
                      </div>
                    </div>

                    <div className="sm:col-span-2 col-span-1  mr-0 ml-auto cursor-pointer ">
                      <MdClose size={30} className="" onClick={closeFunc} />
                    </div>

                    <div className=" col-span-4 col-start-2 py-2 lg:p-6 lg:pr-2 lg:mx-0 mx-auto lg:col-span-2 ">
                      <img
                        src={image}
                        className="aspect-square rounded-xl w-40 md:w-60 lg:w-full"
                      />
                    </div>
                    <div className="col-span-6 lg:col-span-4 py-2 lg:p-6 lg:pl-2 text-justify font-montserrat text-sm md:text-base lg:text-xl xl:text-2xl">
                      {quote}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EcDialog;
