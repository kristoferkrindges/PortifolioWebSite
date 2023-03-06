import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	ImageContent,
	Overlay,
	CardImage,
	CardContent,
	Name,
	Description,
	Price,
	Button,
	StarIcon1,
	StarIcon2,
	Rating,
} from "./style";

export default function Card(props) {
	const number = 5 - props.stars;
	const star = Array.from({ length: props.stars }, (v, k) => k + 1);
	const star2 = Array.from({ length: number }, (v, k) => k + 1);
	return (
		<Container>
			<ImageContent>
				<Overlay></Overlay>
				<CardImage>
					<Link to={props.href} title={props.title}>
						<img src={props.photo}></img>
					</Link>
				</CardImage>
			</ImageContent>

			<CardContent>
				<Name>{props.name}</Name>
				<Description>{props.description}</Description>
				<Rating>
					{star.map((id, index) => (
						<StarIcon1 key={index}></StarIcon1>
					))}
					{star2.map((id, index) => (
						<StarIcon2 key={index}></StarIcon2>
					))}
				</Rating>
				<Price>{props.dif}</Price>
				<Button>View More</Button>
			</CardContent>
		</Container>
	);
}
