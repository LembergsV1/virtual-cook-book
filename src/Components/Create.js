import React, { useState } from 'react';
import './Create.css'

const Create = () => {
    const [ title, setTitle] = useState('')
    const [ ingrid, setIngrid] = useState('')
    const [ how, setHow] = useState('')
    const [ time, setTime] = useState('')
    const [ listIngrid, setListIngrid] = useState('')


    const handleIngrid = (e) => {
        e.preventDefault()
        setListIngrid([...listIngrid, ingrid])
        setIngrid('')
    }


    return (
        <div className="create">
            <h2>What will we cook?</h2>
            <form>
                <label>Recipe name:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Recipe Ingridients:</label>
                <input
                    type="text"
                    required
                    value={ingrid}
                    onChange={(e) => setIngrid(e.target.value)} 
                />
                <button type="button" onClick={handleIngrid}>Add</button>
                <p>Current ingredients: </p>
                <label>How to cook:</label>
                <input
                    type="text"
                    required
                    value={how}
                    onChange={(e) => setHow(e.target.value)} 
                    
                />
                <label>Cooking time (In minutes):</label>
                <input
                    type="number"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)} 
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default Create;