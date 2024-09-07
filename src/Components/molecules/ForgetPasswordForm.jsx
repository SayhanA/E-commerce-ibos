import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  forgotPasswordValidationSchema,
  initialValues,
} from "@/validations/forgot-password-validation";
import Button from "../atoms/Button";

const ForgetPasswordForm = ({ className = "" }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [loginType, setLoginType] = useState("email");
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const toggleLoginType = () => {
    setLoginType((prevType) => (prevType === "email" ? "mobile" : "email"));
  };

  const handleSubmit = (values) => {
    const filteredValues = { email: values.email };
    console.log({ filteredValues });
    router.push(`/otp-confirmation?email=${values.email}`);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`bg-white h-screen flex flex-col justify-center ${className}`}
    >
      <div className="flex flex-col justify-center mx-auto max-w-[360px] h-full">
        <h1 className="text-[39px] text-[#0e194d] font-bold mt-12 mb-2">
          Forgot password
        </h1>
        <div className="text-[#0e194d]">
          By entering your email or mobile number, we will send you a link to
          reset your password.
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={forgotPasswordValidationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form>
              <div className="font-bold mt-5 text-[#0e194d]">Your email</div>

              <Field
                name="email"
                className="mt-2 border border-slate-400 rounded-[6px] py-2.5 px-3 placeholder:text-slate-400 focus:outline-none w-full"
                placeholder="e.g. hello@reallygreatsite.com"
                type="email"
              />

              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />

              <Button
                className="py-[14px] my-6 text-center bg-[#000] hover:bg-transparent rounded-[6px] w-full text-white hover:text-black"
                title="Continue forgot password"
                type="submit"
              >
                Send OTP
              </Button>
            </Form>
          )}
        </Formik>

        <div className="flex">
          <div className="h-[2px] w-full bg-slate-200 my-auto" />
          <span className="text-[#8A8A8A] mx-4">or</span>
          <div className="h-[2px] w-full bg-slate-200 my-auto" />
        </div>

        <div className="text-center mt-5 text-[#0e194d]">
          Already have an account?{" "}
          <Link href="/" className="text-blue-500 font-bold">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
