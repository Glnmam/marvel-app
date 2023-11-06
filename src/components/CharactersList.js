
import '../App.css';
import React, { useState } from 'react';

const charact = require('../data/characters.json');

export default function CharactersList() {
    return (
      <ul>
        {charact.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    )
  }