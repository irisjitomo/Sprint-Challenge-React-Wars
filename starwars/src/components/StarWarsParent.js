import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsChild from './StarWarsChild';

export default function StarWarsParent() {
	const [ peopleData, setStarWarsData ] = useState([]);

	useEffect(() => {
		axios.get('https://swapi.co/api/people/').then((res) => {
			console.log(res.data.results);
			setStarWarsData(res.data.results);
		});
	}, []);
	return (
		<div>
			{peopleData.map((data) => {
                return <StarWarsChild 
                name={data.name} 
                gender={data.gender} 
                height={data.height} 
                mass={data.mass} />;
			})}
		</div>
	);
}
