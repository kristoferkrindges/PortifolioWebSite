import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	CardContent,
	Image,
	Logo,
	NameSubject,
	Name,
	Subject,
	Rating,
	Buttons,
	HireMe,
	IoGithub,
	Icons,
	My,
	IoGithub2,
	LogoReact,
	LogoFirebase,
	LogoNodejs,
	Csharp,
} from "./style";

export default function Project(props) {
	return (
		<My>
			<CardContent>
				<Image>
					<Logo src={props.image} />
				</Image>
				<Icons>
					<IoGithub />
				</Icons>
				<hr className="one"></hr>
				<hr className="two"></hr>
				<hr className="three"></hr>
				<NameSubject>
					<Link to={props.link}>
						<Name>{props.name}</Name>
					</Link>
					<Subject>{props.description}</Subject>
				</NameSubject>
				<Rating>
					<LogoReact />
					{props.technologies == "fb" ? (
						<LogoFirebase />
					) : props.technologies == "node" ? (
						<LogoNodejs />
					) : props.technologies == "c#" ? (
						<Csharp />
					) : (
						<LogoReact />
					)}
				</Rating>
				<Link to="">
					<Buttons>
						<HireMe>
							<IoGithub2 />
							View More
						</HireMe>
					</Buttons>
				</Link>
			</CardContent>
		</My>
	);
}
