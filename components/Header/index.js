// react imports
import { useState } from "react";

// next imports

// component imports
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
	const [active, setActive] = useState("blog"); // setting active for menu item

	return (
		<header className='layout-container flex-row-between px-6 py-8 sm:px-8 md:px-12 sm:py-16 font-poppins'>
			<HeaderDesktop activeTab={active} />
			<HeaderMobile activeTab={active} />
		</header>
	);
};

export default Header;
