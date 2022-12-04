import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface scrollTo {
  scrollTo: string | any;
}

const Contact = ({ scrollTo }: scrollTo) => {
  const [isSubmitting, setisSubmitting] = useState(false);

  async function handleSubmit(evt: any) {
    evt.preventDefault();
    setisSubmitting(true);
    try {
      await axios({
        method: 'POST',
        url: 'https://getform.io/f/93374481-5d69-4934-bc5a-9f1b06757e09',
        data: new FormData(evt.target)
      });
      alert('Thank you, I will be in touch with you soon!');
    } catch (error) {
      alert(error);
    }

    setisSubmitting(false);
  }
  return (
    <div className="contact" ref={scrollTo} id="Contact">
      <div className="contactWrapper">
        <div className="contactContainer">
          <h5 className="heading">Get In Touch</h5>
          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              className="name"
              name="name"
              placeholder="Name"
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              className="email"
              name="email"
              placeholder="Email Address"
              required
              disabled={isSubmitting}
            />
            <input
              type="text"
              className="phone"
              name="phone"
              placeholder="Phone Number"
              required
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              className="message"
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
              disabled={isSubmitting}></textarea>
            <div className="contactButton">
              <button className="btn_submit" type="submit" disabled={isSubmitting}>
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
