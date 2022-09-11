// react imports
import React from "react";

// next imports
import Image from "next/image";
import Link from "next/link";

// component/constants import
import { name } from "../Layout";
import { navLinks } from "../../constants";

// header for bigger screen sizes
const HeaderDesktop = ({ activeTab }) => (
	<>
		<Link href='/'>
			<div className='w-[160px] sm:w-[240px] h-[24px] sm:h-[36px] relative'>
				<Image
					priority
					src='/assets/hashmail-logo.svg'
					alt={name}
					layout='fill'
					className='cursor-pointer'
				/>
			</div>
		</Link>

		<ul className='list-none hidden lg:flex gap-x-10'>
			{navLinks.map((nav) => {
				return (
					<li className='cursor-pointer' key={nav.id}>
						<Link href={`/${nav.id}`}>
							<span
								className={`lowercase text-lg ${
									activeTab === nav.id
										? "font-semibold text-black"
										: "font-light text-primary"
								}`}>
								{nav.title}
							</span>
						</Link>
					</li>
				);
			})}
		</ul>
	</>
);

export default HeaderDesktop;
