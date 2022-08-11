import React from "react";
import FooterItem from "./FooterItem";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const SocialCol = ({  }) => {
  return (
    <div className="flex flex-col sm:mt-0 mt-4">
      <div className="text-2xl mb-2">Socials</div>
      <FooterItem
        text="Facebook"
        logo={<IoLogoFacebook size={25} className="inline-block mr-1" />}
        link={'https://www.facebook.com/ON.NUST/'}
      />
      <FooterItem
        text="Instagram"
        logo={<IoLogoInstagram size={25} className="inline-block mr-1" />}
        link={'https://www.instagram.com/o_nust/'}
      />
      
    </div>
  );
};

export default SocialCol;
