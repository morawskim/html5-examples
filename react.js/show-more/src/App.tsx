import React from 'react';
import './App.css';
import ShowSome, {ShowAllProps} from "./showMore";

const EmptyComponent: React.FC<ShowAllProps> = (props) => null;

function App() {
  return (
    <div className="App">
      <ShowSome defaultLimit={4}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
        <span>15</span>
      </ShowSome>
      <br />
      <br />
      <ShowSome defaultLimit={4} showAllComponent={EmptyComponent}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
      </ShowSome>
    </div>
  );
}

export default App;
