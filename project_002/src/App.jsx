import Header from "./Components/Header"
import Entry from "./Components/entry"
import data from "./data"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App(){
  const dataElements = data.map((country) =>{
    return <Entry key = {country.id}
                  {...country}/>
    })
  return(
    <>
      <Header />
      {dataElements}
      </>
  )
}