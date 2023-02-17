import styled from "styled-components";
import {
	IoMailOutline,
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoAlbumsOutline,
	IoBookOutline,
	IoMedalOutline,
} from "react-icons/io5";

export const IoAlbums = styled(IoAlbumsOutline)`
	width: 45px;
	height: 45px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.inverted};
`;

export const IoBook = styled(IoBookOutline)`
	width: 45px;
	height: 45px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.inverted};
`;

export const IoMedal = styled(IoMedalOutline)`
	width: 45px;
	height: 45px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.inverted};
`;

export const IoGithub = styled(IoLogoGithub)`
	width: 25px;
	height: 25px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.inverted};
	&:hover {
		opacity: 0.7;
	}
`;

export const IoLinkedin = styled(IoLogoLinkedin)`
	width: 25px;
	height: 25px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.inverted};
	&:hover {
		opacity: 0.7;
	}
`;

export const IoMail = styled(IoMailOutline)`
	width: 25px;
	height: 25px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.inverted};
	&:hover {
		opacity: 0.7;
	}
`;

export const IoInstagram = styled(IoLogoInstagram)`
	width: 25px;
	height: 25px;
	color: ${({ theme }) => theme.inverted};
	&:hover {
		opacity: 0.7;
	}
`;

export const Section = styled.section`
	/* display: grid;
	grid-template-columns: 40% 50%;
	gap: 15; */
	position: relative;
	width: 100%;
	min-height: 90vh;
`;

export const H5 = styled.h5`
	text-align: center;
	font-size: 1.3rem;
	margin-bottom: 0.5rem;
`;

export const H2 = styled.h2`
	text-align: center;
	font-size: 2.3rem;
	margin-bottom: 1.5rem;
`;

export const Container = styled.div`
	/* position: relative; */
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0px 0px 0px 0px;
	transition: 0.5s;
`;

export const My = styled.div`
	background: ${({ theme }) => theme.bg};
	border-radius: 20px;
	position: relative;
	margin: 40px 0;
	/* min-width: 800px; */
	box-shadow: 0 5px 40px rgba(0, 0, 0, 0.6);
	/* min-height: 40vh;
	width: 25vw; */
	height: 60vh;
	width: 80vh;
	cursor: pointer;
	transition: opacity 0.5s ease-out;
	&::before {
		content: "";
		position: absolute;
		height: 48%;
		width: 100%;
		background: ${({ theme }) => theme.turtle};
		border-radius: 20px 20px 0 0;
	}
`;
export const Image = styled.div`
	height: 300px;
	width: 300px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid ${({ theme }) => theme.inverted};
	&:hover {
		opacity: 0.5;
	}
`;
export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	position: relative;
	z-index: 100;
`;
export const Icons = styled.div`
	position: absolute;
	top: 10px;
	left: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	svg {
		margin-top: 10px;
		transition: all 0.3s ease;
		cursor: pointer;
	}
`;
export const NameSubject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	color: ${({ theme }) => theme.text};
`;
export const Name = styled.span`
	font-size: 2rem;
	font-weight: 600;
`;

export const Email = styled.span`
	font-size: 1.2rem;
	font-weight: 500;
	margin-top: 10px;
`;

export const Subject = styled.span`
	font-size: 1.2rem;
	font-weight: 500;
	margin-top: 20px;
	margin-bottom: 20px;
`;
export const SubjectUl = styled.ul``;
export const Li = styled.li``;

export const Rating = styled.div`
	display: flex;
	align-items: center;
	margin-top: 18px;
	svg {
		font-size: 18px;
		margin: 0 2px;
	}
`;
export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`;
export const HireMe = styled.button`
	background: ${({ theme }) => theme.turtle};
	outline: none;
	border: none;
	color: white;
	font-weight: bold;
	padding: 8px 22px;
	border-radius: 20px;
	font-size: 1.5rem;
	font-weight: 500;
	transition: all 0.3s ease;
	&:hover {
		background: #333;
	}
`;

// export const StarIcon1 = styled(IoStar)`
// 	stroke: "ffffff";
// 	width: 30px;
// 	height: 30px;
// 	color: ${({ theme }) => theme.buttons};
// 	&:hover {
// 		color: ${({ theme }) => theme.buttons};
// 		opacity: 0.2;
// 	}
// `;

// export const StarIcon2 = styled(IoStar)`
// 	stroke: ${({ theme }) => theme.buttons};
// 	width: 30px;
// 	height: 30px;
// 	color: gray;
// 	opacity: 0.7;
// 	&:hover {
// 		color: ${({ theme }) => theme.buttons};
// 		opacity: 0.9;
// 	}
// `;

// Text About

export const AbMe = styled.div`
	height: 60vh;
	width: 80vh;
	/* box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
	background: white;
	border-radius: 20px;
	position: relative;
	margin: 40px 0;
	padding: 10px; */
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 40px;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
	height: 27vh;
	padding: 20px;
	background: ${({ theme }) => theme.bg};
	border-radius: 20px;
`;

export const Card = styled.div`
	/* display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 20px;
	a {
		color: white;
	}
	a:hover { 48 de 60
		opacity: 0.5;
	} */
	display: flex;
	width: 100%;
	justify-content: center;
	gap: 5%;
`;

export const Cards = styled.div`
	padding: 20px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.turtle};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
	width: 100%;
	height: 28.8vh;
`;

export const CardSelect = styled.div`
	margin: 1rem;
`;

export const Chart = styled.div`
	display: flex;
	justify-content: center;
	svg {
		height: 4rem;
		width: 4rem;
	}
`;

export const EarningsText = styled.h3`
	text-align: center;
	padding: 0.4rem 0;
	font-size: 1.5rem;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.inverted};
`;

export const Time = styled.h2`
	text-align: center;
	font-weight: normal;
	font-size: 1.1rem;
	color: ${({ theme }) => theme.inverted};
`;

export const Text = styled.p`
	/* margin-bottom: 2rem; */
	font-size: 1.3rem;
	line-height: 1.5;
`;

export const Butt = styled.a`
	margin-top: 20px;
	border-radius: 50px;
	background-color: ${({ theme }) => theme.turtle};
	white-space: nowrap;
	padding: 10px 22px;
	color: white;
	font-size: 1.5rem;
	font-weight: bold;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: black;
		color: white;
		font-size: 20px;
	}
`;
