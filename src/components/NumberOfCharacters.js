
import '../App.css';
import React, { useState } from 'react';

const charact = require('../data/characters.json');


export default function NumberOfCharacters(){
    if (charact.length === 0) {
      return "Il n'y a pas de characters";
    }
    return ('Nombre de persos :' + charact.length);
  
  }