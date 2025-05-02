import React from 'react'
import { useEffect, useState } from 'react'

const UseEffect = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Update document title
        document.title = `Counter: ${counter}`;
        console.log("useEffect is running...!");

        // Cleanup function
        return () => {
            document.title = 'React App'; // Reset title when component unmounts
            console.log("Cleanup: Component unmounting");
        };
    }, [counter]);

    const handleIncrease = () => setCounter(prev => prev + 1);
    const handleDecrease = () => setCounter(prev => prev - 1);

    return (
        <div className="counter-container">
            <h1>Counter: {counter}</h1>
            <div className="button-group">
                <button onClick={handleIncrease}>INCREASE</button>
                <button onClick={handleDecrease}>DECREASE</button>
            </div>
        </div>
    );
};

export default UseEffect;