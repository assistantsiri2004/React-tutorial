import React from 'react';
import Product from './pages/Product';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Course from './pages/Course';

const App = () => {
  const location=useLocation();
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/t1" element={<Product />} /> */}
          <Route path="/t1" element={<Product />} />
          <Route path="/t1/:id" element={<Course />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
