import * as React from 'react';
const Contact = () => {
  function handleSubmit(evt: any) {
    evt.preventDefault();
  }
  return (
    <div className="contact">
      <div className="contactWrapper">
        <div className="contactContainer">
          <h5>Get In Touch</h5>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
