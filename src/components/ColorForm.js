import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    const isColor = (strColor) => {
        const s = new Option().style;
        s.color = strColor;
        return s.color !== '';
    }

    const handleSubmit = (e) => {
        // We still want to eliminate the default behavior of our form submittal
        e.preventDefault()
        // addColor, the function we just built, should be available within props.
        if (isColor(input)) {
            props.addColor(input)
        }
        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)}
                value={input} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm;