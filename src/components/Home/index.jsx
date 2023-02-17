import React from "react";
import Menu from "../Shared/Menu";
import About from "./About";
import Header from "./Header";
import Hero from "./Hero";
export default function Home() {
	return (
		<>
			<Menu type="não" search="home" />
			{/* <Header></Header> */}
			<Hero></Hero>
			<About></About>
		</>
	);
}
