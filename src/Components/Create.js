import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import './Create.css'
import axios from "axios";


const Create = () => {
    const [ title, setTitle] = useState('')
    const [ ingredients, setIngredients ] = useState('')
    const [ method, setMethod ] = useState('')
    const [ time, setTime ] = useState('')
    const [ listIngredients, setListIngredients ] = useState([])

    const nav = useNavigate();
  


const isPending = useSelector(
    (state) => state.pending
)




  const handleIngredients = (e) => {
    e.preventDefault()
    setListIngredients([...listIngredients,ingredients])
    setIngredients('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await axios.post("http://localhost:3002/recipes", {
            title,
            listIngredients,
            method,
            time,
        })
        nav('/')
    } catch (error) {
        console.log(error)
    }
}

   



    return (
        <div className="create">
            <h2>Add a new recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>Recipe title:</label>
                <input 
                    className="inp"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Recipe ingredients:</label>
                <input 
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <button type="button" onClick={handleIngredients}>Add</button>
                <p>Current ingredients: { listIngredients.toString() }</p>
                <label>Recipe method:</label>
                <textarea 
                    className="inp"
                    required
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                />
                <label>Cooking time (in minutes):</label>
                <input 
                    className="inp"
                    type="number"
                    min="0"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                { isPending && <button type="submit">Submit</button>}
                { !isPending && <button disabled>Submiting...</button>}
            </form>
        </div>
    )
}

export default Create;