import React from 'react'
import './markdown.css'

const MarkDown = ({ handleChange, markdown }) => {
    return (
        <div className='previewer'>
            <textarea value={ markdown } onChange={ handleChange } className="container">
                
            </textarea >
        </div>
    )
}

export default MarkDown
