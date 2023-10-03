import './App.css';
import React from "react";


const charact = require('./characters.json');
function Title({ color = 'red', hidden = false, name="nom" }) {
  if (name === '') {
      return null;
  }

  return (<h1 style={{color: color}}>Marvel Characters</h1>
  );

}
function NbCharact(){
  return ('Nombre de persos :' + charact.length);

}
function Addcharcters(){

  return(charact.name);
}

export default function App() {
return (
  <>
    {/* 
        La propriété id et data-demo sont passées au composant Title grâce au spread operator.
        La propriété color est définie dans le composant Title
     */}
    <Title color="black" id="my-id" data-demo="demo">Marvel Characters</Title>
    <NbCharact></NbCharact>
    <Addcharcters></Addcharcters>
  </>
);
}

