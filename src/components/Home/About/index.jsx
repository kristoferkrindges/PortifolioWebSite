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
	Rating,
	Buttons,
	HireMe,
	StarIcon1,
	StarIcon2,
	IoTrash,
	IoColorWand,
	Icons,
	IoBasket,
	Email,
	About,
	My,
	AbMe,
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
							<Logo src={imageUrl} />
						</Image>
						<Icons>
							<Link to={`/employees/update/${id}`}>
								<IoColorWand />
							</Link>
							<IoTrash onClick={handle} />
							<IoBasket
								onClick={() => {
									setOpenModal(true);
								}}
							/>
						</Icons>
						<NameSubject>
							<Name>{name}</Name>
							<Subject>
								<SubjectUl>
									<Li>{gender}</Li>
								</SubjectUl>
							</Subject>
							<Email>{email}</Email>
						</NameSubject>
						{/* eventClick */}
						<Buttons onClick={"eventClick"}>
							<HireMe>{func}</HireMe>
						</Buttons>
					</CardContent>
				</My>
				<AbMe></AbMe>
			</Container>
		</Section>
	);
}
