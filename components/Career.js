import Link from "next/link";
import { MdOutlineCallReceived } from "react-icons/md";
import { careerTabs } from "../constants";

const Career = () => {
	return (
		<section className='mt-40 sm:mt-30 lg:mt-80'>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-14'>
				{careerTabs.map((tab) => (
					<div key={tab.title}>
						<h1 className='text-2xl lg:text-3xl font-semibold'>
							<span className='text-gradient-red'>{tab.title}</span>
						</h1>
						<p className='text-lg lg:text-xl mt-2 mb-3 lg:line-clamp-1'>
							{tab.description}
						</p>
						<Link href={tab.ctaAction}>
							<span className='text-xl w-max text-link text-opacity-80 hover:font-medium flex items-center cursor-pointer hover:text-opacity-100'>
								{tab.ctaText}
								<span className='rotate-180 ml-1'>
									<MdOutlineCallReceived />
								</span>
							</span>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default Career;
