import { useState } from 'react';
import './ContactForm.css'

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send data to server
    console.log('Form submitted:', { name, email, people, dateTime });
  };

  return (
    <div className="contact-container">
      {/* Image elements could be added here as background or separate components */}
      <div className="contact-form">
        <h2>CONTACT</h2>
        <p>Book Online Or Give Us A Call On +91 1111 222 333<br/>
        Between 9:30 AM - 10:00 PM</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-Mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="people">People Number:</label>
            <input
              type="number"
              id="people"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateTime">Date & Time:</label>
            <input
              type="datetime-local"
              id="dateTime"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Mail</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;