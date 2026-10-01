const doctors = [
  { name: 'Dr. Dexter Morgan', qualification: 'BDS, MDS (General Dentistry)', img: 'doctor1.jpg' },
  { name: 'Dr. Joe Goldberg', qualification: 'BDS, Fellowship in Restorative Dentistry', img: 'doctor2.jpg' },
  { name: 'Dr. Reed Richards', qualification: 'BDS, PG Diploma in Cosmetic Dentistry', img: 'doctor3.jpg' },
  { name: 'Dr. Susan Storm', qualification: 'BDS, MDS (Orthodontics & Dentofacial Orthopedics)', img: 'doctor4.jpg' },
  { name: 'Dr. Iris West', qualification: 'BDS, MDS (Periodontics & Gum Surgery)', img: 'doctor5.jpg' },
  { name: 'Dr. Bruce Banner', qualification: 'BDS, MDS (Conservative Dentistry & Endodontics)', img: 'doctor6.jpg' },
  { name: 'Dr. Jessica Jones', qualification: 'BDS, MDS (Laser Dentistry for Children)', img: 'doctor7.jpg' },
  { name: 'Dr. Caitlin Snow', qualification: 'BDS, MDS, Fellowship in Implantology', img: 'doctor8.jpg' },
];

const services = [
  'Preventive Care (Check-ups, Cleanings, and X-rays)',
  'Cosmetic Dentistry (Teeth Whitening, Veneers, and Smile Makeovers)',
  'Restorative Dentistry (Fillings, Crowns, and Bridges)',
  'Orthodontics (Braces and Clear Aligners)',
  'Pediatric Dentistry (Children\'s Dental Care)',
  'Specialized Treatments (Root Canals, Implants, and Gum Treatments)',
];

const awards = [
  '✅ Certified by the Dental Council of India (DCI) – Complying with national dental care standards.',
  '✅ NABH (National Accreditation Board for Hospitals) Accredited – Recognized for excellence in healthcare services.',
  '✅ Recognized by the Indian Dental Association (IDA) – Adhering to the best dental practices.',
  '✅ Awarded "Best Dental Hospital" – Acknowledged for outstanding patient satisfaction.',
  '✅ Member of the World Dental Federation (FDI) – Following global dental care practices.',
];

function AboutPage() {
  return (
    <>
      {/* Banner */}
      <div className="page-banner">
        <h1>ABOUT US</h1>
        <h3>Get to know us</h3>
      </div>

      {/* Main Content */}
      <section style={{ padding: '40px 20px' }}>
        <div className="about-box">
          <p style={{ fontSize: '18px', lineHeight: '1.9' }}>
            Welcome to BrightSmile Dental Hospital, where your smile is our priority! We are a leading dental care provider committed to
            delivering exceptional, personalized care to each patient. With a team of highly skilled professionals and state-of-the-art facilities,
            we ensure that every visit is a comfortable and positive experience.
            At BrightSmile, we understand that a healthy smile is essential for both your overall health and confidence. Whether you&apos;re visiting us for a routine check-up,
            cosmetic procedures, or specialized treatments, our compassionate and dedicated team is here to provide you with the highest standard of care.
            We believe in using the latest technology and best practices to achieve lasting results that enhance your well-being.
            Our mission is simple: to make dental care a stress-free, affordable, and enjoyable experience for everyone.
            We take the time to listen to your concerns, educate you about your options, and work together with you to create a treatment plan tailored to your needs.
          </p>
          <br />
          <p style={{ fontSize: '20px', fontWeight: '600' }}>Services we provide</p>
          <ul>
            {services.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        <div className="about-box">
          <p style={{ fontSize: '20px', fontWeight: '600' }}>Awards and Accolades</p>
          <ul>
            {awards.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      </section>

      {/* Doctors */}
      <section style={{ padding: '20px' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Our Doctors</h2>
        <div className="doctors-grid">
          {doctors.map((doc, i) => (
            <div key={i} className="doctor-card">
              <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt={doc.name} />
              <div className="name">{doc.name}</div>
              <div className="qualification">{doc.qualification}</div>
            </div>
          ))}
        </div>
      </section>

      <br /><br />
    </>
  );
}

export default AboutPage;
