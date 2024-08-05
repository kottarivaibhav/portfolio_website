import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
      });
      alert(`Thank you, ${name}. Your message has been sent. We will reach out to you at ${email} soon.`);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <section className="mt-4 mb-7 mr-3 p-6" id='FeedbackForm'>
      <h2 className="text-4xl font-bold underline-header text-center mb-6">Contact Me</h2>
    <form onSubmit={handleSubmit} className='contact-form'>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
    </section>
  );
};

export default ContactForm;
