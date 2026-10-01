const careers = [
  { title: 'Dentist', desc: 'Responsible for diagnosing and treating dental issues in patients.' },
  { title: 'Dental Assistant', desc: 'Assist dentists during procedures and manage patient care.' },
  { title: 'Dental Hygienist', desc: 'Perform teeth cleaning and educate patients on oral health.' },
  { title: 'Orthodontist', desc: 'Specializes in correcting teeth and jaw alignment.' },
  { title: 'Periodontist', desc: 'Focuses on gum diseases and dental implants.' },
  { title: 'Endodontist', desc: 'Expert in root canal treatments and pulp-related issues.' },
  { title: 'Pediatric Dentist', desc: 'Specializes in treating dental issues in children.' },
  { title: 'Prosthodontist', desc: 'Expert in dental prosthetics like crowns and dentures.' },
  { title: 'Dental Receptionist', desc: 'Handles patient appointments and front-desk operations.' },
];

function CareersPage() {
  return (
    <>
      <div className="page-banner">
        <h1>Careers at BrightSmile</h1>
        <h3>Join a team that&apos;s shaping the future of dental healthcare.</h3>
      </div>

      <div className="careers-grid">
        {careers.map((c, i) => (
          <div key={i} className="career-box">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <button className="btn-primary btn-sm">Apply Now</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CareersPage;
