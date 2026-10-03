import styled from "styled-components";
import type {Game} from "../types/Game.ts";

const AllGamesDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #74275d;
`;

const SingleGameDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 25%;
    padding: 2%;
    margin: 1%;
    background-color: #222233;
    color: #ffb5b4;
    border: 5px #b12f5d solid;
    font: italic small-caps calc(2px + 1vw) Copperplate, monospace;
    text-align: center;
`;


export default function GameDisplay(props: { data: Game[] }) {
    return (
        <AllGamesDiv>
            {props.data.map((game) => (
                <SingleGameDiv key={game.id}>
                    <h1>{game.title}</h1>
                    <img src = {game.thumbnail} alt = {game.title}/>
                    <p>Description: {game.short_description}</p>
                    <p>Genre: {game.genre}</p>
                    <p>Publisher: {game.publisher}</p>
                    <p>Developer: {game.developer}</p>
                    <p>Release Date: {game.release_date}</p>
                </SingleGameDiv>
            ))}
        </AllGamesDiv>
    );
}