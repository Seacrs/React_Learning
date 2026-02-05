import React from "react"
export default function Main(){
    const [ingredient, setIngredient] = React.useState([])

    // const ingredients = ["Chicken", "Oregano", "Tomatoes"].map(el =><li> {el} </li>)

    const ingredientsListItems = ingredient.map(ingredient => <li key={ingredient}>{ingredient}</li>)

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredient(prev => [...prev, newIngredient])
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input type="text" placeholder="e.g. oregano" aria-label= "Add-Ingredient" name="ingredient"/>
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}