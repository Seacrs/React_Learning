import Die from './components/Die'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App(){

  function generateAllNewDice(){
        return new Array(10)
                    .fill(0)
                    .map(()=> ({
                      value: Math.ceil(Math.random() * 6),
                      isHeld: false,
                      id: nanoid()
                    }))
    }

    const [dice, setDice] = useState(generateAllNewDice())

    const diceElements = dice.map((die)=><Die key={die.id} value = {die.value} isHeld={die.isHeld}/>)

    function rollDice(){
        setDice(generateAllNewDice())
    }
  return (
    <main>
      <div className="container">
        {diceElements}
      </div>
      <button className='roll-button' onClick={rollDice}>Roll Dice</button>
    </main>
  )
}