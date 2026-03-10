import {useState, useMemo} from 'react'

export default function App(){
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(()=>{
    return slowFunction(number)
  }, [number])

  const themStyles = useMemo(()=>{
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])


  return (
    <>
      <input type="number" value={number} onChange={e=> setNumber(parseInt (e.target.value))}/>
      <button onClick={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themStyles}>
        {doubleNumber}
      </div>
    </>
  )
}

function slowFunction(num){
  for(let i = 0; i <= 1000000000; i++){}
  return num * 2
}