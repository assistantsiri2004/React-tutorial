import React from 'react'
import './events.css'

const Events = () => {
    const handleclick =()=>{
alert("button is clicked !");
    }
    const addition=(a)=>{
        alert(a+10);
    }
  return (
    <>

<div className='event'>Events</div>

<br />
<button onMouseOver={handleclick}>click this button!</button>
<br />
<button onClick={()=>addition(10)}>button 2</button>
    </>
  
  )
}

export default Events