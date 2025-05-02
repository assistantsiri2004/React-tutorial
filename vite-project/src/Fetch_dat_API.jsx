// import React, { useEffect } from 'react';

// const Fetch_dat_API = () => {
//     useEffect(() => {
//         const fetchdataAPI = async () => {
//             try {
//                 const api = await fetch('https://jsonplaceholder.typicode.com/todos');
//                 const data = await api.json();
//                 console.log("my data =", data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//         fetchdataAPI();
//     }, []); // Empty dependency array means it runs once when component mounts

//     return (
//         <div>Fetch_dat_API</div>
//     );
// };

// export default Fetch_dat_API;



import React, { useEffect,useState } from 'react'

const Fetch_dat_API = () => {
    const [APIdata, setAPIdata] = useState([])
    useEffect(() => {
        const fetchdataAPI = async () => {
            try {
                const api = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await api.json();
                setAPIdata(data);
                console.log("my data =", data)
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }

        };
        fetchdataAPI();
    }, []);

    return (
        <div 
    >{APIdata.map((data)=><div key={data.id}
    style={{
        backgroundColor:'grey',
        border:'2px solid black',
        margin:'10px',
        borderRadius:'4px',
        textAlign:'center'}}
>
            <p>(1)hello</p>
             <p>(2){data.id}</p>
             <p>(3){data.title}</p>
             <p>(4)Completed: {data.completed.toString()}</p>


           
            
        </div>)}</div>
    )
}

export default Fetch_dat_API 