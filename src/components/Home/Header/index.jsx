import React from "react";
import {
	Container,
	Section,
	Circle,
	MainText,
	Title,
	Tastes,
	About,
	Button,
	MainImg,
	Image,
	RightBG,
	Control,
	Social,
	IoCart,
} from "./style";
import profile from "../../../assets/images/kris.jpeg";
export default function Header() {
	return (
		<Container>
			<Section>
				<MainText>
					<Control>
						<Title>Hello there</Title>
						<Tastes>I'm Kristofer!</Tastes>
						<About>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
							et, laboriosam laborum eius rem cupiditate eos commodi rerum ut
							nobis accusantium.{" "}
						</About>
						<Button>Escolha agora</Button>
					</Control>
				</MainText>
				<MainImg>
					<Image>
						<img src={profile} alt="kristofer"></img>
					</Image>
					{/* <RightBG /> */}
					<Social>
						<IoCart />
						<IoCart />
						<IoCart />
					</Social>
				</MainImg>
			</Section>
		</Container>
	);
}
