import React from "react";
import {
	Container,
	Section,
	CardContent,
	Image,
	Logo,
	NameSubject,
	Name,
	Subject,
	SubjectUl,
	Li,
	Buttons,
	HireMe,
	IoGithub,
	Icons,
	Email,
	My,
	AbMe,
	H5,
	H2,
	Cards,
	Card,
	Butt,
	Time,
	Text,
	CardSelect,
	EarningsText,
	Chart,
	Content,
	IoLinkedin,
	IoMail,
	IoInstagram,
	IoAlbums,
	IoBook,
	IoMedal,
} from "./style";
import profile from "../../../assets/images/kris.jpeg";
export default function About() {
	return (
		<Section>
			<H5>Get To Know</H5>
			<H2>About Me</H2>
			<Container>
				<My>
					<CardContent>
						<Image>
							<Logo src={profile} />
						</Image>
						<Icons>
							<IoGithub />
							<IoLinkedin />
							<IoMail />
							<IoInstagram />
						</Icons>
						<NameSubject>
							<Name>{"Kristofer Krindges"}</Name>
							<Subject>
								<SubjectUl>
									<Li>kristoferkrindges@gmail.com</Li>
								</SubjectUl>
							</Subject>
							{/* <Email>{"email"}</Email> */}
						</NameSubject>
						{/* <Rating>
						{star.map((id, index) => (
							<StarIcon1 key={index}></StarIcon1>
						))}
						{star2.map((id, index) => (
							<StarIcon2 key={index}></StarIcon2>
						))}
					</Rating> */}
						<Buttons onClick={"eventClick"}>
							<HireMe>Download CV</HireMe>
						</Buttons>
					</CardContent>
				</My>
				<AbMe>
					<Card>
						<Cards>
							<CardSelect>
								<Chart>
									<IoAlbums />
								</Chart>
								<EarningsText>Projects</EarningsText>
								<Time>6+ Completed</Time>
							</CardSelect>
						</Cards>
						<Cards>
							<CardSelect>
								<Chart>
									<IoBook />
								</Chart>
								<EarningsText>Degrees</EarningsText>
								<Time>5+ Finalized</Time>
							</CardSelect>
						</Cards>
						<Cards>
							<CardSelect>
								<Chart>
									<IoMedal />
								</Chart>
								<EarningsText>Experience</EarningsText>
								<Time>0+ Years Working</Time>
							</CardSelect>
						</Cards>
					</Card>
					<Content>
						<Text>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. ducimus
							non est quae accusantium maxime ratione voluptate, laboriosam
							repellat dolores cumque fugit libero molestiae voluptatibus natus
							itaque quod ea.
						</Text>
						<Butt>Let's Talk</Butt>
					</Content>
				</AbMe>
			</Container>
		</Section>
	);
}
