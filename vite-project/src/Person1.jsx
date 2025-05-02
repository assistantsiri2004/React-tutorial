import React from 'react'

const Person1 = ({name,age,pancard,price}) => {
  return (
<>

<div>
    <h3>
        <h3>name ={name}</h3>
        {age>18? <h3>"you can drive"</h3> : <h3>"you can not drive"</h3>}

    </h3>
    <h3>
        {pancard?<h3>"you can open account in our bank"</h3>: <h3>"you can not open account here"</h3>}
    </h3>
    <h3>
       {price>300 && <h2>"you can purchase a iphone"</h2>}
    </h3>
</div>
</>
  )
}

export default Person1