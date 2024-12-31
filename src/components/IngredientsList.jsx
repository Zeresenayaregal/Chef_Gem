export default function IngredientsList(props){
    const ingListElement = props.ingrediantList.map(ing => <li>{ing}</li>)
    return(
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingListElement}</ul>
                {props.length > 3 ? <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>: null}
        </section>
    )
}