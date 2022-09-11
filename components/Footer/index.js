import Image from "next/image";
import Link from "next/link";
import { name } from "../Layout";
import GradientBorder from "../Shared/GradientBorder";
import FooterBottom from "./FooterBottom";
import FooterMenu from "./FooterMenu";

const Footer = () => (
	<footer className='bg-primary mt-24 text-white'>
		<div className='layout-container pt-14 pb-8 px-6 sm:px-10'>
			<div className='w-[180px] h-[30px] sm:w-[240px] sm:h-[36px] relative'>
				<Image
					priority
					src='/assets/hashmail-logo-dark.svg'
					alt={name}
					layout='fill'
				/>
			</div>
			<GradientBorder />
			<FooterMenu />
			<GradientBorder className='sm:hidden' />
			<FooterBottom />
		</div>
	</footer>
);

export default Footer;
