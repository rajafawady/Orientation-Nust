import React from "react";

const FooterItem = ({ logo, link, text }) => {
  return (
    <div className="py-2">
      {link ? (
        <div>
          <a
            target="_blank"
            className="cursor-pointer hover:text-ultra-red transition-colors hover:underline hover:underline-offset-4"
            href={link}
          >
            {logo}
            {text}
          </a>
        </div>
      ) : (
        <div className="flex">
          <div className="my-auto">{logo}</div>
          <div className="">{text}</div>
        </div>
      )}
    </div>
  );
};

export default FooterItem;
