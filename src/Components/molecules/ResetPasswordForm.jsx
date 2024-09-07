import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import porichoyLogo from '@/assets/images/icon.png';
import {
	initialValues,
	resetPasswordValidationSchema,
} from '@/validations/reset-password-validation';
import Button from '../atoms/Button';
import LogoSVG from '@/assets/SVGs/LogoSVG';

const ResetPasswordForm = ({ className = '' }) => {
	const [isMounted, setIsMounted] = useState(false);
	const router = useRouter();

	const handleSubmit = (values) => {
		router.push('/dashboard');
	};

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div className={`bg-white h-screen flex flex-col justify-center ${className}`}>
			<div className="flex flex-col justify-center mx-auto w-full min-[480px]:w-[360px] h-full">
				<h1 className="text-[39px] text-[#0e194d] font-bold mt-12 mb-2">Reset password</h1>
				<div className="text-[#0e194d]">Enter your new password to reset your password.</div>

				<Formik
					initialValues={initialValues}
					validationSchema={resetPasswordValidationSchema}
					onSubmit={handleSubmit}
					enableReinitialize
				>
					{({ errors, touched }) => (
						<Form>
							<div className="font-bold mt-5 text-[#0e194d]">Password</div>
							<Field
								name="password"
								className="mt-2 border border-slate-400 rounded-[6px] py-2.5 px-3 placeholder:text-slate-400 focus:outline-none w-full"
								placeholder="Type your password here"
								type="Password"
							/>
							<ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />

							<div className="font-bold mt-5 text-[#0e194d]">Confirm Password</div>
							<Field
								name="confirm_password"
								className="mt-2 border border-slate-400 rounded-[6px] py-2.5 px-3 placeholder:text-slate-400 focus:outline-none w-full"
								placeholder="Retype your password here"
								type="Password"
							/>
							<ErrorMessage
								name="confirm_password"
								component="div"
								className="text-red-500 text-sm mt-1"
							/>

							<Button
								className="py-[14px] my-6 text-center bg-[#000] w-full text-white"
								title="Reset new password"
								type="submit"
							>Submit</Button>
						</Form>
					)}
				</Formik>

				<div className="flex">
					<div className="h-[2px] w-full bg-slate-200 my-auto" />
					<span className="text-[#8A8A8A] mx-4">or</span>
					<div className="h-[2px] w-full bg-slate-200 my-auto" />
				</div>

				<div className="mt-5 text-center text-[#0e194d]">
					{`Don't have an account? `}
					<Link href="/signup" className="text-blue-500 font-bold">
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ResetPasswordForm;
