import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const arr = [
    { id: "MERN001", course_name: "MERN_Stack", price: 10000, duration: "5 months" },
    { id: "JAVA002", course_name: "Java_Full_stack", price: 15000, duration: "5 months" },
    { id: "PY0102", course_name: "Python_Full_Stack", price: 5000, duration: "5 months" },
    { id: "REACT99", course_name: "React.JS", price: 25000, duration: "5 months" },
  ];

  return (
    <div>
      <h2>Available Professional Courses</h2>
      <ul>
        {arr.map((data) => (
          <li key={data.id}>
            <Link to={`/t1/${data.id}`}>{data.course_name}</Link> - {data.duration} - ₹{data.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
