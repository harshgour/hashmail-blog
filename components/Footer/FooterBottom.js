import Image from "next/image";
import Link from "next/link";
import React from "react";
import { socials } from "../../constants";
import Socials from "../Shared/Socials";

const FooterBottom = () => (
	<div className='text-center sm:text-left flex flex-col lg:flex-row justify-between items-center text-md sm:text-lg font-extralight'>
		<div className='flex flex-col lg:flex-row justify-between items-center lg:order-2'>
			<span>stay connected with us</span>
			<Socials />
		</div>
		<span>
			copyright &#169; {new Date().getFullYear()}{" "}
			<Link href='https://hashlabs.dev'>
				<span className='text-white hover:text-link cursor-pointer transition-all'>
					hashlabs inc.
				</span>
			</Link>
		</span>
	</div>
);

export default FooterBottom;
