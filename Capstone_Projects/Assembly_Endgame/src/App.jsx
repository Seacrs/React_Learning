import { useState, useEffect } from 'react'
import { languages } from './languages.js'
import clsx from 'clsx'

export default function AssemblyEndgame(){
    const [currentWord, setCurrentWord] = useState('react')
    const [letterGuess, setLetterGuess] = useState([]);

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function guess(letter){
        setLetterGuess(prev => {
            const lettersSet = new Set(prev);
            lettersSet.add(letter);
            return Array.from(lettersSet);
        })
    }

    const letterElements = currentWord.split('').map(letter=> <span>{letter.toUpperCase()}</span>)

    const languageList = languages.map(language=>{
        const styles={
            backgroundColor:language.backgroundColor,
            color: language.color
        }

        return (<span className='chip' style={styles} key={language.name}>{language.name}</span>)
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
            <button className="new-game">New Game</button>
        </main>
    )
}