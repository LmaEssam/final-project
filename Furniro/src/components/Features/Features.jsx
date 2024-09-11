import './Features.css';
import highQualityIcon from '../../assets/trophy 1.png'
import warrantyIcon from '../../assets/guarantee.png'
import shippingIcon from '../../assets/shipping.png'
import supportIcon from '../../assets/customer-support.png'
function Features() {
    const features = [
      {
        icon: highQualityIcon,
        title: 'High Quality',
        description: 'crafted from top materials'
      },
      {
        icon: warrantyIcon,
        title: 'Warranty Protection',
        description: 'Over 3 years'
      },
      {
        icon: shippingIcon,
        title: 'Free Shipping',
        description: 'Order over $150'
      },
      {
        icon: supportIcon,
        title: '24 / 7 Support',
        description: 'Dedicated support'
      }
    ];
  
    return (
      <div id="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.icon} />
            <div id='info'>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  export default Features