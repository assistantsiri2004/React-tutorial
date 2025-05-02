// import React from 'react'
// import {useState} from 'react'

// const Multiple = () => {
//     const [formData,setFormData] = useState({
//         name:'tammu',
//         email:'',
//         password:'',
//         Age:'',
//         contact:''


//     })
//   return (
//   <>
//   <form>
//   <div>
//         name:- <input value={formData.name} type="text" />
//     </div>
//     <div>
//         Email:- <input type="email" />
//     </div>
    
//     <div>
//         password:- <input type="password" />
//     </div>
//     <div>
//         Age:- <input type="number" />
//     </div>
//     <div>
//         contact:- <input type="text" />
//     </div>
// <div>
// <input
//             type="radio"
//             name="gender"
//             value="Other"
//             checked={gender === 'Other'}
//             onChange={e => setGender(e.target.value)}
//           />{' '}
//           Other
// </div>
//     <div>
//         <button>Submit</button>
//     </div>
    
//     </form></>
//   )
// }

// export default Multiple





// // import React, { useState } from 'react';

// // const Multiple = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     age: '',
// //     contact: '',
// //     gender: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert(
// //       `Form submitted!\n` +
// //       `Name: ${formData.name}\n` +
// //       `Email: ${formData.email}\n` +
// //       `Password: ${formData.password}\n` +
// //       `Age: ${formData.age}\n` +
// //       `Contact: ${formData.contact}\n` +
// //       `Gender: ${formData.gender}`
// //     );
// //     // Optionally reset form:
// //     // setFormData({ name: '', email: '', password: '', age: '', contact: '', gender: '' });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
// //       <div>
// //         <label>
// //           Name:
// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //       </div>

// //       <div>
// //         <label>
// //           Email:
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //       </div>

// //       <div>
// //         <label>
// //           Password:
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //             minLength={6}
// //           />
// //         </label>
// //       </div>

// //       <div>
// //         <label>
// //           Age:
// //           <input
// //             type="number"
// //             name="age"
// //             value={formData.age}
// //             onChange={handleChange}
// //             required
// //             min={1}
// //           />
// //         </label>
// //       </div>

// //       <div>
// //         <label>
// //           Contact:
// //           <input
// //             type="text"
// //             name="contact"
// //             value={formData.contact}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //       </div>

// //       <div>
// //         <p>Gender:</p>
// //         <label>
// //           <input
// //             type="radio"
// //             name="gender"
// //             value="Male"
// //             checked={formData.gender === 'Male'}
// //             onChange={handleChange}
// //             required
// //           />
// //           Male
// //         </label>
// //         <label style={{ marginLeft: '1rem' }}>
// //           <input
// //             type="radio"
// //             name="gender"
// //             value="Female"
// //             checked={formData.gender === 'Female'}
// //             onChange={handleChange}
// //           />
// //           Female
// //         </label>
// //         <label style={{ marginLeft: '1rem' }}>
// //           <input
// //             type="radio"
// //             name="gender"
// //             value="Other"
// //             checked={formData.gender === 'Other'}
// //             onChange={handleChange}
// //           />
// //           Other
// //         </label>
// //       </div>

// //       <div style={{ marginTop: '1rem' }}>
// //         <button type="submit">Submit</button>
// //       </div>
// //     </form>
// //   );
// // };

// // export default Multiple;



import React, { useState } from 'react';

const Multiple = () => {
  const [formData, setFormData] = useState({
    name: 'tammu',
    email: '',
    password: '',
    age: '',
    contact: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted!\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Password: ${formData.password}\n` +
      `Age: ${formData.age}\n` +
      `Contact: ${formData.contact}\n` +
      `Gender: ${formData.gender}`
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          Name:- 
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          Email:- 
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          Password:- 
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          Age:- 
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div>
          Contact:- 
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>

        <div>
          Gender: 
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
            style={{ marginLeft: '10px' }}
          /> Female
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleChange}
            style={{ marginLeft: '10px' }}
          /> Other
        </div>

        <div style={{ marginTop: '10px' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Multiple;
