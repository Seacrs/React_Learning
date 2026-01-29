export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"].map(el =><li> {el} </li>)
/**
     * Challenge:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
     */
    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input type="text" placeholder="e.g. oregano" aria-label= "Add-Ingredient"/>
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredients}
            </ul>
        </main>
    )
}