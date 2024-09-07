import React from "react";
import chair from "@/assets/images/char_rool_1.png";
import Image from "next/image";
import MText from "./MText";
import SText from "./SText";
import AddCartSVG from "@/assets/SVGs/AddCartSVG";
import Button from "./Button";

const Card = () => {
  return (
    <div className="w-[290px] h-fit p-[16px] border rounded-xl hover:shadow-2xl">
      <div>
        <Image src={chair} alt="Picture of the author" />
        <MText className="mt-[32px] font-semibold mb-[16px]">
          Recliner Chair Wood
        </MText>
        <div className="flex gap-4 tracking-tighter">
          <MText className="font-bold text-[#343434]">€299.00</MText>
          <MText className="text-[#ABABAB] font-bold">€350.00</MText>
          <MText className="text-[#B92E2E] font-bold">30% OFF</MText>
        </div>
        <SText className="text-[#838383] mt-[16px]">
          It has a backrest that can be tilted back, and often a footrest
          extended
        </SText>
      </div>
      <Button className="w-full bg-black text-white font-bold rounded-[6px] py-[12px] flex justify-center gap-3 hover:bg-gray-700 mt-5 items-center"> <AddCartSVG /> Add to cart</Button>
    </div>
  );
};

export default Card;
