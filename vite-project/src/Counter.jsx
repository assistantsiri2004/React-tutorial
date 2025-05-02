// import React ,{useState}from 'react'

// const Counter = () => {
//     const[counter,setCounter]=useState(0);


//     const increase=()=>{
//         setCounter(counter+1);
//         console.log("counter ", counter)
//     }

//     const decrease=()=>{
//         setCounter(counter-1);
//         console.log("counter ", counter)
//     }
//   return (
//     <>

//     <h1>Counter={counter}</h1>
//         <button onclick={increase}>INCREASE</button>
//         <br />
//         <br />
//         <br />
//         <button onclick={decrease}>DECREASE</button>

//     </>

//   )
// }

// export default Counter

import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(prev => prev + 1);
    console.log("counter", counter);
  };

  const decrease = () => {
    setCounter(prev => prev - 1);
    console.log("counter", counter);
  };

  return (
    <>
      <h1>Counter = {counter}</h1>
      <button onClick={increase}>INCREASE</button>
      <br /><br />
      <button onClick={decrease}>DECREASE</button>
    </>
  );
};

export default Counter;
