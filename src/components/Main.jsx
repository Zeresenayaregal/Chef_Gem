import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromLlama } from "../responded.js"



export default function Main(){
    const [ingrediantList, setIngrediantList] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipeShown, setRecipeShown] = React.useState(false)
    
    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromLlama(ingredients)
        console.log(recipeMarkdown)
    }

    function addIngrediant(formData){
        const newIngrediant = formData.get("ingrediant")
        setIngrediantList(prevIngList => [...prevIngList, newIngrediant])

    }

    return (
        <main>
            <form action={addIngrediant} className="add-ingrediant">
                <input aria-label="Add ingrediant" 
                       placeholder="e.g. Onion" 
                       type="text" 
                       name="ingrediant" 
                       id="ingrediant" />
            <button> + Add ingerediant</button>
            </form>
        
            {ingrediantList.length > 0 ? <IngredientsList 
                                                    length={ingrediantList.length}
                                                    ingrediantList={ingrediantList}
                                                    getRecipe={getRecipe}/>: null}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}