"use client";

import Image from "next/image";
import React, { useState } from "react";
import icon from "@/assets/images/icon.png";
import Link from "next/link";
import NabIcon from "@/assets/SVGs/NabIcon";
import { navbarMenu } from "@/data/menu";
import MText from "../atoms/MText";
import CartSVG from "@/assets/SVGs/CartSVG";
import userImage from "@/assets/images/user.png";
import { IoMenuOutline } from "react-icons/io5";
import SText from "../atoms/SText";
import Text from "../atoms/Text";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const urlPath = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <nav className="border-0 border-b border-[#F1F1F1] py-10 px-5">
      <div className="container mx-auto flex justify-between gap-5 z-30">
        <Link href="/" className="flex gap-2">
          <NabIcon />
        </Link>

        <ul className={`gap-1 md:flex hidden ${urlPath === '/' && 'md:hidden hidden'}`}>
          {navbarMenu.map(({ id, title, path }) => (
            <Link
              href={path}
              key={id}
              className={`hover:bg-[#F8F8F8] rounded-[6px] py-[8px] px-[20px] ${urlPath === path ? 'bg-[#F8F8F8]' : ''}`}
            >
              <MText className="font-medium">{title}</MText>
            </Link>
          ))}
        </ul>

        <div className={`md:flex gap-6 items-center hidden ${urlPath === '/' && "md:hidden hidden"}`}>
          <Link href="/">
            <CartSVG number={1} />
          </Link>
          <Link href="/" placeholder="Foysal Knanm">
            <Image
              src={userImage}
              width={40}
              height={40}
              alt="Picture of the author"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setToggleMenu((oldState) => !oldState)}
          className={`md:hidden ${urlPath === '/' && 'md:hidden hidden'}`}
        >
          <IoMenuOutline className="text-3xl" />
        </button>

        <Link href='/login' className={`py-3 px-5 rounded-[6px] bg-black text-white border-black hover:bg-transparent hover:text-black border-2 font-bold ${urlPath === '/' ? "" : "hidden    "}`}>Login</Link>
        
      </div>
      <div
        className={`fixed justify-between flex flex-col bg-white px-1 border w-[250px] h-[87vh] z-20 left-0 top-[120px] transition-all ease-in-out md:hidden ${
          toggleMenu ? "left-0" : "left-[-250px]"
        } ${urlPath === "/" && 'md:hidden hidden'}`}
      >
        <div>
          <Link href="/" className="flex items-center gap-5 border-0 border-b ">
            <CartSVG number={1} className="ml-5 my-5" />
            Cart
          </Link>
          <ul className="flex flex-col">
            {navbarMenu.map(({ id, title, path }) => (
              <Link
                href={path}
                key={id}
                className={`font-medium hover:bg-[#F8F8F8] rounded-[6px] py-3 px-[20px] text-lg ${urlPath === path ? "bg-[#F8F8F8]" : ""}`}
              >
                {title}
              </Link>
            ))}
          </ul>
        </div>

        <Link href="/" placeholder="" className="mt-auto px-2 py-4 border-0 border-t flex items-center gap-3">
          <Image
            src={userImage}
            width={40}
            height={40}
            alt="Picture of the author"
          />

          <div>
            <Text>Foysal Knanm</Text>
            <SText className="text-[#81859F]">#020820</SText>
          </div>
          
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
