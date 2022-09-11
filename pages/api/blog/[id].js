import { blogs } from "../../../constants";

export default function handler(req, res) {
	const { id } = req.params;
	switch (req.method) {
		case "GET":
			res.json(blogs.filter((blog) => blog.id === id)[0]);
	}
}
