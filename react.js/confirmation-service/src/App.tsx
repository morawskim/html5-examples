import React from 'react';
import './App.css';
import {ConfirmationServiceProvider} from "./confirmationService";
import Card from "./card";

function App() {
  return (
    <div className="App">
      <ConfirmationServiceProvider>
        <Card id={1}/>
        <Card id={2}/>
        <Card id={3}/>
        <Card id={4}/>
        <Card id={5}/>
        <Card id={6}/>
        <Card id={7}/>
        <Card id={8}/>
        <Card id={9}/>
        <Card id={10}/>
      </ConfirmationServiceProvider>
    </div>
  );
}

export default App;
