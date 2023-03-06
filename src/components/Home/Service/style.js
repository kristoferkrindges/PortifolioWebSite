import styled from "styled-components";
import {
	IoServerOutline,
	IoLogoReact,
	IoColorPaletteOutline,
} from "react-icons/io5";

export const IoServer = styled(IoServerOutline)`
	width: 45px;
	height: 45px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.inverted};
`;

export const IoReact = styled(IoLogoReact)`
	width: 45px;
	height: 45px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.inverted};
`;

export const IoColorPalette = styled(IoColorPaletteOutline)`
	width: 45px;
	height: 45px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.inverted};
`;

export const Section = styled.section`
	width: 100%;
	min-height: 55vh;
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
	margin-top: 60px;
	/* width: 1650px; */
`;

export const Card = styled.div`
	display: flex;
	justify-content: center;
	/* align-items: center; */
	flex-wrap: wrap;
	gap: 5%;
`;

export const Cards = styled.div`
	padding: 20px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.turtle};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);

	height: 28.8vh;
	width: 24vw;
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
