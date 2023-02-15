import React, { useContext, useRef, useState, useEffect } from "react";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavBtn,
	NavBtnLink,
	NavLink,
	IoCart,
} from "./style";
import { FaBars } from "react-icons/fa";
import { ThemeContext } from "../../../../App";

export default function Navbar({ toggle, resp }) {
	const { setTheme, theme } = useContext(ThemeContext);
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						{/* <img className="logo" src={logo}></img> */}
						<h1>Kristofer</h1>
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars></FaBars>
					</MobileIcon>
					<NavMenu>
						<NavLink>About</NavLink>
						<NavLink>Service</NavLink>
						<NavLink>Projects</NavLink>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/login">Developer</NavBtnLink>
						<IoCart
							isActive={theme === "dark"}
							onClick={() =>
								setTheme((p) => (p === "light" ? "dark" : "light"))
							}
						/>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
}
