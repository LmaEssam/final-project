import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/Meubel House_Logos-05.png'
import cart from '../../assets/Vector.png'
import Footer from '../../components/Footer/Footer'
import { useState, createContext  } from 'react';
import'./Layout.css'
export const CartContext = createContext();
function Layout(){
    const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
     
      const priceNumber =parseInt(item.price.replace(/[^0-9]/g, ''), 10)
      return total + priceNumber;
    }, 0);
  };
  const removeItem = (index) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
  };
    return(
        <CartContext.Provider value={{ addToCart, cartItems, removeItem}}>
        <div id='mainpage'>
        <div id='navbar'>
            <label id='logo' ><img src={logo}/>Furniro</label>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'} >Home</Link>
                    </li>
                    <li>
                        <Link to={'/Shop'}>Shop</Link>
                    </li>
                    <li>
                        <Link to={'/Contact'} >Contact</Link>
                    </li>
                </ul>
            </nav>
            <img src={cart} id='cart' onClick={toggleCart}/>
           
            {isCartOpen && (
  <div id="cart-dropdown">
    <h3>Shopping Cart</h3>
    {cartItems.length > 0 ? (
      cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </div>
          </div>
       
      ))
    ) : (
      <p>Your cart is empty</p>
    )}
    <div className="cart-total">
      <p>Subtotal: Rs {calculateSubtotal()}</p>
    </div>
    <Link to="/Cart">
      <button className="checkout-btn">Cart</button>
    </Link>
  </div>
)}
</div>    
        <div className='content'>
        <Outlet />
      </div>
      <Footer/>
        </div>
        </CartContext.Provider>
    )
}
export default Layout