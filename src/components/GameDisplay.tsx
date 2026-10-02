import styled from "styled-components";
import type {Game} from "../types/Game.ts";

const AllGamesDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleGameDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: darkorange;
    color: black;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
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