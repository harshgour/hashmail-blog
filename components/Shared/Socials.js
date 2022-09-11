import Image from "next/image";
import Link from "next/link";
import React from "react";
import { socials } from "../../constants";

const Socials = () => (
	<div className='icons grid grid-cols-3 gap-4 place-items-center sm:gap-6 mt-4 mb-8 lg:my-0 lg:ml-6'>
		{socials.map((socialIcon) => (
			<Link href={`${socialIcon.action}`} key={socialIcon.id}>
				<span className='w-7 h-7 relative cursor-pointer'>
					<Image src={socialIcon.image} alt={socialIcon.name} layout='fill' />
				</span>
			</Link>
		))}
	</div>
);

export default Socials;
