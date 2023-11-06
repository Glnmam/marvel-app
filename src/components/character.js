import '../App.css';
import React, { useState } from 'react';

const charact = require('../data/characters.json');

export default function CharactImg({ charact = [] }) {
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