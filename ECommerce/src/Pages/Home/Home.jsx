import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from "react-router-dom";


const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data => setCategories(data))
           .catch(error => console.error('Error fetching data:', error));
  }, []);

    return (
      <div className="container-home">
        <div className="title">Categories</div>
        <div className="categories">
          <div className="category">
            {categories.map((category, index) => (
              <div className="category" key={index}>
                  <Link className="category-name" to={''}>{category}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
