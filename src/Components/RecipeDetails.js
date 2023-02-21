import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './Details.css'


const RecipeDetails = () => {

    const [recipe, setRecipe] = useState([])
    const [listIng, setListIng] = useState([])

    const nav = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = async () => {
        const response = await axios.get(`http://localhost:3002/recipes/${id}`);
        setRecipe(response.data)
        setListIng(response.data.listIngredients)
      };

    return ( 
        <div className="recipe-details">
            { recipe && (
                <article>
                    <h1>{recipe.title}</h1>
                    <p className="ing">Ingrediants: {listIng.join(',')}</p>
                    <h1>How to cook</h1>
                    <div className="description">{recipe.method}</div>
                    <p>Time to cook: {recipe.time}</p>
                </article>
            )}
        </div>
     );
}
 
export default RecipeDetails;