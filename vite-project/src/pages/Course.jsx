import React from 'react';
import { useParams,Link,useLocation} from 'react-router-dom';

const Course = () => {
  console.log(useLocation());
  const arr = [
    { id: "MERN001", course_name: "MERN_Stack", price: 10000, duration: "5 months" },
    { id: "JAVA002", course_name: "Java_Full_stack", price: 15000, duration: "5 months" },
    { id: "PY0102", course_name: "Python_Full_Stack", price: 5000, duration: "5 months" },
    { id: "REACT99", course_name: "React.JS", price: 25000, duration: "5 months" },
  ];

  const { id } = useParams();

  const details = arr.filter((data) => data.id === id); // Use find() instead of filter()

  // if (!course) {
  //   return <h2>No course found with ID: {id}</h2>;
  // }

  return (
    <>


     <h1>hello webste!</h1>
    {/* <h2>course id ={id}</h2> */}
      <h2>Course ID: {id}</h2>
      <h2>Course Name: {details[0].course_name}</h2>
      <h2>Duration: {details[0].duration}</h2>
      <h2>Price: ₹{details[0].price}</h2>
      <button><Link to={'/t1'} style={{
        textDecoration:"none",
        color:"black"
      }}>All courser here!</Link></button>
    </>
  );
};

export default Course;
