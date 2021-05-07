import React from "react";
import './styles.css';

const MOCKED_CHARACTER_LIST = ["BATMAN", "X-MAN", "RICK", "MORTY", "MEESEEKS"];

function RickAndMortyCharacterList() {
    let characterList = [];

    //TODO Dodać funkcję która pobierze nam postaci z R&M
    // function forLoopExample() {
    //     for(let i=0;i<10;i++){
    //         console.log(i);
    //     }
    // }

    //TODO 

    return (
        <div className="container">
            <ol className="character-list">
                <li className="character-item">{MOCKED_CHARACTER_LIST[2]}</li>
                <li className="character-item">Postać 2</li>
                <li className="character-item">Postać 3</li>
                <li className="character-item">Postać 4</li>
                <li className="character-item">Postać 5</li>
                <li className="character-item">Postać 6</li>
            </ol>
        </div>);
}

export default RickAndMortyCharacterList