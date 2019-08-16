import React from 'react';
import './App.css';
import StarWarsParent from './components/StarWarsParent';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Header = styled.header`
    height:200px;
  `;

  const H1 = styled.h1` 
  font-size:5rem;
  color: #feda4a;
  text-shadow: 4px 4px black, 4px 4px black, 4px 4px black, 4px 4px black;
    padding: 40px;
  `;
  

  return (
    <div className="App">
      <Header>
      <H1 className="Header">React Wars</H1>
      </Header>
      <StarWarsParent/>
      <footer></footer>
    </div>
  );
}

export default App;
