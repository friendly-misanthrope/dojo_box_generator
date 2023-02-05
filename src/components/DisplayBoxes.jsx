import React from 'react'
import './DisplayBoxes.css'

const DisplayBoxes = (props) => {

    const {boxList} = props;
    
    return (
        <div className="boxes">
            {
                boxList.map((box) => (
                    <div key={box.id} className="box" style={{backgroundColor: box.color, height: '100px', width: '100px'}}></div>
                ))
            }
            
        </div>
    )
}



export default DisplayBoxes;