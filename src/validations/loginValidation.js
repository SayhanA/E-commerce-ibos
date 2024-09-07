import * as Yup from 'yup';

export const getValidationSchema = () => {
	return Yup.object({
		username: Yup.string()
			.min(3, 'Username must be at least 3 characters')
			.required('Username is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
	});
};

export const initialValues = { username: '', password: '' };
