import { Link } from 'react-router-dom';
import teethwhite from '../assets/teethwhite.webp';
import implants from '../assets/implants.jpg';
import braces from '../assets/braces.jpg';
import cleaning from '../assets/cleaning.jpg';

const services = [
  { img: teethwhite, title: 'Whitening', desc: 'Get a brighter and whiter smile with our advanced teeth whitening treatments.' },
  { img: implants, title: 'Dental Implants', desc: 'Restore missing teeth with natural-looking and durable dental implants.' },
  { img: braces, title: 'Braces & Orthodontics', desc: 'Straighten your teeth and perfect your smile with our advanced orthodontic treatments.' },
  { img: cleaning, title: 'Professional Dental Cleaning', desc: 'Keep your teeth healthy with our thorough and gentle dental cleaning services.' },
];

function ServicesPage() {
  return (
    <>
      <div className="page-banner">
        <h1>Our Services</h1>
        <h3>Premium dental care tailored for you</h3>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <Link to="/" className="btn-gradient" style={{ marginBottom: '24px', display: 'inline-block' }}>
          ← Go back to homepage
        </Link>

        {services.map((s, i) => (
          <div key={i} className="service-item">
            <img src={s.img} alt={s.title} />
            <h2><strong>{s.title}</strong></h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServicesPage;
