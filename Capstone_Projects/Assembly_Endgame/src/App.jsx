import { useState, useEffect } from 'react'
import { languages } from './languages.js'
import clsx from 'clsx'

export default function AssemblyEndgame(){
    const [currentWord, setCurrentWord] = useState('react');
    const [letterGuess, setLetterGuess] = useState([]);

    const wrongGuessCount = letterGuess.filter(letter => !currentWord.includes(letter)).length;

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function guess(letter){
        setLetterGuess(prev => {
            const lettersSet = new Set(prev); 
            lettersSet.add(letter);
            return Array.from(lettersSet);
        })  
    }
    console.log(wrongGuessCount)

    const letterElements = currentWord.split('').map(letter=> <span>{letterGuess.includes(letter) ? letter.toUpperCase() : '_'}</span>)

    const languageList = languages.map((language, index)=>{
        const styles={
            backgroundColor:language.backgroundColor,
            color: language.color
        }
        const isLanguageLost = index < wrongGuessCount

        const className = clsx('chip', isLanguageLost && 'lost' )

        return (<span className={`chip ${isLanguageLost ? 'lost' : ''}`} style={styles} key={language.name}>{language.name}</span>)
    })

    const KeyBoardElements = alphabet.split('').map(l => {
        const isGuessed = letterGuess.includes(l);
        const isCorrect = isGuessed && currentWord.includes(l);
        const isWrong = isGuessed && !currentWord.includes(l);

        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (<button key={l} onClick={()=>guess(l)} className={className}>{l.toUpperCase()}</button>)
    })

    const isGameWon = currentWord.split("").every(letter => letterGuess.includes(letter))
    const isGameLost = wrongGuessCount >= languageList.length - 1 ? true : false;

    const isGameOver = isGameWon || isGameLost

    return (
        <main>
            <header>
                <h1>Assembly EndGame</h1>
                <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
            <section className='status'>
                    <h2>You win!</h2>
                    <p>Well Done!🎉</p>
            </section>
            <section className='language_section'>
                    {languageList}
            </section>
            <section className='word'>
                {letterElements}
            </section>
            <section className='alphabet'>
                {KeyBoardElements}
            </section>
            {isGameOver && <button className="new-game">New Game</button>}
        </main>
    )
}