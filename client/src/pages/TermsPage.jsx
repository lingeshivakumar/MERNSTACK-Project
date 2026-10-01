import { Link } from 'react-router-dom';

const terms = [
  { title: 'Introduction', text: 'Welcome to BrightSmile! By using our services, you agree to comply with the following terms and conditions. Please read them carefully.' },
  { title: 'Use of Services', text: 'Our services are intended for personal and non-commercial use only. Any misuse, unauthorized access, or violation of our policies is strictly prohibited.' },
  { title: 'Account Registration', text: 'To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account details.' },
  { title: 'Privacy and Security', text: null },
  { title: 'Limitation of Liability', text: 'BrightSmile is not responsible for any direct or indirect damages resulting from the use of our website or services.' },
  { title: 'Changes to Terms', text: 'We reserve the right to update these terms and conditions at any time. Continued use of our services constitutes acceptance of the modified terms.' },
  { title: 'Contact Us', text: null },
];

function TermsPage() {
  return (
    <>
      <div className="page-banner" style={{ minHeight: '300px' }}>
        <h1>Terms and Conditions</h1>
      </div>

      <div className="content-container">
        {terms.map((t, i) => (
          <div key={i} className="terms-card">
            <h2>{t.title}</h2>
            {t.title === 'Privacy and Security' ? (
              <p>Your privacy is important to us. Please refer to our <Link to="/privacy-policy" style={{ color: '#007AFF' }}>Privacy Policy</Link> to understand how we collect and protect your data.</p>
            ) : t.title === 'Contact Us' ? (
              <>
                <p>If you have any questions, feel free to contact us at:</p>
                <p>📧 Email: support@brightsmile.com</p>
                <p>📞 Phone: 044 5342 6942</p>
              </>
            ) : (
              <p>{t.text}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default TermsPage;
