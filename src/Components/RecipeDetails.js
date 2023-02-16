import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch'; 
import { useSelector } from "react-redux";
import './Details.css'


const RecipeDetails = () => {

    const nav = useNavigate()
    const { id } = useParams()

    const url = useSelector(
        (state) => state.url.url
    )

    const { data: recipe, error, isPending } = useFetch(url + id);

   
 
    return ( 
        <div className="recipe-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { recipe && (
                <article>
                    <h1>{recipe.title}</h1>
                    <p className="ing">Ingrediants: {recipe.listIngredients.join(',')}</p>
                    <h1>How to cook</h1>
                    <div className="description">{recipe.method}</div>
                    <p>Time to cook: {recipe.time}</p>
                </article>
            )}
        </div>
     );
}
 
export default RecipeDetails;