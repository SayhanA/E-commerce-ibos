"use client";

import Image from "next/image";
import chair from "@/assets/images/chair_in_dark.png";
import LogoSVG from "@/assets/SVGs/LogoSVG";
import XLText from "@/Components/atoms/XLText";
import FurniFlexSVG from "@/assets/SVGs/FurniFlexSVG";
import Text from "@/Components/atoms/Text";
import Button from "@/Components/atoms/Button";
import GoogleSVG from "@/assets/SVGs/GoogleSVG";
import AppleSVG from "@/assets/SVGs/AppleSVG";
import Link from "next/link";
import { ErrorMessage, Field, Form, Formik } from "formik";
import SText from "@/Components/atoms/SText";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  return (
    <div className="md:flex h-screen transition-all">
      <div className="md:w-[50%] flex justify-center items-center px-5 h-screen w-full">
        <div>
          <p className="text-left text-[32px] leading-8">Welcome Back!</p>
          <Text className="font-medium text-[#707070] mb-[28px]">
            Enter your Credentials to access your account
          </Text>
          {/* <FurniFlexSVG className="mt-4 mx-auto mb-2" />
          <Text className="text-[#707070] text-center">
            Signup for purchase your desire products
          </Text> */}

          <Formik
            initialValues={{ email: "", password: "", terms: false }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                router.push('/dashboard/products');
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, values }) => (
              <Form className="flex flex-col gap-4 mb-3">
                <div className="w-full border border-[#D9D9D9] px-[11px] py-[8px] rounded-[6px]">
                  <SText className="text-[#707070]">Email Address</SText>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="placeholder:text-black outline-none w-full bg-transparent"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500"
                  name="email"
                  component="div"
                />
                <div className="w-full border border-[#D9D9D9] px-[11px] py-[8px] rounded-[6px] relative">
                  <SText className="text-[#707070]">Password</SText>
                  <Field
                    type={isVisible ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="placeholder:text-black w-full outline-none pe-10"
                  />
                  <Button
                    onClick={() => setIsVisible((oldState) => !oldState)}
                    className="absolute end-3 top-1/2 -translate-y-1/2 text-2xl text-[#707070] border-0"
                  >
                    {isVisible ? <IoEye /> : <IoEyeOffSharp />}
                    {/* <IoEyeOffSharp className="absolute end-3 top-1/2 -translate-y-1/2 text-2xl text-[#707070]" /> */}
                  </Button>
                </div>
                <ErrorMessage
                  className="text-red-500"
                  name="password"
                  component="div"
                />

                <Link href="/forgot-password" className="text-[#1E99F5] ml-auto ">
                  Forgot Password
                </Link>

                <label className="flex gap-2">
                  <Field type="checkbox" name="terms" className="" />
                  <Text className="underline">
                    I agree to the Terms & Policy
                  </Text>
                </label>

                <Button
                  type="submit"
                  disabled={isSubmitting || !values.terms}
                  className="px-[20px] py-[14px] border-[#D9D9D9] flex gap-2 items-center justify-center bg-black text-white font-bold hover:bg-transparent hover:text-black disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-white transition-all"
                >
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>

          <div className="w-full flex items-center gap-3">
            <span className="w-full border border-[#F1F0F0] h-fit"></span>
            or
            <span className="w-full border border-[#F1F0F0] h-fit"></span>
          </div>

          <div className="w-full flex items-center gap-3 my-[12px] sm:flex-nowrap flex-wrap">
            <Button className="px-[20px] py-[14px] border-[#D9D9D9] flex gap-2 w-full justify-center">
              {" "}
              <GoogleSVG /> Sign in with Google
            </Button>
            <Button className="px-[20px] py-[14px] border-[#D9D9D9] flex gap-2  w-full justify-center">
              <AppleSVG /> Sign in with Google
            </Button>
          </div>

          <div className="flex gap-2 justify-center mt-5 w-full ">
            <Text>Have an account?</Text>
            <Link href="/signup" className="text-[#0F3DDE]">
              Sign Up
            </Link>
          </div>
        </div>
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

export default Login;
