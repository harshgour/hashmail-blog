import Blog from "./Shared/Blog";

const name = "featured";

const FeaturedBlogs = ({ blogs }) => {
	return (
		<section className='mt-8 sm:mt-14'>
			<h3 className='text-2xl sm:text-3xl text-gradient-red font-semibold mb-8'>
				<span className='text-gradient-red border-b-4 md:border-none border-primary relative md:after:static after:absolute after:w-2/3 after:h-[4px] after:bottom-[-8px] after:right-0 after:border-b-8 after:border-white'>
					{name}
				</span>
			</h3>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16'>
				{blogs.map((blog, index) => {
					return (
						<Blog
							blog={blog}
							lastBlog={index === 2}
							sectionType={name}
							key={blog.id}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default FeaturedBlogs;
