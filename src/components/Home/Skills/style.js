import styled from "styled-components";
export const Section = styled.section`
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
	display: flex;
	justify-content: center;
	align-items: center;
	/* margin-top: 60px; */
	min-height: 60vh;
	padding: 0px 110px 0px 110px;
	transition: all 0.3s ease;
	button.rec-dot {
		background-color: ${({ theme }) => theme.turtle};
		/* box-shadow: 0 0 1px 3px rgba(235, 16, 16, 0.5); */
	}
	button.rec-dot:hover {
		border-color: ${({ theme }) => theme.text};
	}
	button.rec-dot:hover,
	button.rec-dot:active,
	button.rec-dot:focus {
		box-shadow: 0 0 1px 3px ${({ theme }) => theme.text};
	}
	.rec.rec-arrow {
		color: ${({ theme }) => theme.text};
		background-color: ${({ theme }) => theme.turtle};
	}
	.rec.rec-arrow:hover {
		opacity: 0.5;
	}
`;
