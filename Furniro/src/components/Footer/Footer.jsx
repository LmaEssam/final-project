import { Link} from 'react-router-dom'
import './Footer.css';
function Footer() {
  return (
    <footer id="footer">
      <div id="footer-content">
        <div className="footer-section">
          <h2>Furniro</h2>
          <p id='address'>Address: 4006 University Drive Suite 600 Coral Gables, FL 33134 USA</p>
        </div>
        <div className="footer-section">
          <h2 className='head'>Links</h2>
          <ul>
            <li><Link to={'/'} >Home</Link></li>
            <li> <Link to={'/Shop'}>Shop</Link></li>
            <li>About</li>
            <li><Link to={'/Contact'} >Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className='head'>Help</h2>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className='head'>Newsletter</h2>
          <input type="email" placeholder="Enter Your Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div id="footer-bottom">
        <p>&copy; 2023 Furniro. All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer