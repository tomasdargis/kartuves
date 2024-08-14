import React from 'react';
import { checkWin } from '../helpers/Helpers';

const PopUp = ({ correctLetters, wrongLetters, selectedWord, setPlayable }) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
        finalMessage = 'Svikiname! Jūs Laimėjote!😀';
    }

    return (
        <div className="popup-container">
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button>Play Again</button>
            </div>
        </div>
    );
};

export default PopUp;
