import React from 'react'

const Showproduct = () => {
   
        const product =[
            {id:1,name:'tamanna',contact:8982218796},
            {id:2,name:'vivek',contact:7489123852},
            {id:1,name:'tamanna',contact:8982218796},
            {id:2,name:'vivek',contact:7489123852},

        ];

    
  return (
    <div>
{product.map((data)=>(<div key={data.id}>
    <h1>name ={data.name}</h1>
    <h1>contact ={data.contact}</h1>
</div>))}
    </div>
  )
}

export default Showproduct