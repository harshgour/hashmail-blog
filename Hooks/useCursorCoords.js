import { useEffect, useState } from "react";

const useCursorCoords = ({ offset }) => {
	const [coords, setCoords] = useState({ x: 0, y: 0 });

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			setCoords({ x: e.clientX + offset, y: e.clientY + offset });
		});
		() => {
			window.removeEventListener("mousemove");
		};
	}, []);

	return [coords];
};

export default useCursorCoords;
