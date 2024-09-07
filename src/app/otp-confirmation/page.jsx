'use client';

import { Suspense } from 'react';

import Loading from '@/components/atoms/Loading';
import SimpleSlider from '@/components/molecules/SimpleSlider';
import OtpForm from '@/components/organisms/OtpForm';

const Page = () => {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<div className="w-full min-h-96 flex">
					<div className="min-w-[50%] bg-white min-h-36">
						<SimpleSlider className="col-span-1 min-h-screen max-h-screen max-md:hidden px-4" />
					</div>

					<div className="min-w-[50%] bg-white min-h-36">
						<OtpForm
							className="col-span-1 max-md:col-span-2 px-4 mx-auto mb-[24px] w-full max-w-[433px] bg-white h-screen flex flex-col justify-center"
						/>
					</div>
				</div>
			</Suspense>
		</>
	);
};

export default Page;
