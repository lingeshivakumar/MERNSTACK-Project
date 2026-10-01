import { Link } from 'react-router-dom';
import dtools from '../assets/dtools.jpg';
import kid from '../assets/kid.jpg';

const testimonials = [
  { quote: '"Absolutely amazing experience! The staff is incredibly kind and professional."', name: '- Darren Watkins' },
  { quote: '"The best dental service I\'ve ever received. Highly recommended!"', name: '- Jesse Pinkman' },
  { quote: '"Got my teeth cleaned here. Flawless work. Just perfection."', name: '- Patrick Bateman' },
  { quote: '"Exceptional care and attention to detail. My teeth look way better now."', name: '- Walter White' },
];

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&q=80')" }}>
        <h1>Stay Smiling.</h1>
        <p>Advanced dental care for a brighter smile</p>
        <div className="hero-buttons">
          <Link to="/book-appointment" className="btn-primary">Book an Appointment</Link>
          <Link to="/services" className="btn-outline" style={{ color: 'white', borderColor: 'white' }}>Services we provide</Link>
        </div>
      </div>

      {/* Feature Cards */}
      <section className="section">
        <div className="cards-row">
          <div className="hover-card">
            <img src={dtools} alt="Cutting-edge Dental Care" />
            <h3 style={{ marginTop: '16px' }}><strong>Cutting-edge Dental Care</strong></h3>
            <p>Modern equipment and professional expertise</p>
          </div>
          <div className="hover-card">
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80" alt="Comfort & Safety" style={{ height: '205px', objectFit: 'cover' }} />
            <h3 style={{ marginTop: '16px' }}><strong>Comfort &amp; Safety</strong></h3>
            <p>A relaxing experience with top-notch hygiene standards</p>
          </div>
          <div className="hover-card">
            <img src={kid} alt="Personalized Treatment" />
            <h3 style={{ marginTop: '16px' }}><strong>Personalized Treatment</strong></h3>
            <p>Tailored dental solutions for all ages</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <div className="section-box">
        <h2 className="section-title">About Us</h2>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          At BrightSmile, we provide top-quality dental care with a focus on patient comfort and satisfaction.
          Our team of skilled professionals uses state-of-the-art technology and the latest techniques to ensure the best results.
          Whether you need a routine checkup, additional services, or specialized treatment, we are here to help you achieve a healthier,
          brighter smile. Your dental health is our priority!
        </p>
        <br />
        <Link to="/about" className="btn-primary">See More</Link>
      </div>

      {/* Testimonials */}
      <section className="section">
        <div className="section-centered">
          <h2 className="section-title">What Our Patients Say</h2>
          <div className="cards-row">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p>{t.quote}</p>
                <h4>{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Links */}
      <div className="addlinks-section">
        <h2 className="section-title">Additional Pages</h2>
        <div className="footer-links">
          <Link to="/privacy-policy" className="btn-primary btn-sm">Privacy Policy</Link>
          <Link to="/faqs" className="btn-primary btn-sm">FAQs</Link>
          <Link to="/terms" className="btn-primary btn-sm">Terms &amp; Conditions</Link>
        </div>
      </div>
      <br /><br />
    </>
  );
}

export default HomePage;
