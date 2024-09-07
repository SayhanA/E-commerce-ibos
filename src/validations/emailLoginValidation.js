import * as Yup from 'yup';

export const getValidationSchema = (loginType) => {
	return Yup.object({
		email:
			loginType === 'email'
				? Yup.string().email('Invalid email address').required('Email is required')
				: Yup.string().nullable(),
		mobile:
			loginType === 'mobile'
				? Yup.string()
						.matches(/^[0-9]{11,15}$/, 'Invalid mobile number')
						.required('Mobile is required')
				: Yup.string().nullable(),
	});
};

export const initialValues = { email: '', mobile: '' };
