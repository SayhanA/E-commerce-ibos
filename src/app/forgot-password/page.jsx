'use client';

import SimpleSlider from '@/components/molecules/SimpleSlider';
import ForgetPasswordForm from '@/components/organisms/ForgetPasswordForm';

const Page = () => {
	return (
		<>
			<div className="w-full min-h-96 flex">
				<div className="min-w-[50%] bg-white min-h-36">
					<SimpleSlider className="col-span-1 min-h-screen max-h-screen max-md:hidden px-4" />
				</div>

				<div className="min-w-[50%] bg-white min-h-36">
					<ForgetPasswordForm className="col-span-1 max-md:col-span-2 px-4" />
				</div>
			</div>
		</>
	);
};

export default Page;
