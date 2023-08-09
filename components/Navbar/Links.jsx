import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Links = ({ isSticky, sections }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [openSection, setOpenSection] = useState(null);

  const handleSectionClick = (index) => {
    if (openSection === index) {
      setOpenSection(null);
    } else {
      setOpenSection(index);
    }
  };

  return (
    <div className="relative flex flex-row justify-around items-center">
      {sections.map((section, index) => (
        <div
          key={section.heading}
          className={`ml-4 relative transition-all
          ${isHome ? "hover:text-ultra-red" : "hover:text-slate-200"}
          `}
        >
          {section?.items?.length > 0 ? (
            <>
              <div
                className={`font-semibold uppercase mb-1 cursor-pointer flex items-center gap-2 p-2 rounded-sm group transition-all`}
                onClick={() => handleSectionClick(index)}
              >
                <h4>{section.heading}</h4>
                <div
                  className={`${
                    openSection === index ? "rotate-[180deg]" : ""
                  } transition-transform`}
                >
                  <FaChevronDown />
                </div>
              </div>

              <div
                className={`absolute left-0 my-2 w-max max-w-xs bg-white text-tyrian-purple flex-col shadow transition-all ${
                  openSection === index
                    ? "flex top-[62px] opacity-100"
                    : " top-8 opacity-0 pointer-events-none"
                }
                  ${!isSticky ? "" : "rounded-md"}
                
                `}
              >
                {section.items
                  .filter((item) => !item.disabled)
                  .map((item) => (
                    <Link href={`${item.link}`} key={item.id}>
                      <div
                        className={`lg:text-md text-sm font-semibold tracking-tighter cursor-pointer p-4 hover:text-ultra-red transition-all`}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
              </div>
            </>
          ) : (
            <Link href={`${section.link}`}>
              <div
                className={`font-semibold uppercase mb-1 cursor-pointer transition-all 
                ${section.disabled && "pointer-events-none"}
                ${isHome ? "hover:text-ultra-red" : "hover:text-slate-200"}
                `}
                onClick={() => handleSectionClick(index)}
              >
                {section.heading}
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Links;
