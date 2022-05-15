import React , {useEffect, useState} from 'react';
import Card from './Card';
import Monitor from './Monitor';

import craig from './images/craig.webp';
import wendy from './images/wendy.webp';
import butters from './images/butters.webp';
import stan from './images/stan.webp';
import kyle from './images/kyle.webp';
import jimmy from './images/jimmy.webp';

function App() {

  const characters = [
    { path: craig,
      status: "hidden",
      id: 1 },
    { path: craig,
      status: "hidden",
      id: 12 },
    { path: wendy,
      status: "hidden",
      id: 2 },
    { path: wendy,
      status: "hidden",
      id: 11 },
    { path: butters,
      status: "hidden",
      id: 3 },
    { path: butters,
      status: "hidden",
      id: 10 },
    { path: stan,
      status: "hidden",
      id: 4 },
    { path: stan,
      status: "hidden",
      id: 9 },
    {path: jimmy,
      status: "hidden",
      id: 5 },
    { path: jimmy,
      status: "hidden",
      id: 8 },
    { path: kyle,
      status: "hidden",
      id: 6 },
    { path: kyle,
      status: "hidden",
      id: 7 },
  ].sort((a,b)=> 0.5 - Math.random());
  const [lives, setLives] = useState(5);
  const [chars, setChars] = useState(characters);
  const [score, setScore] = useState(0);

  const changeStatus = (id, status) => {
    let s = [...chars];
    for(let i=0; i<s.length; i++){
      if(s[i].id === id){
        s[i].status = status;
      }
    }
    setChars(s);
  }

  const changeActiveCharacter = (status) => {
    let s = [...chars];
    s.forEach(char => {
      if(char.status === "active"){
        char.status = status;
      }
    })
    setChars(s);
  }
  const activeCards = () => {
    let s = [...chars];
    let n = 0;
    s.forEach(char => {
      if(char.status === "active"){
        n=n+1;
      }
    })
    return n
  }
  const activePath = () => {
    let s = [...chars];
    let path = "";
    s.forEach(char => {
      if(char.status === "active"){
        path = char.path;
      }
    })
    return path;
  }

  const check = (char) => {
    if(activeCards() === 0){
      changeStatus(char.id, "active");
    }
    else if(activeCards() === 1){
      if(char.path == activePath()){
        changeActiveCharacter("visible");
        changeStatus(char.id, "visible");
        setScore(score+1);
      }
      else{
        setLives(lives-1);
        changeActiveCharacter("active");
        changeStatus(char.id, "active");
      }
    }
    else{
      changeActiveCharacter("hidden");
      changeStatus(char.id, "active");
    }
    
  }

  const handleClick = () => {
    setChars(characters);
    setLives(5);
    setScore(0);
  }

  
  return (
    <div className="App">
      <div className='title'>
        <h1><Monitor lives={lives} score={score}></Monitor></h1>
        <button className='button item' onClick={() => handleClick()}>Play again</button>
      </div>
      <div>
        {chars.map(char => {
          return (<Card key={char.id} check={check} character={char}></Card>)
        })}
      </div>
    </div>
  );
}

export default App;
