import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <div className="page-banner">
        <h1>Contact Us</h1>
        <h3>We&apos;d love to hear from you!</h3>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <div className="contact-box">
          <h3>Get in Touch</h3>
          <p style={{ marginBottom: '16px' }}>If you have any inquiries, feel free to contact us through the details below.</p>
          <p className="contact-info">📍 Address: 123 BrightSmile Dental Street, Chennai, India</p>
          <p className="contact-info">📧 Email: contact@brightsmile.com</p>
          <p className="contact-info">📞 Phone: 044 5342 6942</p>
          <p className="contact-info">🕘 Working Hours: Monday - Saturday (9:00 AM - 6:00 PM)</p>
        </div>

        <div className="contact-box">
          <h3>Send Us a Message</h3>
          {submitted && <div className="auth-success">Message sent successfully!</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
