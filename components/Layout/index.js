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
				<meta name='description' content='Hashmail Blog' />
				<meta property='og:image' content={`/assets/hashmail-logo.svg`} />
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
