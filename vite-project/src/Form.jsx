// import React, { useState } from 'react'

// const Form = () => {
//     const [name, setName] = useState('tamanna')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const handlesubmit=(e)=>{
//         e.preventDefault();
//         alert("your form has been submitted successfully",+name+" "+email+ " "+password)
//     }


//     return (
//         <div>
//             <form onSubmit={handlesubmit}>
//                 <div>Name : <input value={ name} onChange={(e)=>setName(e.target.value)} type="text" />name={name}</div>
//                 <br />
//                 <div>Email: <input value={ email} onChange={(e)=>setName(e.target.value)}type="email" /></div>
//                 <br />
//                 <div>Password : <input value={password } onChange={(e)=>setName(e.target.value)} type="password" /></div>
//                 <br />
//                 <button>submit</button>
//             </form>
//         </div>
//     )
// }

// export default Form



import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('tamanna');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Your form has been submitted successfully.\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Password: ${password}`
    );
    // Optionally, clear the form:
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:{' '}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Email:{' '}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Password:{' '}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
