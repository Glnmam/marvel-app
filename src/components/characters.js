import '../App.css';
import React, { useState } from 'react';

const charact = require('../data/characters.json');


export default function Title({ color = 'red', hidden = false, name="nom" }) {
    if (name === '') {
        return null;
    }
  
    return (<h1 style={{color: color}}>Marvel Characters</h1>
    );
  
  }