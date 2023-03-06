import styled from "styled-components";
import { IoTrashBinOutline, IoStar } from "react-icons/io5";

export const StarIcon1 = styled(IoStar)`
	stroke: "ffffff";
	width: 40px;
	height: 40px;
	color: ${({ theme }) => theme.turtle};
	&:hover {
		color: ${({ theme }) => theme.turtle};
		opacity: 0.2;
	}
`;

export const StarIcon2 = styled(IoStar)`
	stroke: "#94449e";
	width: 40px;
	height: 40px;
	color: gray;
	opacity: 0.7;
	&:hover {
		color: ${({ theme }) => theme.turtle};
		opacity: 0.9;
	}
`;

export const Container = styled.div`
	border-radius: 25px;
	background-color: ${({ theme }) => theme.bg};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	min-height: 46vh;
	width: 24vw;
	margin-bottom: 10px;
`;

export const ImageContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 14px;
	position: relative;
	row-gap: 5px;
	padding: 25px 0;
`;

export const Overlay = styled.span`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background-color: ${({ theme }) => theme.turtle};
	border-radius: 25px 25px 0 25px;
	&::before,
	&::after {
		content: "";
		position: absolute;
		right: 0;
		bottom: -40px;
		height: 40px;
		width: 40px;
		background-color: ${({ theme }) => theme.turtle};
	}
	&::after {
		border-radius: 0 25px 0 0;
		background-color: ${({ theme }) => theme.bg};
	}
`;

export const CardImage = styled.div`
	position: relative;
	height: 150px;
	width: 150px;
	border-radius: 50%;
	background: ${({ theme }) => theme.bg};
	padding: 3px;
	& img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 50%;
		border: 4px solid ${({ theme }) => theme.turtle};
	}
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 14px;
`;

export const Name = styled.h2`
	font-size: 2rem;
	font-weight: bold;
	color: ${({ theme }) => theme.text};
	margin-bottom: 10px;
`;

export const Rating = styled.div`
	display: flex;
	align-items: center;
	margin-top: 5px;
	margin-bottom: 15px;
	svg {
		font-size: 18px;
		margin: 0 2px;
	}
`;

export const Description = styled.p`
	font-size: 14px;
	color: ${({ theme }) => theme.text};
	text-align: center;
	margin-bottom: 10px;
`;

export const Price = styled.h3`
	font-size: 1.3rem;
	font-weight: bold;
	color: ${({ theme }) => theme.text};
	margin-bottom: 25px;
`;

export const Button = styled.div`
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
