import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../assets/Meubel House_Logos-05.png'
import Syltherine from '../../assets/Images.png'
import Leviosa from '../../assets/Images 1.png'
import Lolito from '../../assets/image 3.png'
import Respira from '../../assets/Images 2.png'
import dining5 from '../../assets/image 5.jpeg'
import dining6 from '../../assets/image 6.jpeg'
import dining7 from '../../assets/image 7.jpeg'
import dining8 from '../../assets/image 8.jpeg'
import dining9 from '../../assets/image 9.jpeg'
import dining10 from '../../assets/image 10.jpeg'
import dining11 from '../../assets/image 11.jpeg'
import dining12 from '../../assets/image 12.jpeg'
import dining13 from '../../assets/image 13.jpeg'
import dining14 from '../../assets/image 14.jpeg'
import dining15 from '../../assets/image 15.jpeg'
import dining16 from '../../assets/image 16.jpeg'
import dining17 from '../../assets/image 17.jpeg'
import dining18 from '../../assets/image 18.jpeg'
import dining19 from '../../assets/image 19.jpeg'
import dining20 from '../../assets/image 20.jpeg'
import dining21 from '../../assets/image 21.jpeg'
import living1 from '../../assets/Living/living 1.png'
import living2 from '../../assets/Living/living 2.jpeg'
import living3 from '../../assets/Living/living 3.jpeg'
import living4 from '../../assets/Living/living 4.jpeg'
import living5 from '../../assets/Living/living 5.jpeg'
import living6 from '../../assets/Living/living 6.jpeg'
import living7 from '../../assets/Living/living 7.jpeg'
import living8 from '../../assets/Living/living 8.jpeg'
import living9 from '../../assets/Living/living 9.jpeg'
import living10 from '../../assets/Living/living 10.jpeg'
import living11 from '../../assets/Living/living 11.jpeg'
import living12 from '../../assets/Living/living 12.jpeg'
import living13 from '../../assets/Living/living 13.jpeg'
import living14 from '../../assets/Living/living 14.jpeg'
import living15 from '../../assets/Living/living 15.jpeg'
import living16 from '../../assets/Living/living 16.jpeg'
import living17 from '../../assets/Living/living 17.jpeg'
import living18 from '../../assets/Living/living 18.jpeg'
import living19 from '../../assets/Living/living 19.jpeg'
import living20 from '../../assets/Living/living 20.jpeg'
import living21 from '../../assets/Living/living 21.jpeg'
import bed1 from '../../assets/Bedroom/bed 1.jpeg'
import bed2 from '../../assets/Bedroom/bed 2.jpeg'
import bed3 from '../../assets/Bedroom/bed 3.jpeg'
import bed4 from '../../assets/Bedroom/bed 4.jpeg'
import bed5 from '../../assets/Bedroom/bed 5.jpeg'
import bed6 from '../../assets/Bedroom/bed 6.jpeg'
import bed7 from '../../assets/Bedroom/bed 7.jpeg'
import bed8 from '../../assets/Bedroom/bed 8.jpeg'
import bed9 from '../../assets/Bedroom/bed 9.jpeg'
import bed10 from '../../assets/Bedroom/bed 10.jpeg'
import bed11 from '../../assets/Bedroom/bed 11.jpeg'
import bed12 from '../../assets/Bedroom/bed 12.jpeg'
import bed13 from '../../assets/Bedroom/bed 13.jpeg'
import bed14 from '../../assets/Bedroom/bed 14.jpeg'
import bed15 from '../../assets/Bedroom/bed 15.jpeg'
import bed16 from '../../assets/Bedroom/bed 16.jpeg'
import bed17 from '../../assets/Bedroom/bed 17.jpeg'
import bed18 from '../../assets/Bedroom/bed 18.jpeg'
import bed19 from '../../assets/Bedroom/bed 19.jpeg'
import bed20 from '../../assets/Bedroom/bed 20.jpeg'
import bed21 from '../../assets/Bedroom/bed 21.jpeg'
import Features from '../../components/Features/Features';
import './Shop.css'
function Shop() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(9)
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const categoryId = queryParams.get('categoryId')
  useEffect(() => {
    if (!categoryId) {
      filterDiningProducts() 
    }
    else if (categoryId === '1') {
      filterDiningProducts()
    } else if (categoryId === '2') {
      filterLivingProducts()
    } else if (categoryId === '3') {
      filterBedroomProducts();}
      else {
      fetchProducts();
    }
  }, [categoryId])
   const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }
  const filterDiningProducts = () => {
    const diningProducts = [
      { name: 'Syltherine',label:'Stylish cafe chair' ,price: 'Rs 2.500.000', id:1, image: Syltherine },
      { name: 'Leviosa', label:'Stylish cafe chair' ,price: 'Rs 2.500.000', id:2, image: Leviosa },
      { name: 'Lolito', label:'Luxury big sofa' ,price: 'Rs 7.000.000', id:3, image: Lolito },
      { name: 'Respira',  label:'Outdoor bar table and stool' ,price: 'Rs 500.000', id:4, image: Respira },
      { name: 'Mid-Mod Love', label:'maximize your dining space',price: 'Rs 2.900.000', id:5, image: dining5 },
      { name: 'Minimalism', label:'wood and iron combine in sleek',price: 'Rs 2.000.000', id:6, image: dining6 },
      { name: 'Modern Americana', label:"rustic log cabin's wood-and-chink walls",price: 'Rs 2.300.000', id:7, image: dining7 },
      { name: 'Bold Window Treatments', label:'antique chairs and the brass chandelier',price: 'Rs 3.000.000', id:8, image: dining8 },
      { name: 'Casually Artistic', label:'color palette is tempered by soft grays and whites',price: 'Rs 1.500.000', id:9, image: dining9 },
      { name: 'Midcentury Modern', label:'vibrant shades and a bold glass light',price: 'Rs 1.000.000', id:10, image: dining10 },
      { name: 'Classic Composition', label:'dining room is painted a deep blue',price: 'Rs 5.000.000', id:11, image: dining11 },
      { name: 'Farmhouse-inspired', label:'gray table surrounded by Parsons and caneback chairs',price: 'Rs 2.800.000', id:12, image: dining12 },
      { name: 'Tackle Perfection', label:' unusual layout with creativity',price: 'Rs 2.200.000', id:13, image: dining13 },
      { name: 'Intimate Gathering', label:'Woven chairs smooth wood-and-metal table',price: 'Rs 1.200.000', id:14, image: dining14 },
      { name: 'Cultivated Exhibit', label:'Mix and match different frames',price: 'Rs 1.000.000', id:15, image: dining15 },
      { name: 'Provincial Charm', label:'knotty pine table with low rush-seat chairs',price: 'Rs 6.000.000', id:16, image: dining16 },
      { name: 'Collected Over Time', label:'collecting pieces — a variety of chairs',price: 'Rs 3.000.000', id:17, image: dining17 },
      { name: 'Brilliant Illuminations', label:'streamlined wood table and classic white armchairs',price: 'Rs 2.340.000', id:18, image: dining18 },
      { name: 'Blending Design', label:'wood table with mirrored base and caneback chairs',price: 'Rs 1.340.000', id:19, image: dining19 },
      { name: 'Farmhouse Finery', label:'wood dining table surrounded by black metal chairs',price: 'Rs 1.990.000', id:20, image: dining20 },
      { name: 'Black buffet', label:' black buffet with its brass knobs and natural wood',price: 'Rs 2.990.000', id:21, image: dining21 },
    ];
    setProducts(diningProducts);
  };
  const filterLivingProducts = () => {
    const livingProducts = [
      { name: 'Asgaard sofa', price: 'Rs 250,000.00', label: 'cozy sofa with wood hands', image: living1, id:22},
      { name: 'cozy throw blanket', price: 'Rs 20,000.00', label: 'folded neatly across the sofa back', image: living2, id:23},
      { name: 'Corral Clutter', price: 'Rs 1,000.00', label: 'decorative tray and fill it with colorful books', image: living3, id:24},
      { name: 'Cozy Convo', price: 'Rs 1,100.00', label: 'The easiest living room makeover', image: living4, id:25},
      { name: 'Nail-Head Trim', price: 'Rs 1,220.00', label: 'stylish little gems and a hammer', image: living5, id:26},
      { name: 'long wood bench', price: 'Rs 2,200.00', label: 'Easy End Table Upcycle', image: living6, id:27},
      { name: 'Gold and brass hues', price: 'Rs 1,000.00', label: 'Modernize Lights With Matte Black Paint', image: living7, id:28},
      { name: 'Firewood storage design', price: 'Rs 1,220.00', label: 'Artistic Firewood Storage', image: living8, id:29},
      { name: 'High-contrast corner', price: 'Rs 2,220.00', label: 'Embrace Abstract Thinking', image: living9, id:30},
      { name: 'Crystal Sinclair', price: 'Rs 3,220.00', label: 'Opt for an Unexpected TV Display', image: living10, id:31},
      { name: 'Faux monstera', price: 'Rs 1,200.00', label: 'Style With Easy Art', image: living11, id:32},
      { name: 'Light fixtures', price: 'Rs 1,221.00', label: 'Swap Out the Ceiling Fixture', image: living12, id:33},
      { name: 'Trendy Pattern With a Stencil', price: 'Rs 1,120.00', label: 'friendly acrylic craft paint', image: living13, id:34},
      { name: 'Bring In the Blooms', price: 'Rs 5,000.00', label: 'Tulips are a natural choice', image: living14, id:35},
      { name: 'Handwork frames', price: 'Rs 3,000.00', label: 'Frame Your Kiddo\'s Creations', image: living15, id:36},
      { name: 'Frame Fun Finds', price: 'Rs 4,100.00', label: 'mass-produced printed posters', image: living16, id:37},
      { name: 'Wood coffee table', price: 'Rs 2,900.00', label: 'Give an Old Coffee Table New Usefulness', image: living17, id:38},
      { name: 'Happy Hue', price: 'Rs 1,820.00', label: 'freshens up a room with cheery yellow paint', image: living18, id:39},
      { name: 'Simple Slipcover', price: 'Rs 5,220.00', label: 'vintage fabrics give your slipcover perfect look.', image: living19, id:40},
      { name: 'Rich Trunk', price: 'Rs 2,320.00', label: 'Trunk-style coffee tables stylish', image: living20, id:41},
      { name: 'Graphic Pattern on a Fence', price: 'Rs 1,220.00', label: 'create a graphic outdoor focal point', image: living21, id:42},
    ];
    setProducts(livingProducts)
  }
  const filterBedroomProducts = () => {
    const bedroomProducts = [
      { name: 'Lake Blue', price: 'Rs 1,000.00', label: 'The warm mid-toned blue looks stunning ', image: bed1, id:43},
      { name: 'Cobalt Blue', price: 'Rs 2,220.00', label: 'pure pigment turns heads in modern bedrooms alike', image: bed2, id:44},
      { name: 'Aegean Blue', price: 'Rs 1,320.00', label: 'Aegean Sea to your bedroom with the help of this warm', image: bed3, id:45},
      { name: 'style wardrobes', price: 'Rs 3,220.00', label: 'Elegant and Efficient', image: bed4, id:46},
      { name: 'Window Seating', price: 'Rs 5,000.00', label: 'A soft blanket and a cushion create a cozy window seat', image: bed5, id:47},
      { name: 'A modern green nightstand', price: 'Rs 1,120.00', label: 'Green and Gorgeous', image: bed6, id:48},
      { name: 'Taupe blackout curtains', price: 'Rs 6,220.00', label: 'Bamboo roman shades that filter light', image: bed7, id:49},
      { name: 'Easy Mobility', price: 'Rs 2,210.00', label: 'A black-and-brown woven rope laundry hamper', image: bed8, id:50},
      { name: 'Midcentury-Inspired Style', price: 'Rs 1,900.00', label: 'Made from walnut veneer and finished with dark chocolate', image: bed9, id:51},
      { name: 'Botanical Mural', price: 'Rs 3,320.00', label: 'A botanical mural on the bedroom ceiling', image: bed10, id:52},
      { name: 'Gray Blue', price: 'Rs 1,800.00', label: 'Contemporary bedroom walls to begin calm and clarity', image: bed11, id:53},
      { name: 'Blackish Cyan', price: 'Rs 2,000.00', label: 'lime-topped side tables and a sensuous coral velvet quilt', image: bed12, id:54},
      { name: "Robin\'s-Egg Blue", price: 'Rs 3,900.00', label: 'Dark wood accents and furnishings add depth and texture', image: bed13, id:55},
      { name: 'Stormy walls', price: 'Rs 1,000.00', label: 'Developed quite the reputation for deploying pastels', image: bed14, id:56},
      { name: 'Savvy Storage', price: 'Rs 2,230.00', label: 'turn lumber and rope into a space-saving hanging shelf', image: bed15, id:57},
      { name: 'Your Restful Retreat', price: 'Rs 4,290.00', label: 'Excellent space for showing off your personal style', image: bed16, id:58},
      { name: 'Eclectic', price: 'Rs 2,920.00', label: 'Blending a variety of time periods and design styles', image: bed17, id:59},
      { name: 'Evoking the breeze', price: 'Rs 1,920.00', label: "coastal bedroom that's full of woven textures", image: bed18, id:60},
      { name: 'Chinoiserie', price: 'Rs 3,200.00', label: 'this timeless style that originally rose', image: bed19, id:61},
      { name: 'Romantic', price: 'Rs 2,100.00', label: 'Romantic style is the perfect complement to a bedroom', image: bed20, id:62},
      { name: 'Dreary bedroom', price: 'Rs 1,220.00', label: 'Make Your Bedroom a Private Sanctuary', image: bed21, id:63},
    ];
    setProducts(bedroomProducts)
  }
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1)
    }
  }
  return (
    <>
    <div id="shop-container">
      <div id="shop-header">
      <img src={logo} />
        <h1>Shop</h1>
        <nav className="breadcrumb">
        <Link to={'/'} >Home</Link> &gt; <span>Shop</span>
        </nav>
      </div>
      <div id="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image}/>
            <h3>{product.name}</h3>
            <label>{product.label}</label>
            <p>{product.price}</p>
            <Link to={`/Product/${product.id}`} id="details-btn">More Details</Link>
          </div>
        ))}
      </div>
      <div id="pagination">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => paginate(number)} className="page-link">
            {number} 
          </button>
        ))}
        <button onClick={nextPage} className="page-link">Next</button>
      </div>
    </div>
    <Features/>
    </>
  )
}
export default Shop