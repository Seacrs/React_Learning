import React from "react"
import IngredientList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
            ["all the main spices", "pasta", "ground beef", "tomato paste"]
        )

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [recipeShown, setRecipeShown] = React.useState(false)
    
    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && <IngredientList ingredients={ingredients}
                                                        toggle={toggleRecipeShown}/>
            }
            
            
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}