import React from "react";
import FooterItem from "./FooterItem";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { MdLocalDrink, MdFastfood, MdEmojiFoodBeverage } from "react-icons/md";

const SocialCol = ({}) => {
  return (
    <div className="flex flex-col justify-between sm:mt-0 mt-4">
    <div>
      <div className="text-4xl mb-2">Socials</div>
      <div className="flex sm:justify-between space">
        <FooterItem
          text=""
          logo={<IoLogoFacebook size={35} className="inline-block mr-6 sm:mr-1 " />}
          link={"https://www.facebook.com/ON.NUST/"}
        />
        <FooterItem
          text=""
          logo={<IoLogoInstagram size={35} className="inline-block mr-6 sm:mr-1 " />}
          link={"https://www.instagram.com/o_nust/"}
        />
        <FooterItem
          text=""
          logo={<IoLogoTwitter size={35} className="inline-block mr-6 sm:mr-1 " />}
          link={"https://twitter.com/o_nust?lang=en"}
        />
      </div>
      </div>
      <div>
      <div className="text-4xl mb-2">Sponsors</div>
      <div className="flex sm:justify-between ">
        <FooterItem
          text=""
          logo={<MdLocalDrink size={35} className="inline-block mr-6 sm:mr-1  " />}
        />
        <FooterItem
          text=""
          logo={<MdFastfood size={35} className="inline-block mr-6 sm:mr-1 " />}
        />
        <FooterItem
          text=""
          logo={<MdEmojiFoodBeverage size={35} className="inline-block mr-6 sm:mr-1 " />}
        />
      </div>
      </div>
    </div>
  );
};

export default SocialCol;
