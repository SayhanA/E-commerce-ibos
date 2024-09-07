import FBSVG from "@/assets/SVGs/FBSVG";
import InstaSVG from "@/assets/SVGs/InstaSVG";
import InstSVG from "@/assets/SVGs/InstSVG";
import LinkedInSVG from "@/assets/SVGs/LinkedInSVG";
import NabIcon from "@/assets/SVGs/NabIcon";
import footerMenu, { footerLinks } from "@/data/footerMenu";
import Link from "next/link";
import React from "react";
import Text from "../atoms/Text";
import MText from "../atoms/MText";

const Footer = () => {
  return (
    <footer className="bg-[#0E0E0E] pt-[60px] absolute bottom-0 w-full px-5">
      <div className="container mx-auto flex justify-between flex-wrap">
        <NabIcon white className="mb-10" />
        <div className="flex xl:flex-nowrap flex-wrap md:gap-32 xs:gap-10 gap-5 md:justify-end text-white">
          {footerMenu.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4 text-white">
                {section.title}
              </h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item.id} className="mb-2">
                    <Link
                      href={item.link}
                      id={item.id}
                      className="text-[#81859F] hover:text-white"
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        item.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {item.icon && <i className={`mr-2 ${item.icon}`}></i>}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto pt-10 border-0 border-t border-t-[#252948] mt-[100px]">
        <div className="justify-between flex flex-wrap">
          <div className="flex gap-[11px]">
            <FBSVG />
            <InstaSVG />
            <InstSVG />
            <LinkedInSVG />
          </div>
          <ul className="flex gap-6 text-[#81859F]">
            {footerLinks.map(({ id, title, link }) => (
              <Link href={link} key={id}>
                <Text>{title}</Text>
              </Link>
            ))}
          </ul>
          <div>
            <Text className="text-[#81859F]">United States (English)</Text>
          </div>
        </div>
        <MText className="text-[#323544] text-center my-[32px]">EEVE © 2024. All rights reserved.</MText>
      </div>
    </footer>
  );
};

export default Footer;
