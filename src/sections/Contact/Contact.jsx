import styles from './ContactStyles.module.css';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const formRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('');
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(
        () => {
          setStatus('Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Type Your Message Here..."
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
        {status && <p style={{ marginTop: '1rem', color: status.includes('success') ? 'green' : 'red' }}>{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
