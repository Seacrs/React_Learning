import Die from './components/Die'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function App(){

  /**
     * Challenge: Create a function `hold` that takes
     * `id` as a parameter. For now, just have the function
     * console.log(id).
     * 
     * Then, figure out how to pass that function down to each
     * instance of the Die component so when each one is clicked,
     * it logs its own unique ID property. (Hint: there's more
     * than one way to make that work, so just choose whichever
     * you want)
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

    const [dice, setDice] = useState(generateAllNewDice())

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
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
        {diceElements}
      </div>
      <button className='roll-button' onClick={rollDice}>Roll Dice</button>
    </main>
  )
}