import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
justify-content: center;
color: #feda4a;
font-size:1.5rem;
font-family: 'Star Jedi', arial;
align-items:center;
letter-spacing: 6px;
// line-height: 150%;
text-align: justify;
text-shadow: 2px 0 black, 0 2px black, 2px 2px black, 0 2px black;
border:2px solid black;
`;
const Name = styled.div`
    padding: 20px;
`;
const Attributes = styled.div`
    padding:30px;
`;

const StarWarsChild = (props) => {
	return (
		<Div>
			<Name> 
				<h1>{props.name}</h1>
			</Name>
			<Attributes className="Attributes">
				<h1>Attributes:</h1>
				<h2>Gender: {props.gender}</h2>
				<h2>Height: {props.height} cm</h2>
				<h2>Mass: {props.mass}</h2>
			</Attributes>
		</Div>
	);
};

export default StarWarsChild;
