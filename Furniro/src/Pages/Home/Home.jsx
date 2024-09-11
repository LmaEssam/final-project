import  { useEffect, useState } from 'react';
import dining from '../../assets/image 106.png';
import living from '../../assets/image 100.png';
import bed from '../../assets/image 101.png';
import Features from '../../components/Features/Features';
import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => {
        const categoryMapping = {
          'electronics': { name: 'Dining', img: dining, id: 1 },
          'jewelery': { name: 'Living', img: living, id: 2 }, 
          "men's clothing": { name: 'Bedroom', img: bed, id: 3 } 
        };
        const filteredCategories = Object.keys(categoryMapping)
          .filter(category => data.includes(category))
          .map(category => categoryMapping[category]);
        if (filteredCategories.length === 0) {
          setCategories([
            { name: 'Dining', img: dining, id: 1 },
            { name: 'Living', img: living, id: 2 },
            { name: 'Bedroom', img: bed, id: 3 }
          ]);
        } else {
          setCategories(filteredCategories);
        }
      })
  }, []);
  return (
    <div id="home-container">
      <div id="header-background"></div>
      <h1>Categories</h1>
      <div id='categories'>
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/shop?categoryId=${category.id}`}
            className="category-card"
          >
            <img src={category.img} />
            <p>{category.name}</p>
          </Link>
        ))}
      </div>
      <Features/>
    </div>
  );
}
export default Home