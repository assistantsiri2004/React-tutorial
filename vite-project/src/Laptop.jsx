import React from 'react'
import './Laptop.css'
// import '.src/Laptop.css'

const Laptop = ({ brand, model, warranty }) => {
    // const obj = {
    //     backgroundColor: "grey",
    //     margin: "20px",
    //     padding: "1px",
    //     borderRadius: "10px",
    //     border: "2px solid yellow"

    // }
    return (
        <>
            <div className='div'>
                <h3>brand name ={brand}</h3>
                <h3>model name={model}</h3>
                <h3>warranty years ={warranty}</h3>
            </div>

        </>
    )
}

export default Laptop