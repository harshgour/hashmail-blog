const GradientBorder = ({ className, light }) => (
	<div className={`grid grid-cols-2 my-14 ${className}`}>
		<hr
			className={`bg-gradient-to-r to-darkRed h-1 border-none ${
				light ? "from-white" : "from-primary"
			}`}
		/>
		<hr
			className={`bg-gradient-to-l to-darkRed h-1 border-none ${
				light ? "from-white" : "from-primary"
			}`}
		/>
	</div>
);

export default GradientBorder;
