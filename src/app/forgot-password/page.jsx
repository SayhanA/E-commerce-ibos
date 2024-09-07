"use client";
import chair from "@/assets/images/chair_in_dark.png";
import LogoSVG from "@/assets/SVGs/LogoSVG";
import ForgetPasswordForm from "@/Components/molecules/ForgetPasswordForm";

import ResetPasswordForm from "@/Components/molecules/ResetPasswordForm";
import Image from "next/image";

// import SimpleSlider from '@/components/molecules/SimpleSlider';

const Page = () => {
  return (
    <div className="w-full flex h-screen">
      <div className="w-[50%] h-full">
	  <ForgetPasswordForm className="col-span-1 max-md:col-span-2 px-4" />
      </div>
      <div className="relative w-[50%] h-full md:block hidden">
        <Image	
          src={chair}
          alt="Picture of the author"
          className="w-full h-full absolute"
          priority={true}
        />
        <div className="z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <LogoSVG className="mx-auto mb-3" />
          <p className="text-center text-white">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
