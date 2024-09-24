import { useContext,useState } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../Layout/Layout';
import Features from '../../components/Features/Features';
import deleteicon from '../../assets/Delete.png'
import logo from '../../assets/Meubel House_Logos-05.png'
import './Cart.css'
function Cart() {
  const { cartItems, removeItem } = useContext(CartContext);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const handleCheckout = () => {
    setCheckoutMessage('Your order is in progress');
   for (let i = cartItems.length - 1; i >= 0; i--) {
    removeItem(i);
   }
  };
 
  const totalCartPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
    return total + itemPrice * item.quantity;
  }, 0);
  const handleDelete = (index) => {
    removeItem(index);
  }
  return (
    <>
    <div id="cart-header">
    <img src={logo} />
    <h2 >Cart</h2>
        <nav className="breadcrumb">
        <Link to={'/'} >Home</Link> &gt; <span>cart</span>
        </nav>
      </div>
      <div id="cart-page">
      <div id="cart-content">
      <table id="table-cart">
      <tbody>
      {checkoutMessage && <div className="checkout-message">{checkoutMessage}</div>}
      {cartItems.map((item, index) => {
             const itemPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
                const itemSubtotal = itemPrice * item.quantity;
            return(
            <div id='cart-table' key={index}> 
            <tr  id='table-info'>
              <th id='product'>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
                <tr  id='product-details'>
                  <td id="product-info">
                    <img src={item.image} id="cart-product-image" />
                    <span>{item.name}</span>
                  </td>
                  <td id='price'>{item.price}</td>
                  <td>
                    <input type="number" value={item.quantity} readOnly id="quantity-input"/>
                  </td>
                  <td id='subtotal' >{itemSubtotal}</td>
                  <td><button id='delete-btn' onClick={() => handleDelete(index)}><img src={deleteicon} id='delete-img'/></button></td>
                </tr>
                </div>
          );
        })}

              </tbody>
        </table>
        <div id="cart-summary">
          <h3>Cart Totals</h3>
          <div className="subtotal">
            <span>Subtotal:</span>
            <p>{totalCartPrice}</p>
          </div>
          <div className="subtotal">
            <span>Total:</span>
            <p id='cart-total'>{totalCartPrice }</p>
          </div>
          <button id="checkout-button" onClick={handleCheckout} >Check Out</button>
        </div>
       
      </div>
    </div>
    <Features/>
    </>
  );
}
export default Cart