import { blogs, featuredBlogs } from "../constants";

export const getBlogPaths = () => {
	const paths = blogs.map((blog) => {
		return {
			params: {
				id: blog.id.toString(),
			},
		};
	});
	console.log(paths);
	return paths;
};

export const getAllBlogs = () => {
	return blogs;
};

export const getFeaturedBlogs = () => {
	const featured = blogs.filter((blog) => featuredBlogs.includes(blog.id));
	return featured;
};

export const getBlogData = (id) => {
	const blog = blogs.filter((blog) => blog.id === Number(id));
	return blog[0];
};
