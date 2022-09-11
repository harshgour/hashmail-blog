import Link from "next/link";
import { footerOptions } from "../../constants";

const FooterMenu = () => (
	<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 sm:mb-20 lg:mb-32'>
		{footerOptions.map((tab) => (
			<div key={tab.id}>
				<h5 className='font-semibold text-md sm:text-lg my-4 sm:mb-6'>
					{tab.title}
				</h5>
				<ul className='list-none'>
					{tab?.options.map((option) => (
						<li
							className='font-extralight my-2 sm:my-4 text-md sm:text-lg'
							key={option.title}>
							<Link href={option.ctaAction}>
								<span className='text-white cursor-pointer hover:text-darkRed'>
									{option.title}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		))}
	</div>
);

export default FooterMenu;
