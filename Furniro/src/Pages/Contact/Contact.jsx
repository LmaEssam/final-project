import { useState } from 'react';
import location from '../../assets/Vector L.png'
import phone from '../../assets/Vector 1.png'
import working from '../../assets/Vector 2.png'
import * as yup from 'yup';
import Features from '../../components/Features/Features';
import logo from '../../assets/Meubel House_Logos-05.png'
import './Contact.css'

function Contact() {
  const [formdata, setformdata] = useState({
    firstname: '',
    subject: '',
    email: '',
    message: '',
});
const userschema = yup.object().shape({
  firstname: yup.string().min(3, "please take care you must enter more than 3 character"),
  subject: yup.string(),
  email: yup.string().email('must be valid Email').required(),
  message: yup.string().max(100, 'take care you must write less than or equal 100 word'),
});
async function testvalidation() {
  try {
      await userschema.validate(formdata, { abortEarly: false });
      console.log("Validation passed");
  } catch (err) {
      if (err instanceof yup.ValidationError) {
          err.inner.forEach((error) => {
              alert(`${error.path}: ${error.message}`);
          });
      }
  }
}
function onhandlesubmit(event) {
  event.preventDefault();
  testvalidation();
  console.log(formdata);
  setformdata({
    firstname: '',
    subject: '',
    email: '',
    message: '',
  })
}
function onhandlechange(event) {
  let value = event.target.value;
  const key = event.target.name;
  setformdata({
      ...formdata,
      [key]: value,
  });
}
  return (
    <>
     <div id="contact-header">
      <img src={logo} />
        <h1>Contact</h1>
        <nav className="breadcrumb">
          <a href="/">Home</a> &gt; <span>Contact</span>
        </nav>
      </div>
      <div id="contact-container">
      <div id="contact-content">
        <h2>Get In Touch With Us</h2>
        <p>For any inquiries or issues, feel free to reach out to us using the contact form below. We strive to respond to all queries within 24 hours.</p>
        </div>
        <div id='contact'>
        <div className="contact-info">
          <div className="contact-info-item">
            <div className='first'>
             <img src={location}   />
             <h3>Address</h3>
            </div>
            <p>1234 Furniture Street, <br/>Home City, HC 56789</p>
          </div>
          <div className="contact-info-item">
          <div className='first'>
             <img src={phone}   />
             <h3>Phone</h3>
            </div>
            <p>+1 (123) 456-7890 <br/>+1 (987) 654-3210</p>
          </div>
          <div className="contact-info-item">
          <div className='first'>
             <img src={working}   />
             <h3>Working Time</h3>
            </div>
            <p>Mon - Fri: 8:00 - 18:00 <br/>Sat - Sun: 10:00 - 17:00</p>
          </div>
        </div>
        <form onSubmit={onhandlesubmit}>
        <div className='partone'>
          <label htmlFor='Name'>Your Name</label>
          <input
            required
            id='Name'
            value={formdata.firstname}
            onChange={onhandlechange}
            name='firstname'
            placeholder='Abc'
         />
       </div>
       <div className='partone'>
          <label htmlFor='email'>Email Address</label>
          <input
            required
            id='email'
            value={formdata.email}
            onChange={onhandlechange}
            name='email'
            placeholder='Abc@def.com'
         />
        </div>
       <div className='partone'>
          <label htmlFor='subject'>Subject</label>
          <input
           id='subject'
           value={formdata.subject}
           onChange={onhandlechange}
           name='subject'
           placeholder='This is an optional'
         />
        </div>
        <div id='text'>
         <label htmlFor='message'>Message</label>
         <textarea
            name='message'
            id='message'
            value={formdata.message}
            onChange={onhandlechange}
            placeholder='Hi! i’d like to ask about'
         ></textarea>
        </div>
        <button id='submit'>SUBMIT</button>
        </form>
        </div>
    </div>
    <Features/>
    </>
  )
}
  export default Contact