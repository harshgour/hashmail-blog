import React from "react";
import Blog from "./Shared/Blog";

const Blogs = ({ title, maxCount, blogs }) => {
	return (
		<section className='mt-20'>
			<h3 className='text-3xl font-semibold mb-8'>
				<span className='text-gradient-red border-b-4 md:border-none border-primary relative md:after:static after:absolute after:w-2/3 after:h-[4px] after:bottom-[-8px] after:right-0 after:border-b-8 after:border-white'>
					{title}
				</span>
			</h3>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
				{blogs.slice(0, maxCount || blogs.length).map((blog) => {
					return <Blog blog={blog} sectionType={title} key={blog.id} />;
				})}
			</div>
		</section>
	);
};

export default Blogs;
