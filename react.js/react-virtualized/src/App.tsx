import React from 'react';
import './App.css';
import {loremIpsum} from 'lorem-ipsum';
import 'typeface-roboto';
import ListLoremIpsum from "./List";

function randomString(length: number) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const list = new Array(10000).fill(null).map((val, idx) => {
    return {
        id: idx,
        name: randomString(randomIntFromInterval(8,20)),
        image: 'http://via.placeholder.com/40',
        text: loremIpsum({
            count: 1,
            units: 'sentences',
            sentenceLowerBound: 4,
            sentenceUpperBound: 8
        })
    }
});

const App: React.FC = () => {
  return (
    <div className="App">
        <ListLoremIpsum list={list} />
    </div>
  );
};

export default App;
