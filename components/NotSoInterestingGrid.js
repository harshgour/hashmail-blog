import React from "react";

const NotSoInterestingGrid = ({ coords }) => (
	<div
		className='fixed hidden lg:grid -z-10 w-max h-max grid-cols-5 grid-rows-5 bg-white bg-opacity-50'
		style={{
			top: coords.y,
			left: coords.x,
		}}>
		<div className='overlay absolute w-full h-full top-0 left-0 z-0 bg-white bg-opacity-50'></div>
		{Array(5)
			.fill([])
			.map((item, colIndex) =>
				Array(5)
					.fill([])
					.map((item, rowIndex) => (
						<div
							key={`${rowIndex}_${colIndex}`}
							className={`w-[110px] h-[110px] border border-darkRed border-opacity-75 border-collapse cell
            ${rowIndex === 0 ? "border-l-0 border-opacity-30" : ""}
            ${rowIndex === 1 ? "border-lightRed border-opacity-50" : ""}
            ${rowIndex === 2 ? "border-lightRed border-opacity-60" : ""}
            ${rowIndex === 3 ? "border-lightRed border-opacity-50" : ""}
            ${rowIndex === 4 ? "border-r-0 border-opacity-30" : ""}
            ${
							rowIndex === 2 && colIndex === 2
								? "border-darkRed border-opacity-75"
								: ""
						}
            ${colIndex === 0 ? "border-t-0 border-opacity-30" : ""}
            ${colIndex === 1 ? "border-lightRed border-opacity-50" : ""}
            ${colIndex === 2 ? "border-lightRed border-opacity-60" : ""}
            ${colIndex === 3 ? "border-lightRed border-opacity-50" : ""} 
            ${colIndex === 4 ? "border-b-0 border-opacity-30" : ""}`}></div>
					)),
			)}
	</div>
);

export default NotSoInterestingGrid;
