import { blogs, featuredBlogs } from "../../constants";

export default function handler(req, res) {
	console.log(req.method);
	switch (req.method) {
		case "GET":
			res.json(blogs.filter((blog) => featuredBlogs.includes(blog.id)));
	}
}
