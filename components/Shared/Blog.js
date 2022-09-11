import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fallbackImage, fallbackImageSmall } from "../../constants";

const Blog = ({ blog, lastBlog = false, sectionType }) => {
	return (
		<div
			className={`${
				sectionType === "featured" && lastBlog ? "sm:col-span-2" : ""
			}`}>
			<Link href={`/blogs/${blog.id}`}>
				<section className='cursor-pointer'>
					<Image
						src={
							blog.image ||
							(sectionType === "featured" && lastBlog
								? fallbackImage
								: fallbackImageSmall)
						}
						alt={blog.title}
						width={656}
						height={318}
						layout='responsive'
					/>
					<h2
						className={`${
							sectionType === "featured" && lastBlog
								? "sm:mt-4 sm:mb-8 lg:mt-8 lg:mb-10"
								: "sm:mt-4 sm:mb-8"
						} my-4 text-lg sm:text-xl lg:text-3xl leading-snug font-medium lowercase line-clamp-2`}>
						{blog.title}
					</h2>
					<span className='text-primary px-6 py-2 sm:px-8 sm:py-3 lg:px-10 text-sm sm:text-lg lg:text-xl font-medium border-2 border-primary hover:text-white transition-all cursor-pointer button-primary'>
						{blog.primaryText}
					</span>
				</section>
			</Link>
		</div>
	);
};

export default Blog;
