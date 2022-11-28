import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface scrollTo {
  scrollTo: string | any;
}

const Contact = ({ scrollTo }: scrollTo) => {
  function handleSubmit(evt: any) {
    evt.preventDefault();
  }
  return (
    <div className="contact" ref={scrollTo}>
      <div className="contactWrapper">
        <div className="contactContainer">
          <h5 className="heading">Get In Touch</h5>
          <form className="contactForm" onSubmit={handleSubmit}>
            <input type="text" className="name" name="name" placeholder="Name" required />
            <input type="text" className="email" name="email" placeholder="Email Address" />
            <input type="text" className="phone" name="phone" placeholder="Phone Number" />
            <textarea
              name="message"
              className="message"
              cols={30}
              rows={10}
              placeholder="Your Message"
              required></textarea>
            <div className="contactButton">
              <button className="btn_submit" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="contactLocation">
          <h5>Our Location</h5>
          <div className="contain">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Hamilton, ON</p>
          </div>
          <h5>Email Address</h5>
          <div className="contain">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>mtahomerenovations@gmail.com</p>
          </div>
          <h5>Phone Number</h5>
          <div className="contain">
            <FontAwesomeIcon icon={faPhone} />
            <p>+1 647 777 - 2222</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
