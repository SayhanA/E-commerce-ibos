import Image from "next/image";
import React from "react";
import icon from "@/assets/images/icon.png";
import Link from "next/link";
import NabIcon from "@/assets/SVGs/NabIcon";
import { navbarMenu } from "@/data/menu";
import MText from "../atoms/MText";
import CartSVG from "@/assets/SVGs/CartSVG";
import userImage from "@/assets/images/user.png"

const NavBar = () => {
  return (
    <nav className="border-0 border-b border-[#F1F1F1] py-10">
      <div className="container mx-auto flex justify-between gap-5">
        <Link href="/" className="flex gap-2">
          <NabIcon />
        </Link>

        <ul className="flex gap-1">
          {navbarMenu.map(({ id, title, path }) => (
            <Link
              href={path}
              key={id}
              className="hover:bg-[#F8F8F8] rounded-[6px] py-[8px] px-[20px]"
            >
              <MText className="font-medium">{title}</MText>
            </Link>
          ))}
        </ul>

        <div className="flex gap-6 items-center">
          <Link href="/">
            <CartSVG number={1} />
          </Link>
          <Image
            src={userImage}
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
