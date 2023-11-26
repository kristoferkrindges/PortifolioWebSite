import react from "react";
import Project from "./Project";
import { Container, Section, H5, H2 } from "./style";
import Precin from "../../../assets/images/precin.png";
import EasyClass from "../../../assets/images/home.png";
import Trampo from "../../../assets/images/trampof.png";
export default function Projects() {
	return (
		<Section>
			<H5>My Recent projects</H5>
			<H2>Projects</H2>
			<Container>
				<Project
					key={1}
					name={"Precin"}
					description={
						"Project developed in a social network format to search for the lowest prices in different markets and facilitate the user's economy, in which the user can consult and create posts with the products of his choice."
					}
					image={Precin}
					technologies={"fb"}
					git={"https://github.com/kristoferkrindges/Precin"}
					link={"precinauthentication.web.app/"}
				/>
				<Project
					key={2}
					name={"SambaBurguer"}
					description={
						"The project was developed in a corporate website format in which an ADMIN user will carry out the registrations, updates, deletions and partial views of the data of the respective company SambaBurguer."
					}
					image={
						"https://camo.githubusercontent.com/e674db7d1cd2afc20451d08a595274c8e56c38fd51a9dc68326f1252459bd727/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313033383838393436373638393330343133372f313034393036383031343339313238333833342f686f6d652e706e67"
					}
					technologies={"c#"}
					git={"https://github.com/kristoferkrindges/SambaBurguerClient"}
					link={""}
				/>
				<Project
					key={3}
					name={"EasyClass"}
					description={
						"Project developed to find private lessons outside the academic field, along with good communication between the student and the chosen teacher and reliable evaluations"
					}
					image={EasyClass}
					technologies={"fb"}
					git={"https://github.com/kristoferkrindges/EasyClass"}
					link={""}
				/>
				<Project
					key={4}
					name={"TrampoFácil"}
					description={
						"This project was created with the aim of facilitating the search for jobs, in which the user will have the opportunity to advertise a vacancy or search."
					}
					image={Trampo}
					technologies={"node"}
					git={"https://github.com/kristoferkrindges/TrampoFacil"}
					link={"https://trampo-facil-front.vercel.app/"}
				/>
				{/* <Project
					key={5}
					name={"Notes"}
					description={""}
					image={""}
					technologies={"node"}
					git={""}
					link={""}
				/>
				<Project
					key={6}
					name={"Class"}
					description={""}
					image={""}
					technologies={"c#"}
					git={""}
					link={""}
				/> */}
			</Container>
		</Section>
	);
}
