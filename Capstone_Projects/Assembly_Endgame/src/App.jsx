import { useState } from 'react'
import { languages } from './languages.js'
import clsx from 'clsx'
import  {getFarewellText}  from './utils.js'

export default function AssemblyEndgame(){
    const [currentWord, setCurrentWord] = useState('react');
    const [letterGuess, setLetterGuess] = useState([]);

    const numGuessesLeft = languages.length - 1;
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

        return (<span className={className} style={styles} key={language.name}>{language.name}</span>)
    })

    const isGameWon = currentWord.split("").every(letter => letterGuess.includes(letter))
    const isGameLost = wrongGuessCount >= numGuessesLeft ? true : false;

    const isGameOver = isGameWon || isGameLost

    const lastGuessedLetter = letterGuess[letterGuess.length - 1];
    const isLastGuessWrong = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

    const KeyBoardElements = alphabet.split('').map(l => {
        const isGuessed = letterGuess.includes(l);
        const isCorrect = isGuessed && currentWord.includes(l);
        const isWrong = isGuessed && !currentWord.includes(l);

        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (<button key={l} onClick={()=>guess(l)} className={className} disabled={isGameOver} aria-disabled={letterGuess.includes(l)} aria-label={`Letter ${l}`}>{l.toUpperCase()}</button>)
    })

    const farewellText = isLastGuessWrong  ? getFarewellText(languages[wrongGuessCount - 1].name) : '';
    const gameStatusClass = clsx("status", {
        lost: isGameLost,
        win: isGameWon,
        farewell: !isGameWon && !isGameLost && isLastGuessWrong
    })

    return (
        <main>
            <header>
                <h1>Assembly EndGame</h1>
                <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
            <section aria-live='polite' role='status' className={gameStatusClass}>
                {!isGameWon && !isGameLost && <p className='farewell-message'>{farewellText}</p>}
                {isGameWon && <>
                    <h2>You win!</h2>
                    <p>Well Done!🎉</p>
                    </>}
                {isGameLost && <>
                    <h2>Game Over!</h2>
                    <p>You lose Better start Learning Assembly 💀</p>
                    </>}
            </section>
            <section className='language_section'>
                    {languageList}
            </section>
            <section className='sr-only' aria-live='polite' role='status'>
                <p>
                    {currentWord.includes(lastGuessedLetter)? 
                    `Correct! The letter ${lastGuessedLetter} is in the word. ` :
                    `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {numGuessesLeft} attempts left.
                </p>
                <p>Current word: {currentWord.split("").map(letter=> letterGuess.includes(letter) ? letter + "." : "blank").join("")}</p>
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