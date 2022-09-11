import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import Layout from "../components/Layout";

const Custom404 = () => {
	const router = useRouter();
	const pageRouteName = router.asPath.replace("/", "").split("_").join(" ");
	return (
		<Layout className='bg-none'>
			<Head>
				<title> {pageRouteName} | Not Found</title>
			</Head>
			<div className='text-center mt-20 mb-12 sm:mt-32 sm:mb-40 text-lg md:text-2xl'>
				<div className='mb-14'>
					Not found <span className='mx-1 sm:mx-2'>|</span> This page is not
					been made yet!!
				</div>
				<Link href='/'>
					<span className='text-primary flex items-center w-max mx-auto text-base px-3 sm:px-6 py-2 sm:py-3 border border-primary button-primary hover:text-white cursor-pointer'>
						Go back to home
						<i className='ml-3'>
							<MdArrowRightAlt />
						</i>
					</span>
				</Link>
			</div>
		</Layout>
	);
};

export default Custom404;
