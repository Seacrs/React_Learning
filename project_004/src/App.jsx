import Joke from "./components/Joke"
import jokes from "./components/jokes"


export default function App(){
        const jokeElements = jokes.map((joke) =>{
                return < Joke setup = {joke.setup}
                                punchLine = {joke.punchline}/>
        })
        return (
                <main>
                        {jokeElements}
                </main>
        )
}