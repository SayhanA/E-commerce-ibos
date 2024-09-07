import * as Yup from 'yup';

export const forgotPasswordValidationSchema = () => {
	return Yup.object({
		email: Yup.string()
			.min(3, 'Email must be at least 3 characters')
			.required('Email is required'),
	});
};

export const initialValues = { email: '' };
