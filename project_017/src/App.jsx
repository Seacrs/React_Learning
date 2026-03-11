import { useState, useEffect, useMemo, useCallback } from 'react'

export default function App(){

  const [items, setItems] = useState([])
  const [input, setInput] = useState('')

  useEffect(()=> {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(data => setItems(data.slice(0, 200)))
  }, [])

  const getText = useCallback((e)=>{
    setInput(e.target.value)
  }, [])

    const filteredItems = useMemo(()=>{
      if(items.length === 0 || !input){
        return items;
      }
      const newData = items.filter(el => el.title.toLowerCase().includes(input.toLowerCase()))

      return newData;

    }, [input, items])

    const listItems = filteredItems.map(item => {
    return (
      <div key={item.id} className='p-2'>
        <p>{item.title}</p>
      </div>
    )
  })

  return (
    <div className='p-10'>
      <input type="text" name='filter' className='border-2 py-1 pl-5' onChange={getText}/>
      <div className='p-3 flex flex-col gap-4'>
        {listItems}
      </div>
    </div>
  )
}