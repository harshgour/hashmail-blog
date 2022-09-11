import Head from "next/head";
import { Header, Footer } from "..";

import styles from "./Layout.module.scss";

export const name = "Hashmail";
export const siteTitle = "Hashmail Blog";

export default function Layout({ children, className }) {
	return (
		<div className={`font-poppins ${styles.mainContainer} ${className}`}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn how to build a personal website using Next.js'
				/>
				<meta
					property='og:image'
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle,
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<Header />
			<main className='layout-container p-6 sm:py-0 sm:px-8 md:px-12'>
				{children}
			</main>
			<Footer />
		</div>
	);
}
