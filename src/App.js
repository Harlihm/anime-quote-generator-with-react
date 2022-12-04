import React from "react";
import './App.css';
import { useEffect, useState } from "react";

const App = () => {
    
  // const [count ,setCount] = useState(0);
  const [person ,setPerson] = useState(null);

    function theData() {
      let url = "https://animechan.vercel.app/api/random"
   
    fetch(url)
    .then(res => {
      return res.json();
    }).then(
      (data)=> {
     
           
        
        setPerson(data);

      }
    )
    };
  useEffect(()=>{  
     console.log("data loaded")
theData()
  } ,[]);

  return (
    
    <div className="app">
      <h1>Anime Quote Generator</h1>
        {/* <p>you clicked {count} times</p>
        <button onClick={()=>setCount(count + 1)}>click me </button> */}
        <div className="aName">
          <h2>Anime</h2>
           {person && <div className="anime">{person.anime}</div>}
        </div>
        <div className="aCharacter">
          <h2>Character</h2>
           {person && <div className="character">{person.character}</div>}
        </div>
        <div className="aQuote">
          <h2>Quote</h2>
            {person && <div className="quote">{person.quote}</div>}
        </div>
  </div> );
}
 
export default App;
