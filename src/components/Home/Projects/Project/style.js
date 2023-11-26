import styled from "styled-components";
import {
	IoLogoGithub,
	IoLogoReact,
	IoLogoFirebase,
	IoLogoNodejs,
} from "react-icons/io5";
import { SiCsharp } from "react-icons/si";

export const IoGithub = styled(IoLogoGithub)`
	width: 25px;
	height: 25px;
	color: ${({ theme }) => theme.text};
`;

export const IoGithub2 = styled(IoLogoGithub)`
	width: 25px;
	height: 25px;
	margin-right: 10px;
	color: ${({ theme }) => theme.inverted};
	&:hover {
		opacity: 0.7;
	}
	opacity: 500;
`;

export const LogoReact = styled(IoLogoReact)`
	width: 45px;
	height: 45px;
	color: ${({ theme }) => theme.text};
`;

export const Csharp = styled(SiCsharp)`
	width: 45px;
	height: 45px;
	color: ${({ theme }) => theme.text};
`;

export const LogoNodejs = styled(IoLogoNodejs)`
	width: 45px;
	height: 45px;
	color: ${({ theme }) => theme.text};
`;

export const LogoFirebase = styled(IoLogoFirebase)`
	width: 45px;
	height: 45px;
	color: ${({ theme }) => theme.text};
`;

export const My = styled.div`
	background: ${({ theme }) => theme.turtle};
	border-radius: 20px;
	position: relative;
	margin: 40px 0;
	/* min-width: 800px; */
	box-shadow: 0 5px 40px rgba(0, 0, 0, 0.6);
	/* min-height: 40vh;
	width: 25vw; */
	height: 70vh;
	width: 38vw;
	cursor: pointer;
	transition: opacity 0.5s ease-out;
	&::before {
		content: "";
		position: absolute;
		height: 90%;
		width: 100%;
		background: ${({ theme }) => theme.bg};
		border-radius: 20px 20px 0 0;
	}
	.one {
		border: 2px solid ${({ theme }) => theme.turtle};
		width: 14vw;
		margin-top: 15px;
		margin-bottom: 5px;
	}
	.two {
		border: 2px solid ${({ theme }) => theme.turtle};
		width: 7vw;
		margin-bottom: 5px;
	}
	.three {
		border: 2px solid ${({ theme }) => theme.turtle};
		width: 3.5vw;
		margin-bottom: 2px;
	}
`;
export const Image = styled.div`
	height: 35vh;
	width: 38vw;
	border-radius: 20px;
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 20px 20px 0 0;
	/* border-radius: 50%; */
	/* border: 3px solid ${({ theme }) => theme.inverted}; */
	&:hover {
		opacity: 0.5;
	}
`;
export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* padding: 30px; */
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
	text-align: center;
	padding: 0 15px 0 15px;
`;
export const Name = styled.span`
	font-size: 2rem;
	font-weight: 900;
	color: ${({ theme }) => theme.turtle};
	&:hover {
		opacity: 0.5;
	}
`;

export const Subject = styled.span`
	font-size: 1.2rem;
	font-weight: 500;
	margin-top: 20px;
	margin-bottom: 20px;
`;

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
	display: flex;
	background: ${({ theme }) => theme.turtle};
	outline: none;
	border: none;
	color: white;
	font-weight: bold;
	padding: 8px 22px;
	border-radius: 20px;
	font-size: 1.5rem;
	text-align: center;
	font-weight: 500;
	transition: all 0.3s ease;
	&:hover {
		background: #333;
	}
`;
