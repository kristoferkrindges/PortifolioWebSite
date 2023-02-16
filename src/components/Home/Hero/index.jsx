import React, { useContext } from "react";
import {
	Container,
	MainText,
	Title,
	Tastes,
	About,
	Button,
	MainImg,
	Social,
	Socials,
	IoGithub,
	Control,
	List,
	IoMail,
	IoInstagram,
	Black,
	Orange,
	Blue,
	Red,
	White,
	IoLinkedin,
} from "./style";
import profile from "../../../assets/images/kris_removido.png";
import { ThemeContext } from "../../../App";
export default function Hero() {
	const { setTheme, theme, coloral, setColoral } = useContext(ThemeContext);
	return (
		<Container>
			<MainText>
				<Title>Hello there...</Title>
				<Tastes>I'm Kristofer!</Tastes>
				<About>
					I love programming, architecting and building user-friendly and
					technological websites. I hope you like my portfolio website
				</About>
				<Button>Download CV</Button>
			</MainText>
			<MainImg>
				<img src={profile} alt="kristofer"></img>
			</MainImg>
			<Control>
				<List>
					{theme === "dark" ? (
						<White onClick={() => setColoral((p) => "White")} />
					) : (
						<Black onClick={() => setColoral((p) => "Black")} />
					)}
				</List>
				<List>
					<Orange onClick={() => setColoral((p) => "Orange")} />
				</List>
				<List>
					<Blue onClick={() => setColoral((p) => "Blue")} />
				</List>
				<List>
					<Red onClick={() => setColoral((p) => "Red")} />
				</List>
			</Control>
			<Social>
				<Socials>
					<IoGithub to="" />
				</Socials>
				<Socials>
					<IoLinkedin />
				</Socials>
				<Socials>
					<IoMail />
				</Socials>
				<Socials>
					<IoInstagram />
				</Socials>
			</Social>
		</Container>
	);
}
