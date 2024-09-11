import { useParams,Link} from 'react-router-dom';
import { useState, useEffect,useContext } from 'react';
import { CartContext } from '../Layout/Layout'; 
import Syltherine from '../../assets/Images.png';
import Leviosa from '../../assets/Images 1.png';
import Lolito from '../../assets/image 3.png';
import Respira from '../../assets/Images 2.png';
import dining5 from '../../assets/image 5.jpeg';
import dining6 from '../../assets/image 6.jpeg';
import dining7 from '../../assets/image 7.jpeg';
import dining8 from '../../assets/image 8.jpeg';
import dining9 from '../../assets/image 9.jpeg';
import dining10 from '../../assets/image 10.jpeg';
import dining11 from '../../assets/image 11.jpeg';
import dining12 from '../../assets/image 12.jpeg';
import dining13 from '../../assets/image 13.jpeg';
import dining14 from '../../assets/image 14.jpeg';
import dining15 from '../../assets/image 15.jpeg';
import dining16 from '../../assets/image 16.jpeg';
import dining17 from '../../assets/image 17.jpeg';
import dining18 from '../../assets/image 18.jpeg';
import dining19 from '../../assets/image 19.jpeg';
import dining20 from '../../assets/image 20.jpeg';
import dining21 from '../../assets/image 21.jpeg';
import living1 from '../../assets/Living/living 1.png';
import living2 from '../../assets/Living/living 2.jpeg';
import living3 from '../../assets/Living/living 3.jpeg';
import living4 from '../../assets/Living/living 4.jpeg';
import living5 from '../../assets/Living/living 5.jpeg';
import living6 from '../../assets/Living/living 6.jpeg';
import living7 from '../../assets/Living/living 7.jpeg';
import living8 from '../../assets/Living/living 8.jpeg';
import living9 from '../../assets/Living/living 9.jpeg';
import living10 from '../../assets/Living/living 10.jpeg';
import living11 from '../../assets/Living/living 11.jpeg';
import living12 from '../../assets/Living/living 12.jpeg';
import living13 from '../../assets/Living/living 13.jpeg';
import living14 from '../../assets/Living/living 14.jpeg';
import living15 from '../../assets/Living/living 15.jpeg';
import living16 from '../../assets/Living/living 16.jpeg';
import living17 from '../../assets/Living/living 17.jpeg';
import living18 from '../../assets/Living/living 18.jpeg';
import living19 from '../../assets/Living/living 19.jpeg';
import living20 from '../../assets/Living/living 20.jpeg';
import living21 from '../../assets/Living/living 21.jpeg';
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
import './Product.css';
let productsData = [];
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  
  const[counter,setcounter]=useState(1)
  function Increment(){
      setcounter(counter+1)

  }
  function Decrement(){
   if(counter>0){
      setcounter(counter-1)
   }
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => {
        productsData = [
          {
            id: data.id,
            name: data.title,
            description: data.description,
            price: parseFloat(data.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
            category: data.category,
            image: data.image,
          },
    { id: 1, name: 'Syltherine', description:"The Syltherine is a sleek and modern cafe chair designed to bring comfort and style to any dining setting. Its clean lines and ergonomic design make it an ideal choice for contemporary cafes and dining spaces." , price: 'Rs 2.500.000', category: 'Dining', image: Syltherine,rating:3,review:'2 customers review' },
    { id: 2, name: 'Leviosa', description: "The Leviosa chair offers a blend of comfort and elegance, featuring a sturdy frame and a smooth, minimalist design. Perfect for both formal dining rooms and casual cafe settings." , price: 'Rs 2.500.000', category: 'Dining', image: Leviosa,rating:4,review:'6 customers review' },
    { id: 3, name: 'Lolito', description: "The Lolito sofa is the epitome of luxury and comfort, providing ample seating space with a plush, cushioned design. It's an excellent centerpiece for any living room or lounge area, offering both style and relaxation.", price: 'Rs 7.000.000', category: 'Dining', image: Lolito,rating:5,review:'7 customers review' },
    { id: 4, name: 'Respira', description: "The Respira set is perfect for outdoor dining or bar areas, featuring a durable table and matching stools that are resistant to weather elements. It brings a modern touch to any patio or garden." , price: 'Rs 500.000', category: 'Dining', image: Respira,rating:2.5,review:'1 customer review' },
    { id: 5, name: 'Mid-Mod Love', description: "The Mid-Mod Love dining set combines mid-century design with modern functionality, ideal for those looking to maximize space without compromising on style." , price: 'Rs 2.900.000', category: 'Dining', image: dining5,rating:3.5,review:'5 customers review' },
    { id: 6, name: 'Minimalism', description: "This minimalist dining set features a sleek combination of wood and iron, offering a contemporary look that fits perfectly into any modern home." , price: 'Rs 2.000.000', category: 'Dining', image: dining6,rating:3,review:'6 customers review' },
    { id: 7, name: 'Modern Americana', description: "Modern Americana brings the charm of a rustic cabin into your home with its sturdy wood design and classic Americana style, perfect for cozy, intimate dining." , price: 'Rs 2.300.000', category: 'Dining', image: dining7,rating:4,review:'7 customers review' },
    { id: 8, name: 'Bold Window Treatments', description: "This dining set is designed to make a statement, combining antique chairs with a bold brass chandelier to create a dining space that's both elegant and dramatic." , price: 'Rs 3.000.000', category: 'Dining', image: dining8,rating:3.5,review:'1 customer review' },
    { id: 9, name: 'Casually Artistic', description: "The Casually Artistic dining set features a muted color palette with soft grays and whites, perfect for creating a relaxed and inviting dining atmosphere." , price: 'Rs 1.500.000', category: 'Dining', image: dining9,rating:2.5,review:'6 customers review' },
    { id: 10, name: 'Midcentury Modern', description: "This set brings the vibrant, bold style of mid-century design to your dining room, complete with a striking glass light fixture that adds a pop of color." , price: 'Rs 1.000.000', category: 'Dining', image: dining10,rating:1.5,review:'5 customers review' },
    { id: 11, name: 'Classic Composition', description:  "Classic Composition is all about timeless elegance, featuring deep blue tones and classic design elements that create a sophisticated dining environment." , price: 'Rs 5.000.000', category: 'Dining', image: dining11,rating:3.5,review:'3 customers review' },
    { id: 12, name: 'Farmhouse-inspired', description: "This farmhouse-inspired dining set blends rustic charm with modern comfort, making it perfect for family gatherings and cozy dinners." , price: 'Rs 2.800.000', category: 'Dining', image: dining12,rating:2.5,review:'6 customers review' },
    { id: 13, name: 'Tackle Perfection', description:  "Tackle Perfection is designed for those who appreciate creativity in design, offering a unique layout that’s both functional and visually striking." , price: 'Rs 2.200.000', category: 'Dining', image: dining13,rating:5,review:'7 customers review' },
    { id: 14, name: 'Intimate Gathering', description: "This set is perfect for intimate dinners, featuring comfortable woven chairs and a smooth wood-and-metal table that creates a warm and inviting atmosphere." , price: 'Rs 1.200.000', category: 'Dining', image: dining14,rating:3,review:'6 customers review' },
    { id: 15, name: 'Cultivated Exhibit', description: "The Cultivated Exhibit dining set encourages creativity, allowing you to mix and match frames to create a personalized dining experience." , price: 'Rs 1.000.000', category: 'Dining', image: dining15,rating:5,review:'5 customers review' },
    { id: 16, name: 'Provincial Charm', description: "Provincial Charm brings the countryside into your home with a knotty pine table and low rush-seat chairs, perfect for creating a cozy, rustic dining space." , price: 'Rs 6.000.000', category: 'Dining', image: dining16,rating:3,review:'4 customers review' },
    { id: 17, name: 'Collected Over Time', description: "This set is for those who love an eclectic look, featuring a variety of chairs that give your dining room a unique, collected-over-time feel." , price: 'Rs 3.000.000', category: 'Dining', image: dining17,rating:5,review:'6 customers review' },
    { id: 18, name: 'Brilliant Illuminations', description: "Brilliant Illuminations features a streamlined wood table paired with classic white armchairs, offering a bright and airy dining experience." , price: 'Rs 2.340.000', category: 'Dining', image: dining18,rating:3.5,review:'3 customers review' },
    { id: 19, name: 'Blending Design', description:  "Blending Design combines modern and traditional elements, with a wood table featuring a mirrored base and stylish caneback chairs." , price: 'Rs 1.340.000', category: 'Dining', image: dining19,rating:3,review:'1 customer review' },
    { id: 20, name: 'Farmhouse Finery', description: "Farmhouse Finery is the perfect blend of rustic and industrial, with a wood dining table surrounded by sleek black metal chairs." , price: 'Rp 1.990.000', category: 'Dining', image: dining20,rating:1,review:'2 customers review' },
    { id: 21, name: 'Black buffet', description: "The Black Buffet is a statement piece, featuring a black finish with brass knobs and natural wood accents, perfect for a stylish and functional dining room." , price: 'Rs 2.990.000', category: 'Dining', image: dining21,rating:3,review:'4 customers review' },
    { id: 22, name: 'Asgaard sofa', description:  "The Asgaard Sofa offers a perfect blend of comfort and style, with cozy seating and beautiful wooden armrests. Ideal for a warm and inviting living room setting." , price: 'Rs. 250,000.00', category: 'Living', image: living1,rating:3.5,review:'6 customers review' },
    { id: 23, name: 'Cozy throw blanket', description: "This cozy throw blanket is perfect for adding warmth and texture to your living space. Its soft fabric and neat folding make it an ideal accessory for any sofa." , price: 'Rs. 20,000.00', category: 'Living', image: living2,rating:4,review:'5 customers review' },
    { id: 24, name: 'Corral Clutter', description:"Corral Clutter is a stylish decorative tray that helps organize your living room while adding a splash of color with your favorite books or trinkets." , price: 'Rs. 1,000.00', category: 'Living', image: living3,rating:4.5,review:'8 customers review' },
    { id: 25, name: 'Cozy Convo', description:"The Cozy Convo set makes it easy to update your living room with a comfortable seating arrangement designed for intimate conversations and relaxation." , price: 'Rs. 1,100.00', category: 'Living', image: living4,rating:2.5,review:'4 customers review' },
    { id: 26, name: 'Nail-Head Trim', description: "Nail-Head Trim adds a touch of elegance to your furniture, with intricate details that enhance the overall look of your living space." , price: 'Rs. 1,220.00', category: 'Living', image: living5,rating:3.5,review:'2 customers review' },
    { id: 27, name: 'Long wood bench', description: "The Long Wood Bench offers versatile seating and can double as a stylish end table, making it a practical addition to any room." , price: 'Rs. 2,200.00', category: 'Living', image: living6,rating:5,review:'6 customers review' },
    { id: 28, name: 'Gold and brass hues', description: "This set of gold and brass hues provides a modern touch to your lighting fixtures perfect for updating your living room with a sleek, contemporary look." , price: 'Rs. 1,000.00', category: 'Living', image: living7,rating:3,review:'2 customers review' },
    { id: 29, name: 'Firewood storage design', description: "Firewood Storage Design offers an artistic way to store your firewood, combining functionality with style to create a beautiful display in your living space." , price: 'Rs. 1,220.00', category: 'Living', image: living8,rating:2,review:'3 customers review' },
    { id: 30, name: 'High-contrast corner', description: "The High-Contrast Corner set embraces bold colors and abstract thinking, perfect for making a statement in your living room." , price: 'Rs. 2,220.00', category: 'Living', image: living9,rating:1.5,review:'1 customer review' },
    { id: 31, name: 'Crystal Sinclair', description: "Crystal Sinclair brings unexpected elegance to your living room with its sophisticated design, ideal for creating a luxurious atmosphere." , price: 'Rs. 3,220.00', category: 'Living', image: living10,rating:3.5,review:'4 customers review' },
    { id: 32, name: 'Faux monstera', description: "Faux Monstera adds a touch of greenery to your space without the maintenance, perfect for brightening up your living room with a natural look.", price: 'Rs. 1,200.00', category: 'Living', image: living11,rating:1,review:'2 customers review' },
    { id: 33, name: 'Light fixtures', description:  "These light fixtures offer a modern update to your living space, with a sleek design that complements any contemporary decor." , price: 'Rs. 1,221.00', category: 'Living', image: living12,rating:3,review:'4 customers review' },
    { id: 34, name: 'Trendy Pattern With a Stencil', description: "Add a trendy pattern to your walls with this easy-to-use stencil, perfect for creating a unique focal point in your living room." , price: 'Rs. 1,120.00', category: 'Living', image: living13,rating:3.5,review:'5 customers review' },
    { id: 35, name: 'Bring In the Blooms', description: "Brighten up your living space with fresh tulips, a natural choice for adding a splash of color and a touch of elegance to any room." , price: 'Rs. 5,000.00', category: 'Living', image: living14,rating:4.5,review:'3 customers review' },
    { id: 36, name: 'Handwork frames', description: "Display your favorite memories with these handwork frames, adding a personal touch to your living room decor.", price: 'Rp. 3,000.00', category: 'Living', image: living15,rating:3,review:'5 customers review' },
    { id: 37, name: 'Frame Fun Finds', description: "Frame your favorite art pieces or photos with these stylish frames, perfect for adding a creative touch to your living room." , price: 'Rs. 4,100.00', category: 'Living', image: living16,rating:2.5,review:'1 customer review' },
    { id: 38, name: 'Wood coffee table', description:"This wood coffee table is both functional and stylish, offering ample surface space for your living room essentials." , price: 'Rs. 2,900.00', category: 'Living', image: living17,rating:2,review:'3 customers review' },
    { id: 39, name: 'Happy Hue', description: "The Happy Hue brings a cheerful pop of color to your living room, freshening up the space with a vibrant yellow paint." , price: 'Rs. 1,820.00', category: 'Living', image: living18,rating:3.5,review:'4 customers review' },
    { id: 40, name: 'Simple Slipcover', description: "Give your furniture a fresh new look with this vintage-inspired slipcover, made from beautiful fabrics that add charm to any room." , price: 'Rs. 5,220.00', category: 'Living', image: living19,rating:2,review:'3 customers review' },
    { id: 41, name: 'Rich Trunk', description: "This trunk-style coffee table adds a rustic charm to your living room, offering both storage and style in one unique piece." , price: 'Rs. 2,320.00', category: 'Living', image: living20,rating:5,review:'6 customers review' },
    { id: 42, name: 'Graphic Pattern on a Fence', description: "Create a striking outdoor focal point with this graphic fence pattern, perfect for adding a bold touch to your garden or patio." , price: 'Rs. 1,220.00', category: 'Living', image: living21,rating:3.5,review:'2 customers review' },
    { id: 43, name: 'Lake Blue', description:  "The warm mid-toned blue of Lake Blue looks stunning in any bedroom, creating a calming and serene environment." , price: 'Rs. 1,000.00', category: 'Bedroom', image: bed1,rating:3,review:'1 customer review' },
    { id: 44, name: 'Cobalt Blue', description:"Cobalt Blue is a pure pigment that turns heads in modern and traditional bedrooms alike, adding a vibrant touch to your decor." , price: 'Rs. 2,220.00', category: 'Bedroom', image: bed2,rating:1,review:'2 customers review' },
    { id: 45, name: 'Aegean Blue', description: "Bring the calming Aegean Sea to your bedroom with Aegean Blue, a warm and inviting shade that's perfect for restful sleep." , price: 'Rs. 1,320.00', category: 'Bedroom', image: bed3,rating:4,review:'3 customers review' },
    { id: 46, name: 'Style Wardrobes', description: "Style Wardrobes are both elegant and efficient, offering ample storage space while enhancing the overall aesthetic of your bedroom.", price: 'Rs. 3,220.00', category: 'Bedroom', image: bed4,rating:3.5,review:'4 customers review' },
    { id: 47, name: 'Window Seating', description: "Create a cozy nook in your bedroom with this Window Seating set, complete with a soft blanket and cushion for added comfort." , price: 'Rs. 5,000.00', category: 'Bedroom', image: bed5,rating:5,review:'8 customers review' },
    { id: 48, name: 'A modern green nightstand', description: "This modern green nightstand adds a pop of color to your bedroom, offering both style and functionality with its sleek design." , price: 'Rs. 1,120.00', category: 'Bedroom', image: bed6,rating:1.5,review:'3 customers review' },
    { id: 49, name: 'Taupe blackout curtains', description: "Taupe Blackout Curtains provide privacy and block out light, creating the perfect environment for restful sleep." , price: 'Rs. 6,220.00', category: 'Bedroom', image: bed7,rating:2.5,review:'1 customer review' },
    { id: 50, name: 'Easy Mobility', description: "This black-and-brown woven rope laundry hamper offers easy mobility, making it a practical and stylish addition to your bedroom." , price: 'Rs. 2,210.00', category: 'Bedroom', image: bed8,rating:3,review:'5 customers review' },
    { id: 51, name: 'Midcentury-Inspired Style', description: "Midcentury-Inspired Style features walnut veneer and a beautiful dark chocolate finish, perfect for adding a touch of elegance to your bedroom." , price: 'Rs. 1,900.00', category: 'Bedroom', image: bed9,rating:2,review:'3 customers review' },
    { id: 52, name: 'Botanical Mural', description: "Transform your bedroom with a stunning Botanical Mural on the ceiling, bringing nature indoors in a unique and artistic way.", price: 'Rs. 3,320.00', category: 'Bedroom', image: bed10,rating:5,review:'9 customers review' },
    { id: 53, name: 'Gray Blue', description: "Gray Blue adds a touch of contemporary style to your bedroom, creating a calm and serene atmosphere perfect for relaxation." , price: 'Rs. 1,800.00', category: 'Bedroom', image: bed11,rating:3.5,review:'3 customers review' },
    { id: 54, name: 'Blackish Cyan', description: "Blackish Cyan combines bold color with luxurious textures, making it the perfect choice for a stylish and sophisticated bedroom." , price: 'Rs. 2,000.00', category: 'Bedroom', image: bed12,rating:3,review:'4 customers review' },
    { id: 55, name: 'Robin\'s-Egg Blue', description: "Robin's-Egg Blue brings a touch of nature to your bedroom with dark wood accents and furnishings that add depth and texture." , price: 'Rs. 3,900.00', category: 'Bedroom', image: bed13,rating:4.5,review:'6 customers review' },
    { id: 56, name: 'Stormy walls', description:"Stormy Walls are known for their use of pastels, creating a soft and calming environment perfect for a restful night’s sleep.", price: 'Rs. 1,000.00', category: 'Bedroom', image: bed14,rating:3.5,review:'5 customers review' },
    { id: 57, name: 'Savvy Storage', description: "Savvy Storage turns lumber and rope into a space-saving hanging shelf, offering both style and practicality in your bedroom." , price: 'Rs. 2,230.00', category: 'Bedroom', image: bed15,rating:3,review:'4 customers review' },
    { id: 58, name: 'Your Restful Retreat', description: "Your Restful Retreat is designed to be a sanctuary, offering a space that reflects your personal style and promotes relaxation." , price: 'Rs. 4,290.00', category: 'Bedroom', image: bed16,rating:2,review:'3 customers review' },
    { id: 59, name: 'Eclectic', description: "Eclectic blends a variety of time periods and design styles, creating a bedroom that’s full of personality and charm." , price: 'Rs. 2,920.00', category: 'Bedroom', image: bed17,rating:5,review:'6 customers review' },
    { id: 60, name: 'Evoking the breeze', description: "Evoking the Breeze brings the feel of a coastal bedroom into your home, with woven textures and calming colors that create a serene space.", price: 'Rs. 1,920.00', category: 'Bedroom', image: bed18,rating:3.5,review:'5 customers review' },
    { id: 61, name: 'Chinoiserie', description: "Chinoiserie is a timeless style that adds a touch of the East to your bedroom, with intricate patterns and elegant design." , price: 'Rs. 3,200.00', category: 'Bedroom', image: bed19,rating:1.5,review:'1 customer review' },
    { id: 62, name: 'Romantic', description: "Romantic style is the perfect complement to a bedroom, creating a space that’s both elegant and inviting.", price: 'Rs. 2,100.00', category: 'Bedroom', image: bed20,rating:3,review:'4 customers review' },
    { id: 63, name: 'Dreary bedroom', description: "Make Your Bedroom a Private Sanctuary with the Dreary Bedroom set, designed to create a peaceful and calming environment." , price: 'Rs. 1,220.00', category: 'Bedroom', image: bed21,rating:3.5,review:'3 customers review' },
   ];
        const productId = parseInt(id);
        const foundProduct = productsData.find(p => p.id === productId);
        setProduct(foundProduct);
      })  
  }, [id]);
  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <>
    <div id="product-header">
    <nav className="breadcrumb">
      <Link to="/">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt; {product.name}
    </nav>
  </div>
    <div id="product-container">
      <div className="product-image">
        <img src={product.image}  />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-price"> {product.price}</p>
        <div className="product-rating">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 0.5;
            return (
              <span key={index} className={ratingValue <= product.rating ? "filled-star" : "empty-star"}>
                ★
              </span>
            );
          })}
          <span className="vertical-line"></span>
          <label>{product.review}</label>
        </div>
        <p><strong>Category:</strong> {product.category}</p>
        <p className='description'>{product.description}</p>
        <div id='Size'>
            <label>Size</label>
            <div id='Sizes' >
            <span className='Size-box'>L</span>
            <span className='Size-box'>XL</span>
            <span className='Size-box'>XS</span>
            </div>
        </div>
        <div id='color'>
            <label>color</label>
        <div id='colors'>
          <span className="dot" id='blue'></span>
          <span className="dot" id='black'></span>
          <span className="dot" id='gold'></span>
        </div>
        </div>
        <div id='buttons'>
        <div id='btns'>
        <button  className='btn' onClick={Increment}>+</button>
        <label>{counter}</label>
        <button className='btn' onClick={Decrement}>-</button>
        </div>
        <Link to="/Cart">
          <button id="add-to-cart-btn"onClick={() => addToCart(product, counter)}>Add to Cart</button>
        </Link>
        </div>
      </div>
    </div>
    <div id='footer'>
        <h1>Description</h1>
        <div className='first'>
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, 
                the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall,
                 unplugs the chords, and takes the show on the road.
            </p>
        </div>
        <div className='first'>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. 
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. 
                The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
        </div>

      </div>
    </>
  );
}
export default Product