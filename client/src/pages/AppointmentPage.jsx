import { useState } from 'react';
import { Link } from 'react-router-dom';

function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '', gender: '', age: '', phoneno: '', altphoneno: '',
    email: '', date: '', issue: '', service: '', visit: '', doctor: '', updates: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleReset = () => {
    setFormData({
      name: '', gender: '', age: '', phoneno: '', altphoneno: '',
      email: '', date: '', issue: '', service: '', visit: '', doctor: '', updates: '',
    });
    setSubmitted(false);
  };

  return (
    <>
      <div className="page-banner" style={{ minHeight: '200px', padding: '60px 20px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}>Book an Appointment</h1>
      </div>

      <div className="form-wrapper">
        <Link to="/" className="btn-gradient" style={{ marginBottom: '24px', display: 'inline-block' }}>
          ← Go back to homepage
        </Link>

        <h2 style={{ marginBottom: '20px', fontWeight: '700' }}>Patient Application Form</h2>

        {submitted && <div className="auth-success">Your appointment request has been submitted successfully!</div>}

        <fieldset className="form-fieldset">
          <legend><strong>Fill out this form</strong></legend>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter your name</label>
              <input type="text" className="form-control" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                <label><input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male</label>
                <label><input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female</label>
              </div>
            </div>

            <div className="form-group">
              <label>Enter your age</label>
              <input type="number" className="form-control" name="age" placeholder="Age" min="1" max="150" value={formData.age} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Enter your phone number</label>
              <input type="tel" className="form-control" name="phoneno" placeholder="Phone number" value={formData.phoneno} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Enter an alternative phone number</label>
              <input type="tel" className="form-control" name="altphoneno" placeholder="Alternative Phone number" value={formData.altphoneno} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Enter Email ID</label>
              <input type="email" className="form-control" name="email" placeholder="Enter Email ID" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Enter your preferred appointment date</label>
              <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>State your dental issue</label>
              <input type="text" className="form-control" name="issue" placeholder="Dental issue" value={formData.issue} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Select your service preference</label>
              <select className="form-select" name="service" value={formData.service} onChange={handleChange}>
                <option value="">Select a Service</option>
                <option value="whitening">Whitening</option>
                <option value="implants">Dental Implants</option>
                <option value="braces">Braces &amp; Orthodontics</option>
                <option value="cleaning">Dental Cleaning</option>
              </select>
            </div>

            <div className="form-group">
              <label>Upload identity proof</label>
              <input type="file" className="form-control" name="file" />
            </div>

            <div className="form-group">
              <label>Have you visited our hospital before?</label>
              <div className="radio-group">
                <label><input type="radio" name="visit" value="yes" checked={formData.visit === 'yes'} onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="visit" value="no" checked={formData.visit === 'no'} onChange={handleChange} /> No</label>
              </div>
            </div>

            <div className="form-group">
              <label>Select your preferred doctor</label>
              <select className="form-select" name="doctor" value={formData.doctor} onChange={handleChange}>
                <option value="">Select a Doctor</option>
                <option value="Dr. Dexter Morgan">Dr. Dexter Morgan</option>
                <option value="Dr. Joe Goldberg">Dr. Joe Goldberg</option>
                <option value="Dr. Reed Richards">Dr. Reed Richards</option>
                <option value="Dr. Susan Storm">Dr. Susan Storm</option>
                <option value="Dr. Iris West">Dr. Iris West</option>
              </select>
            </div>

            <div className="form-group">
              <label>Are you willing to receive updates from us through mails and SMS?</label>
              <div className="radio-group">
                <label><input type="radio" name="updates" value="yes" checked={formData.updates === 'yes'} onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="updates" value="no" checked={formData.updates === 'no'} onChange={handleChange} /> No</label>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary btn-sm">Submit</button>
              <button type="button" className="btn-secondary" onClick={handleReset}>Reset</button>
            </div>
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default AppointmentPage;
