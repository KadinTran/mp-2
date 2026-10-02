import {useEffect, useState} from "react";
import styled from "styled-components";
import type {Game} from "./types/Game.ts";

import GameDisplay from "./components/GameDisplay.tsx";


const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){

  const[data, setData] = useState< Game[] >([]);

  useEffect(()=>{
    async function fetchData(){
      const rawData = await fetch("https://www.freetogame.com/api/games")
      const data: Game[] = await rawData.json();
      setData(data);
    }
    fetchData()
        .then( () => console.log('got: ' + data.length))
        .catch( (err) => console.log("Error: " + err));
  }, [data.length]);

  return (
      <ParentDiv>
          <GameDisplay data = {data}/>
      </ParentDiv>
  );
}



