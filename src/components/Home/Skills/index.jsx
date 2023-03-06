import react from "react";
import { Container, Section, H5, H2 } from "./style";
import Carrousel from "react-elastic-carousel";
import Card from "./Card";
import Lhtml from "../../../assets/Icons/html.png";
export default function Skills() {
	const breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 768, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 3 },
	];
	const cards = [
		{
			name: "Html",
			dif: "Experienced",
			stars: 5,
			photo: "https://cdn-icons-png.flaticon.com/128/3291/3291670.png",
			href: "https://www.flaticon.com/br/icones-gratis/html",
			title: "html ícones",
			leg: "Html ícones criados por Freepik - Flaticon",
		},
		{
			name: "Css",
			dif: "Intermediate",
			stars: 4,
			photo: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
			href: "https://www.flaticon.com/br/icones-gratis/css",
			title: "javascript ícones",
			leg: "Css ícones criados por Freepik - Flaticon",
		},
		{
			name: "Javascript",
			dif: "Intermediate",
			stars: 4,
			photo: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
			href: "https://www.flaticon.com/br/icones-gratis/javascript",
			title: "javascript ícones",
			leg: "Js ícones criados por Freepik - Flaticon",
		},
		{
			name: "React",
			dif: "Intermediate",
			stars: 4,
			photo: "https://cdn-icons-png.flaticon.com/128/1260/1260667.png",
			href: "https://www.flaticon.com/br/icones-gratis/react",
			title: "react ícones",
			leg: "React ícones criados por Freepik - Flaticon",
		},
		{
			name: "NodeJS",
			dif: "Intermediate",
			stars: 4,
			photo: "https://cdn-icons-png.flaticon.com/128/5968/5968322.png",
			href: "https://www.flaticon.com/br/icones-gratis/node",
			title: "Node ícones",
			leg: "Node js icons created by Freepik - Flaticon",
		},
		{
			name: "C#",
			dif: "Basic",
			stars: 3,
			photo: "https://cdn-icons-png.flaticon.com/128/6132/6132221.png",
			href: "https://www.flaticon.com/br/icones-gratis/c#",
			title: "C# ícones",
			leg: "C# js icons created by Freepik - Flaticon",
		},
		{
			name: "Python",
			dif: "Intermediate",
			stars: 4,
			photo: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
			href: "https://www.flaticon.com/br/icones-gratis/python",
			title: "Python ícones",
			leg: "Python js icons created by Freepik - Flaticon",
		},
		{
			name: "PHP",
			dif: "Basic",
			stars: 3,
			photo: "https://cdn-icons-png.flaticon.com/128/919/919830.png",
			href: "https://www.flaticon.com/br/icones-gratis/php",
			title: "Php ícones",
			leg: "Php js icons created by Freepik - Flaticon",
		},
		{
			name: "PostgreSQL",
			dif: "Intermediate",
			stars: 4,
			photo: "https://cdn-icons-png.flaticon.com/128/5968/5968342.png",
			href: "https://www.flaticon.com/br/icones-gratis/postgre",
			title: "Postgre ícones",
			leg: "Postgre js icons created by Freepik - Flaticon",
		},
		{
			name: "MongoDB",
			dif: "Basic",
			stars: 3,
			photo: "https://img.icons8.com/color/256/mongodb.png",
			href: "https://icons8.com.br/icon/74402/mongodb",
			title: "MongoDB ícones",
			leg: "C# js icons created by icons8",
		},
		{
			name: "SqlServer",
			dif: "Intermediate",
			stars: 4,
			photo: "https://cdn-icons-png.flaticon.com/128/2772/2772128.png",
			href: "https://www.flaticon.com/br/icones-gratis/sqlserver",
			title: "Sqlserver ícones",
			leg: "Sqlserver js icons created by Freepik - Flaticon",
		},
		{
			name: "Github",
			dif: "Intermediate",
			stars: 4,
			photo: "https://cdn-icons-png.flaticon.com/128/2504/2504911.png",
			href: "https://www.flaticon.com/br/icones-gratis/github",
			title: "Github ícones",
			leg: "Github js icons created by Freepik - Flaticon",
		},
		{
			name: "Firebase",
			dif: "Intermediate",
			stars: 4,
			photo: "https://img.icons8.com/color/256/firebase.png",
			href: "https://www.flaticon.com/br/icones-gratis/firebase",
			title: "Firebase ícones",
			leg: "Firebase js icons created by Freepik - Flaticon",
		},
		{
			name: "Linux",
			dif: "Intermediate",
			stars: 4,
			photo: "https://cdn-icons-png.flaticon.com/128/6124/6124995.png",
			href: "https://www.flaticon.com/br/icones-gratis/linux",
			title: "Linux ícones",
			leg: "Linux js icons created by Freepik - Flaticon",
		},
	];
	return (
		<Section>
			<H5>Technologies Studied</H5>
			<H2>Skills</H2>
			<Container>
				<Carrousel breakPoints={breakPoints}>
					{cards.length > 0 &&
						cards.map((value, key) => (
							<Card
								key={key}
								name={value.name}
								dif={value.dif}
								stars={value.stars}
								photo={value.photo}
								href={value.href}
								title={value.title}
							/>
						))}
				</Carrousel>
			</Container>
		</Section>
	);
}
