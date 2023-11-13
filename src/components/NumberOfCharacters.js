
import '../App.css';
import React, { useState } from 'react';

const charact = require('../data/characters.json');


export function NumberOfCharacters({ characters = [] }) {
  if (characters.length === 0) {
    return <p>There is no characters</p>;
  }

  return <p>There is {characters.length} characters</p>;
}  