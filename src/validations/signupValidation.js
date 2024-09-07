import * as Yup from 'yup';

export const getValidationSchema = () => {
	return Yup.object({
		username: Yup.string()
			.min(3, 'Username must be at least 3 characters')
			.required('Username is required'),
		email: Yup.string().email('Invalid email address').required('Email is required'),
		bin: Yup.string().required('Business Id Number is required'),
		phone: Yup.string()
			.matches(/^[0-9]{11,15}$/, 'Invalid mobile number')
			.required('Mobile is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
	});
};

export const initialValues = { username: '', email: '', bin: '', phone: '', password: '' };
