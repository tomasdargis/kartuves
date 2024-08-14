import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import PopUp from './components/PopUp';

import { showNotificacion as show } from './helpers/Helpers';

import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

// const correctLetters = [];
// const wrongLetters = [];

function App() {
    const [playable, setPlayable] = useState('true');
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotificacion, setShowNotificacion] = useState(false);

    useEffect(() => {
        const handleKeydown = (event) => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();

                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters((currentLetters) => [
                            ...currentLetters,
                            letter,
                        ]);
                    } else {
                    }
                    show(setShowNotificacion);
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters((wrongLetters) => [
                            ...wrongLetters,
                            letter,
                        ]);
                    } else {
                        show(setShowNotificacion);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]);

    return (
        <>
            <Header />
            <div className="game-container">
                <Figure wrongLetters={wrongLetters} />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word
                    selectedWord={selectedWord}
                    correctLetters={correctLetters}
                />
            </div>
            <PopUp
                correctLetters={correctLetters}
                wrongLetters={wrongLetters}
                selectedWord={selectedWord}
                setPlayable={setPlayable}
            />
            <Notification showNotificacion={showNotificacion} />
        </>
    );
}

export default App;
