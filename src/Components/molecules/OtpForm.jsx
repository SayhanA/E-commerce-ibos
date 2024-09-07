import axiosInstance from '@/config/axiosInstance';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

const OtpForm = ({ id = '', className = '', email = 'asif@gmail.com', page }) => {
	const formRef = useRef();
	const [otpValues, setOtpValues] = useState(['']);

	const router = useRouter();
	const searchParams = useSearchParams();
	const phone = searchParams.get('phone');

	const handleInputChange = (index, e) => {
		const input = e.target;

		/* copy past starts */
		if (input.value.length > 1) {
			const pastedValues = input.value.split('');
			setOtpValues(pastedValues);

			input.value = pastedValues[0];
			input.disabled = true;
			input.nextElementSibling.value = pastedValues[1];
			input.nextElementSibling.disabled = true;
			input.nextElementSibling.nextElementSibling.value = pastedValues[2];
			input.nextElementSibling.nextElementSibling.nextElementSibling.value = pastedValues[3];
			input.nextElementSibling.nextElementSibling.nextElementSibling.disabled = false;
			input.nextElementSibling.nextElementSibling.nextElementSibling.focus();
			return;
		}

		/* copy past ends */

		if (input?.value?.length >= 1) {
			const nextInput = input.nextElementSibling;
			if (nextInput) {
				nextInput.disabled = false;
				nextInput.focus();
			}
			if (input.value.length === 1) {
				input.blur();
			}
		}

		const { value } = e.target;
		if (otpValues[0] === '') {
			setOtpValues([value]);
		} else {
			const newOtpValues = [...otpValues];
			newOtpValues[index - 1] = value;
			setOtpValues(newOtpValues);
		}
	};

	const handleBackspace = (index, e) => {
		const input = e.target;
		if (input?.value?.length === 0) {
			const prevInput = input.previousElementSibling;
			if (prevInput) {
				prevInput.focus();
				input.disabled = true;
			}
		}

		if (input.previousElementSibling) {
			if (parseInt(otpValues[3])) {
				const removeLastValue = [...otpValues.pop()];
				setOtpValues([...otpValues, (otpValues[otpValues - 1] = '')]);
				return;
			}
			input.value = '';

			input.previousElementSibling.disabled = false;
			input.disabled = true;
			input.previousElementSibling.focus();
		}

		const { value } = e.target;
	};

	const handleSubmit = async () => {
		const otp = otpValues.join('');
		const payload = { phone, otp };
		router.push('/reset-password');

		// try {
		// 	const response = await axiosInstance.post('/auth/registration-verification/', payload);

		// 	if (response?.status === 200) {
		// 		toast.success(response?.data?.message);
		// 		router.push('/');
		// 	}
		// } catch (err) {
		// 	toast.error(err?.response?.data?.message);
		// }
	};

	return (
		<div className={` ${className}`}>
			<div>
				<div className="text-[#0e194d] text-2xl font-bold text-center">Verify your code</div>
				<div className="text-[#0e194d] text-center my-5">
					An email with a verification code has been sent to you. Please check your inbox.
				</div>
			</div>

			<form ref={formRef}>
				<div className="my-5 flex w-[100%] justify-between">
					{[1, 2, 3, 4]?.map((index) => (
						<input
							key={index}
							id={`OtpInput${index}`}
							type="text"
							className="h-10 w-20 text-center appearance-none rounded-full border border-[#EFF1F3] placeholder:font-extrabold placeholder:text-gray-400 focus:border-blue-200 focus:outline-none disabled:cursor-not-allowed"
							placeholder="__"
							onChange={(e) => handleInputChange(index, e)}
							onKeyDown={(e) => e.key === 'Backspace' && handleBackspace(index, e)}
							disabled={index > 1}
						/>
					))}
				</div>

				<button
					type="button"
					className={`py-2.5 my-6 text-center bg-[#000] rounded-[6px] w-full text-white ${
						(otpValues?.length !== 4 || otpValues[3] === '') && 'cursor-not-allowed bg-gray-300'
					}`}
					disabled={otpValues?.length !== 4 || otpValues[3] === ''}
					onClick={() => handleSubmit()}
				>
					Send Verification Code
				</button>
			</form>
		</div>
	);
};

export default OtpForm;
