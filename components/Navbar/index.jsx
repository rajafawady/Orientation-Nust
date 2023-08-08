import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import Links from "./Links";
import MobileLinks from "./MobileLinks";
import { twMerge } from "tailwind-merge";

const sections = [
  {
    heading: "Home",
    link: "/",
  },
  {
    heading: "About Us",
    items: [
      {
        id: 1,
        name: "Life At NUST",
        link: "/gallery",
      },
      {
        id: 2,
        name: "Our Team",
        link: "/our_team",
      },
    ],
  },
  {
    heading: "Events",
    items: [
      {
        id: 1,
        name: "Sports Fest",
        link: "/sports_fest",
      },
    ],
  },
  {
    heading: "ON Station",
    link: "/on-station/episode/1",
  },
  {
    heading: "Resources",
    items: [
      { id: 3, name: "Downloads", link: "/downloads", disabled: true },
      {
        id: 4,
        name: "Mechandise",
        link: "/merchandise",
      },
    ],
  },
];

const Navbar = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const navbarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [stickNavbar, setStickNavbar] = useState(false);

  function openNavbar() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    console.log({ router });
    function scrollFunction() {
      const transitionAt = 300;
      const scrollAmounnt =
        document.body.scrollTop || document.documentElement.scrollTop;

      // let margin = (-1 / transitionAt) * scrollAmounnt + 2.5;
      // if (margin > 2.5) margin = 2.5;
      // else if (margin < 0) margin = 0;
      // navbarRef.current.style.margin = `${margin}rem`;
      // navbarRef.current.style.marginLeft = margin + 'rem';
      if (scrollAmounnt >= transitionAt) setStickNavbar(true);
      else if (scrollAmounnt < transitionAt) setStickNavbar(false);
    }

    window.onscroll = scrollFunction;
    console.log("nav on");

    return () => {
      console.log("nav off");
      window.onscroll = null;
    };
  }, [router]);

  return (
    <div
      className={`sticky top-0 w-full z-50 h-16 transition-all ${
        stickNavbar ? "px-0" : "px-10"
      }`}
    >
      <div
        className={twMerge(
          `px-4 duration-300 transition-all w-full`,
          stickNavbar
            ? "bg-opacity-100 rounded-none shadow-lg mt-0"
            : "bg-opacity-70 rounded-xl shadow-none mt-10",
          !isHome ? "bg-lapis-lazuli text-white" : "bg-white text-tyrian-purple backdrop-blur"
        )}
        ref={navbarRef}
      >
        <div className="flex items-center justify-between py-2 ">
          <Link href="/">
            <div className="w-20 aspect-1 relative">
              <Image
                src="/Logo Assets/outlined-logo.svg"
                alt="logo"
                layout="fill"
              />
            </div>
          </Link>
          <div className="hidden md:flex md:items-center">
            <Links sections={sections} isSticky={stickNavbar} />
          </div>

          <div className="cursor-pointer md:hidden " onClick={openNavbar}>
            <RxHamburgerMenu size="2rem" />
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-ten border-t-2 py-2 md:hidden`}
        >
          <div className="flex flex-col">
            <MobileLinks sections={sections} />
          </div>
        </div>
      </div>
      {/* <Links /> */}
      {/* <NavDataComponent /> */}
    </div>
  );
};

export default Navbar;
