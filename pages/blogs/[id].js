import Head from "next/head";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
import { Blogs, Career } from "../../components";
import Layout from "../../components/Layout";
import GradientBorder from "../../components/Shared/GradientBorder";
import { fallbackImage } from "../../constants";
import { getAllBlogs, getBlogData, getBlogPaths } from "../../utils";

export async function getStaticProps({ params }) {
	const blog = getBlogData(params.id);
	const otherBlogs = getAllBlogs().filter(
		(blog) => blog.id !== Number(params.id),
	);
	return {
		props: { blog, otherBlogs },
	};
}

export async function getStaticPaths() {
	const data = getBlogPaths();
	console.log(data);
	return {
		paths: data,
		fallback: false,
	};
}

const Blog = ({ blog, otherBlogs }) => {
	return (
		<Layout>
			<Head>
				<title>Blog | {blog.title}</title>
			</Head>
			<div className='sm:px-4 flex flex-col justify-start'>
				<Image
					src={blog.image || fallbackImage}
					alt={blog.title}
					width={656}
					height={318}
					layout='responsive'
				/>
				<h2 className='text-xl sm:text-3xl lg:text-4xl font-semibold my-6 text-ellipsis w-full'>
					{blog.title}
				</h2>
				<p className='self-end mb-10'>~ {blog.author}</p>
				<p className='text-md sm:text-lg text-justify'>{blog.description}</p>
				<div className='hidden sm:block'>
					<GradientBorder light={true} className='mt-24' />
					<Blogs title='other blogs' maxCount={4} blogs={otherBlogs} />
				</div>
			</div>
		</Layout>
	);
};

export default Blog;
