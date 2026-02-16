import Die from './components/Die'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App(){
    const [dice, setDice] = useState(generateAllNewDice())

    const gameWon = dice.every(item=> item.isHeld) && dice.every(item => dice[0].value === item.value)

    /**
     * Challenge:
     * Make the confetti drop when the game is won! 🎉🎊
     */

  function generateAllNewDice(){
        return new Array(10)
                    .fill(0)
                    .map(()=> ({
                      value: Math.ceil(Math.random() * 6),
                      isHeld: false,
                      id: nanoid()
                    }))
    }

    function hold(id){
      setDice(prev=>prev.map(item=> item.id === id ? {...item, isHeld: !item.isHeld} :item))
  }

    const diceElements = dice.map((die)=><Die  
                                            key={die.id} 
                                            value = {die.value} 
                                            isHeld={die.isHeld}
                                            hold={()=> hold(die.id)}/>
)

    function rollDice(){
      setDice(prev=>prev.map(item=> item.isHeld ? item : { ...item, value: Math.ceil(Math.random() * 6)}))
    }
  
  return (
    <main>
      {gameWon && <Confetti/>}
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
        {diceElements}
      </div>
      <button className='roll-button' onClick={rollDice}>{gameWon ? 'New Game' : 'Roll'}</button>
    </main>
  )
}