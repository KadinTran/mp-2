import {useEffect, useState} from "react";
import styled from "styled-components";
import type {Game} from "./types/Game.ts";
import GameDisplay from "./components/GameDisplay.tsx";


const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px #222233 solid;
`;
const SelectorDiv=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #74275d;
`
const ButtonDiv = styled.button`
    font: small-caps calc(2px + 1vw) Copperplate, monospace;
    border: solid #b12f5d 2px;
    background: #222233 ;
    color: #ffb5b4;
    justify-content: center;
    //border-radius: 1.5vw;
    padding: 1%;
    margin: 1%;
`
const TitleDiv = styled.h1`
    justify-content: center;
    text-align: center;
    margin: 0;
    background: #74275d ;
    color: #ffb5b4;
`
export default function App(){

  const[data, setData] = useState< Game[] >([]);
  const[category, setCategory] = useState<string>("");

  useEffect(()=>{
    async function fetchData(){
      const url = category === ""
          ? "https://www.freetogame.com/api/games"
          : `https://www.freetogame.com/api/games?category=${category}`;
      const rawData = await fetch(url)
      const data: Game[] = await rawData.json();
      setData(data);
    }
    fetchData()
        .then( () => console.log('got: ' + data.length))
        .catch( (err) => console.log("Error: " + err));
  }, [category, data.length]);

  return (
    <ParentDiv>
        <SelectorDiv>
            <ButtonDiv onClick={()=>setCategory("")}> All games</ButtonDiv>
            <ButtonDiv onClick={()=>setCategory("Card")}> Card games</ButtonDiv>
            <ButtonDiv onClick={()=>setCategory("Shooter")}> Shooter games</ButtonDiv>
            <ButtonDiv onClick={()=>setCategory("MMORPG")}>MMORPG Games</ButtonDiv>
            <ButtonDiv onClick={()=>setCategory("MOBA")}> MOBA games</ButtonDiv>
            <ButtonDiv onClick={()=>setCategory("Social")}>Social games</ButtonDiv>
            <ButtonDiv onClick={()=>setCategory("Sandbox")}>Sandbox games</ButtonDiv>
            <ButtonDiv onClick={()=>setCategory("PVP")}>PVP games</ButtonDiv>
        </SelectorDiv>
        <TitleDiv> Free {category} Games</TitleDiv>
        {/*<p>Category: {category}</p>*/}
        <GameDisplay data = {data}/>
    </ParentDiv>
  );
}



