export default function Event(){

    function handleClick(){
        console.log("I was clicked")
    }
    function handleMouse(){
        console.log("stop that")
    }
    return (
        <main className = "container">
            <img onMouseOver={handleMouse} src="https://picsum.photos/640/360" alt="Placeholder image from Picsum" />
            <button onClick={handleClick}>Click Me</button>
        </main>
    )
}