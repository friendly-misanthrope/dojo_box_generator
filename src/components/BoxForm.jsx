import React, {useState} from 'react'

const BoxForm = (props) => {
    // may not be necessary:
    const {boxList, setBoxList} = props;

    const [box, setBox] = useState({
        id: null,
        color: ''
    })

    const handleColorChange = (e) => {
        setBox(prevBoxState => ({...prevBoxState, [e.target.name]: e.target.value}))
    }

    const validateColor = () => {
        let isValid = true;

        if (box.color.length < 3){
            isValid = false;
        }
        return isValid;
    }

    const createBox = (e) => {
        e.preventDefault();
        let isValid = validateColor();

        if (isValid) {
            let id = crypto.randomUUID();
            let newBox = {...box, id:id}
            setBoxList([...boxList, newBox])
            setBox({
                id: null,
                color: ''
            })
        } else {
            console.log("Color must be 3 characters or longer")
            alert("Color must be 3 characters or longer")
            return isValid
        }
    }

    return (
        <div className="boxForm">
            <form onSubmit={createBox}>
                <div className="form-group">
                    <label htmlFor="color">Box Color: </label>
                    <input type="text" name="color" onChange={handleColorChange} value={box.color} />
                    {
                        box.color.length > 0 && box.color.length < 3 ?
                        <p>Color must be 3 characters or longer</p>
                        :null
                    }
                </div>
                <button>Add Box</button>
            </form>
        </div>
    )
}

export default BoxForm