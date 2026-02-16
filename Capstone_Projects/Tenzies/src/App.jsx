import Die from './components/Die'
import { useState } from 'react'

export default function App(){
  function generateAllNewDice(){
        return new Array(10)
                    .fill(0)
                    .map(()=> Math.ceil(Math.random() * 6))
    }

    const [dice, setDice] = useState(generateAllNewDice())

    const diceElements = dice.map((die)=><Die value = {die}/>)

    /**
     * Challenge: Create a `Roll Dice` button that will re-roll
     * all 10 dice
     * 
     * Clicking the button should generate a new array of numbers
     * and set the `dice` state to that new array (thus re-rendering
     * the array to the page)
     */

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