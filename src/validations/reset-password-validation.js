import * as Yup from 'yup';

export const resetPasswordValidationSchema = () => {
	return Yup.object({
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
		confirm_password: Yup.string()
			.min(6, 'Confirm password must be at least 6 characters')
			.required('Confirm password is required'),
	});
};

export const initialValues = { password: '', confirm_password: '' };
