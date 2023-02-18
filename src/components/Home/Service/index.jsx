import react from "react";
import {
	Container,
	Section,
	H5,
	H2,
	Card,
	Cards,
	Time,
	CardSelect,
	EarningsText,
	Chart,
	IoServer,
	IoReact,
	IoColorPalette,
} from "./style";
export default function Service() {
	return (
		<Section>
			<H5>What I Offer</H5>
			<H2>Services</H2>
			<Container>
				<Card>
					<Cards>
						<CardSelect>
							<Chart>
								<IoServer />
							</Chart>
							<EarningsText>Backend</EarningsText>
							<Time>
								API and system constructions with database management and
								frameworks
							</Time>
						</CardSelect>
					</Cards>
					<Cards>
						<CardSelect>
							<Chart>
								<IoReact />
							</Chart>
							<EarningsText>Frontend</EarningsText>
							<Time>
								Product will look good and will be accessible on all devices,
								including mobile phones, tablets and desktop.
							</Time>
						</CardSelect>
					</Cards>
					<Cards>
						<CardSelect>
							<Chart>
								<IoColorPalette />
							</Chart>
							<EarningsText>UI/UX Design</EarningsText>
							<Time>
								My designs are modern and intuitive. I use industry-standard
								rules to make sure my users have fun using my product.
							</Time>
						</CardSelect>
					</Cards>
				</Card>
			</Container>
		</Section>
	);
}
