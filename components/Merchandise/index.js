import { useState } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import products from "../../util/merchandise";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Merchandise() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="bg-white dark:bg-black md:px-60 pt-10 sm:pt-0">
    <div className='w-full flex items-center justify-center gap-1 md:gap-3 px-3  mt-10 mb-8'>
				<div className='w-1/4 h-[3px] bg-[#3F2073]'></div>
				<h1 className='my-3 p-4 shrink-0 heading text-4xl'>Buy Our Merchandise</h1>
				<div className='w-1/4 h-[3px] bg-[#3F2073]'></div>
			</div>
      <div className="max-w-2xl -mt-20 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <Tab.Group as="div" className="flex flex-col-reverse">
            <motion.div
              className="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none"
              animate={{ x: "0%" }}
              initial={{ x: "-100vw" }}
            >
              <Tab.List className="grid grid-cols-4 gap-6">
                {products.color_images[imageIndex].map((image) => (
                  <Tab
                    key={image.id}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <div className="absolute inset-0 rounded-md overflow-hidden">
                          <Image
                            layout="fill"
                            src={image.src}
                            alt=""
                            className="w-full h-full object-center object-contain"
                          />
                        </div>
                        <span
                          className={classNames(
                            selected ? "ring-indigo-500" : "ring-transparent",
                            "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </motion.div>

            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
              {products.color_images[imageIndex].map((image) => (
                <Tab.Panel key={image.id}>
                  <motion.div
                    className=""
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      className="w-full h-full object-center object-contain sm:rounded-lg"
                    />
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          <motion.div
            className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-20"
            animate={{ x: "0%" }}
            initial={{ x: "-100vw" }}
          >
            <h1 className="text-3xl font-extrabold font-poppins tracking-tight text-black">
            Unleash Fresh Vibes: <br></br>Grab Your Epic Merch Tee!
            </h1>

          

            <div className="mt-3">
              <h3 className="sr-only">Description</h3>
              <div
                className="text-base text-black dark:text-white space-y-6 text-justify"
                dangerouslySetInnerHTML={{ __html: products.description }}
              />
            </div>

            <div className="mt-5">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-black dark:text-white">
              {products.price}
            </p>
          </div>

            <div className="mt-6">
              <div className="mt-10 flex sm:flex-col">
              <button
              type="submit"
              className="max-w-xs flex-1 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white bg-gradient-to-r from-dark-purple to-prussian-blue hover:sm:w-full md:mb-0 mb-10 transition-all duration-200 transform focus:outline-none glow-on-hover"
            >
              Buy Now!!!
            </button>
            
            
            
            
            
            

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
