import React from 'react';
import './contact_us.css';

function ContactUs() {
  return (
    <div className="contact_us">
      <div className='alignment'>
        <div className="details">
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Your Email' />
          <input type='tel' placeholder='Your Phone' />
        </div>
        <div className="message">
          <textarea placeholder='Your Message'></textarea>
        </div>
        <div className="button-align">
          <button>Send Message</button>
        </div>
      </div>
        <div className="contact_details">
          <h3>Call To Us</h3>
          <p>We are available 24/7,7 days a week.</p>
          <p>Phone: +8801611112222</p>
          <hr />
          <h3>Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
    </div>
  );
}

export default ContactUs;