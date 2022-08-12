import React from "react";
import FooterItem from "./FooterItem";
import { IoCall, IoMail } from "react-icons/io5";
const ContactCol = () => {
  return (
    <div className="flex flex-col">
      <div className="text-4xl mb-2">Contact Us</div>
      <div className="font-mont font-semibold text-lg" >In case of any query contact us at:</div>

      <FooterItem
        text={
          <div className="inline-block ml-1">
            0333-1234567 <br /> <span className="text-sm">Name, President</span>{" "}
          </div>
        }
        logo={<IoCall size={30} className="inline-block mr-1" />}
      />
      <FooterItem
        text={
          <div className="inline-block ml-1">
            0333-1234567 <br /> <span className="text-sm">Name, Director HR</span>{" "}
          </div>
        }
        logo={<IoCall size={30} className="inline-block mr-1" />}
      />
      <FooterItem
        text={
          <div className="inline-block ml-1">
            some@email.com <br /> <span className="text-sm">HR, ON 2022</span>{" "}
          </div>
        }
        logo={<IoMail size={30} className="inline-block mr-1" />}
      />
    </div>
  );
};

export default ContactCol;
