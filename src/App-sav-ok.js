/*import './App.css';
import React, { useState } from 'react';


const charact = require('./characters.json');


function Title({ color = 'red', hidden = false, name="nom" }) {
  if (name === '') {
      return null;
  }

  return (<h1 style={{color: color}}>Marvel Characters</h1>
  );

}
function NbCharact(){
  if (charact.length === 0) {
    return "Il n'y a pas de characters";
  }
  return ('Nombre de persos :' + charact.length);

}
function Addcharcters() {
  return (
    <ul>
      {charact.map((character, index) => (
        <li key={index}>{character.name}</li>
      ))}
    </ul>
  )
}
function CharactImg({ charact = [] }) {
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  }
  return (
    <div>
      {charact.map((character, index) => (
        <div  key={index} onClick={() => handleCharacterClick(character)}>
          <h2>{character.name}</h2>
          <p>{character.description}</p>
          {selectedCharacter && (
            <img
              src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`}
              alt={character.name}
              style={{ maxWidth: '100px' }}
            />
            )}
        </div>
      ))}
    </div>
  );
}

export default function App() {
return (
  <>
    {/* 
        La propriété id et data-demo sont passées au composant Title grâce au spread operator.
        La propriété color est définie dans le composant Title
     }
    <Title color="black" id="my-id" data-demo="demo">Marvel Characters</Title>
    <NbCharact></NbCharact>
    <Addcharcters></Addcharcters>
    <CharactImg></CharactImg>
  </>
);
}*/

