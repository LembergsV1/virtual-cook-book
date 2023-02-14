import {useParams } from "react-router-dom";
import { useAPI } from "./apiContext";
import useFetch from "./useFetch";

const RecipeDetails = () => {
    const {id} = useParams()
    const {url} = useAPI()
    const {data: recipe, error, isPending} = useFetch(url + id)

    return (
        <div className="recipe-details">
            {isPending &&<div>Loading</div>}
            {error &&<div>{error}</div>}
            {recipe && (
                <article>
                    <h1>{recipe.title}</h1>
                    <p className="ing">Ingrediants: {recipe.listIngredients.join(',')}</p>
                    <h1>How to cook</h1>
                    <div>{recipe.method}</div>
                    <p>Time to cook: {recipe.time}</p>
                </article>
            )}
        </div>
    );
}

export default RecipeDetails;