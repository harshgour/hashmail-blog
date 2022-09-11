import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "../../constants";
import Socials from "../Shared/Socials";

// Header Menu for mobile
const HeaderMobile = ({ activeTab }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className='lg:hidden flex justify-end'>
			<div
				className='w-[28px] h-[28px] relative'
				onClick={() => setToggle(!toggle)}>
				<Image
					priority
					src='/assets/menu.svg'
					alt='menu-button'
					layout='fill'
				/>
			</div>

			<div
				className={`${
					!toggle ? "translate-x-full" : "translate-x-0"
				} transition-all px-6 py-10 sm:px-12 sm:py-16 flex flex-col justify-between fixed top-0 left-0 z-10 bg-white h-screen w-screen shadow-lg`}>
				<section>
					<div className='lg:hidden flex justify-end mb-16'>
						<div
							className='w-[28px] h-[28px] relative'
							onClick={() => setToggle((prev) => !prev)}>
							<Image
								priority
								src='/assets/close.svg'
								alt='menu-button'
								layout='fill'
							/>
						</div>
					</div>
					<ul className='list-none flex flex-col items-end lg:hidden gap-y-6 sm:gap-y-12'>
						{navLinks.map((nav, idx) => {
							return (
								<li className='cursor-pointer' key={nav.id}>
									<Link href={`/${nav.id}`}>
										<span
											className={`lowercase text-3xl sm:text-5xl ${
												activeTab === nav.id
													? "font-semibold text-black pb-1 border-b-4 border-darkRed"
													: "font-light text-primary"
											}`}>
											{nav.title}
										</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</section>
				<section className='self-center w-1/2'>
					<Socials />
				</section>
			</div>
		</div>
	);
};

export default HeaderMobile;
