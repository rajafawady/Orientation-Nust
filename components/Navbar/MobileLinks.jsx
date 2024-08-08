import Link from "next/link";
import { useState } from "react";

const MobileLinks = ({ isSticky, sections }) => {
  const [openSection, setOpenSection] = useState(null);

  const handleSectionClick = (index) => {
    if (openSection === index) {
      setOpenSection(null);
    } else {
      setOpenSection(index);
    }
  };
  return (
    <div className="flex flex-col">
      {sections.map((section, index) => (
        <div key={section.heading} className="ml-4 relative">
          {section?.items?.length > 0 ? (
            <>
              <div
                className={`text-coral hover:text-light-yellow hover:text-glow font-semibold uppercase mb-1 cursor-pointer ${
                  openSection === index ? "text-light-yellow" : ""
                }`}
                onClick={() => handleSectionClick(index)}
              >
                {section.heading}
              </div>
              {openSection === index && (
                <div className="left-0 mt-2 bg-purple border border-purple rounded shadow">
                  {section.items
                    .filter((item) => !item.disabled)
                    .map((item) => (
                      <div key={item.id} className="mx-2 p-2">
                        <Link
                          href={`${item.link}`}
                          className={`lg:text-md mx-1 text-sm font-semibold tracking-tighter text-gray-800 hover:text-light-yellow hover:text-glow`}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                </div>
              )}
            </>
          ) : (
            <Link href={`${section.link}`}>
              <div
                className={`text-coral font-semibold uppercase mb-1 cursor-pointer ${
                  section.disabled
                    ? "pointer-events-none"
                    : "hover:text-light-yellow hover:text-glow"
                }`}
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

export default MobileLinks;
