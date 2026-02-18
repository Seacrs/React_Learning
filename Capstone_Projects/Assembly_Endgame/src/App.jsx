import { useState, useEffect } from 'react'
import { languages } from './languages.js'

export default function AssemblyEndgame(){
    const [currentWord, setCurrentWord] = useState('react')

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const KeyBoardElements = alphabet.split('').map(l => <button key={l}>{l.toUpperCase()}</button>)

    const letterElements = currentWord.split('').map(letter=> <span>{letter.toUpperCase()}</span>)

    const languageList = languages.map(language=><span className='chip'
                                                        key={language.name}
                                                        style={{
                                                            backgroundColor:language.backgroundColor,
                                                            color: language.color
                                                        }}>{language.name}</span>)

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