import Head from "next/head";
import { Blogs, Career, FeaturedBlogs, Hero } from "../components";
import Layout from "../components/Layout";
import { getAllBlogs, getFeaturedBlogs } from "../utils";

/* //for grid cursor
	import NotSoInterestingGrid from "../components/NotSoInterestingGrid";
	import useCursorCoords from "../Hooks/useCursorCoords"; 
*/

const siteTitle = "Hashmail blog";

export async function getStaticProps() {
	// getting all blogs and featured blogs, can be done by API or statically too {build time}
	const featuredBlogs = getFeaturedBlogs();
	const allBlogs = getAllBlogs();

	// passing blogs as props on build time.
	return { props: { featuredBlogs, allBlogs } };
}

export default function Home({ featuredBlogs, allBlogs }) {
	// const [coords] = useCursorCoords({ offset: -250 }); // for cursor coords
	return (
		<Layout home>
			<Head>
				{/* Title based on pages */}
				<title>{siteTitle}</title>
			</Head>
			<div className='z-10'>
				<Hero />
				<FeaturedBlogs blogs={featuredBlogs} />
				<Blogs title='all blogs' blogs={allBlogs} />
				<Career />
			</div>
			{/* for grid cursor | Not required */}
			{/* <NotSoInterestingGrid coords={coords} /> */}
		</Layout>
	);
}
