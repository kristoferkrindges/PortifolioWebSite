import styled from "styled-components";
import {
	IoMailOutline,
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoLinkedin,
} from "react-icons/io5";

export const IoGithub = styled(IoLogoGithub)`
	width: 45px;
	height: 45px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.turtle};
	&:hover {
		opacity: 0.7;
	}
`;

export const IoLinkedin = styled(IoLogoLinkedin)`
	width: 45px;
	height: 45px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.turtle};
	&:hover {
		opacity: 0.7;
	}
`;

export const IoMail = styled(IoMailOutline)`
	width: 45px;
	height: 45px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.turtle};
	&:hover {
		opacity: 0.7;
	}
`;

export const IoInstagram = styled(IoLogoInstagram)`
	width: 45px;
	height: 45px;
	color: ${({ theme }) => theme.turtle};
	&:hover {
		opacity: 0.7;
	}
`;

export const Container = styled.section`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-height: 90vh;
	padding: 0px 0px 0px 0px;
	transition: 0.5s;
`;

export const MainText = styled.div`
	position: relative;
	width: 600px;
`;

export const Title = styled.h3`
	font-size: 2.5rem;
	/* font-weight: bold; */
	line-height: 1.5rem;
	margin-bottom: 3rem;
	/* text-transform: uppercase; */
`;

export const About = styled.p`
	margin-bottom: 2rem;
	font-size: 1.3rem;
`;

export const Tastes = styled.h1`
	font-size: 4.5rem;
	color: ${({ theme }) => theme.turtle};
	line-height: 1.5rem;
	margin-bottom: 3rem;
	font-weight: bold;
	text-transform: uppercase;
`;

export const Button = styled.a`
	margin-top: 20px;
	border-radius: 50px;
	background-color: ${({ theme }) => theme.turtle};
	white-space: nowrap;
	padding: 10px 22px;
	color: black;
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

export const MainImg = styled.div`
	width: 600px;
	display: flex;
	padding-right: 50px;
	justify-content: flex-end;
	/* margin-top: 50px; */

	img {
		/* max-width: 260px; */
		width: 100%;
		border-radius: 15%;
	}
`;

export const Control = styled.ul`
	position: absolute;
	left: 50%;
	transform: translateX(-80%);
	bottom: 20%;
	display: flex;
`;

export const List = styled.li`
	display: inline-block;
	margin: 0 20px;
	cursor: pointer;
	transition: 0.5s;
	/* max-width: 40px; */

	&:hover {
		transform: translateY(-15px);
	}
`;

export const Social = styled.ul`
	position: absolute;
	top: 50%;
	right: 160px;
	transform: translateY(-30%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Socials = styled.ul``;

export const Black = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	box-shadow: 1px 1px #888;
	cursor: pointer;
	background-color: rgb(60, 60, 60);

	&:hover {
		opacity: 0.7;
	}
`;

export const Orange = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	box-shadow: 1px 1px #888;
	cursor: pointer;
	background-color: orange;

	&:hover {
		opacity: 0.7;
	}
`;

export const Blue = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	box-shadow: 1px 1px #888;
	cursor: pointer;
	background-color: #2c2c6c;

	&:hover {
		opacity: 0.7;
	}
`;

export const Red = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	box-shadow: 1px 1px #888;
	cursor: pointer;
	background-color: red;

	&:hover {
		opacity: 0.7;
	}
`;

export const White = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	box-shadow: 1px 1px #888;
	cursor: pointer;
	background-color: white;

	&:hover {
		opacity: 0.7;
	}
`;
