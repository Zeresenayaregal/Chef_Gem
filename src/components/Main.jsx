import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getGemResponse } from "../responded.js"



export default function Main(){
    const [ingredientList, setIngredientList] = React.useState([])
    const [recipeOut, setRecipeOut] = React.useState("");
    
    async function getRecipe() {
        const gemResponse = await getGemResponse(ingredientList);
        setRecipeOut(gemResponse);
    }

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredientList(prevIngList => [...prevIngList, newIngredient])

    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient">
                <input aria-label="Add ingredient" 
                       placeholder="e.g. Onion" 
                       type="text" 
                       name="ingredient" 
                       id="ingredient" />
            <button> + Add ingerediant</button>
            </form>
        
            {ingredientList.length > 0 ? <IngredientsList 
                                                    length={ingredientList.length}
                                                    ingredientList={ingredientList}
                                                    getRecipe={getRecipe}/>: null}
            {recipeOut && <ClaudeRecipe outPut={recipeOut}/>}
        </main>
    )
}