import React, {useState} from 'react'

const BoxForm = (props) => {
    return (
        <div className="boxForm">
            <form action="submit">
                <div className="form-group">
                    <label htmlFor="color"></label>
                    <input type="text" name="color" />
                </div>
                <button>Add Color</button>
            </form>
        </div>
    )
}

export default BoxForm