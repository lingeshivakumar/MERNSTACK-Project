function PrivacyPolicyPage() {
  return (
    <>
      <div className="page-banner" style={{ minHeight: '300px' }}>
        <h1>Privacy Policy</h1>
      </div>

      <div className="content-container">
        <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '600', marginBottom: '10px', paddingBottom: '8px', borderBottom: '2px solid #e0e0e0', display: 'inline-block' }}>Introduction</h2>
        <div className="hover-box">At BrightSmile, we prioritize your privacy and ensure that your personal data is protected. This privacy policy outlines how we collect, use, and safeguard your information.</div>

        <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '600', marginBottom: '10px', paddingBottom: '8px', borderBottom: '2px solid #e0e0e0', display: 'inline-block' }}>Information We Collect</h2>
        <div className="hover-box">We may collect personal information such as your name, email, phone number, and other relevant details when you use our services.</div>

        <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '600', marginBottom: '10px', paddingBottom: '8px', borderBottom: '2px solid #e0e0e0', display: 'inline-block' }}>How We Use Your Information</h2>
        <div className="hover-box">Your data is used to improve our services, communicate with you, and provide personalized healthcare experiences.</div>

        <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '600', marginBottom: '10px', paddingBottom: '8px', borderBottom: '2px solid #e0e0e0', display: 'inline-block' }}>Data Security</h2>
        <div className="hover-box">We implement strict security measures to protect your information from unauthorized access or disclosure.</div>

        <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '600', marginBottom: '10px', paddingBottom: '8px', borderBottom: '2px solid #e0e0e0', display: 'inline-block' }}>Contact Us</h2>
        <div className="hover-box">If you have any questions regarding our privacy policy, you can contact us at:</div>
        <div className="hover-box">📧 Email: <a href="mailto:privacy@brightsmile.com" style={{ color: '#007AFF' }}>privacy@brightsmile.com</a></div>
        <div className="hover-box">📞 Phone: <a href="tel:04453426942" style={{ color: '#007AFF' }}>044 5342 6942</a></div>
      </div>
    </>
  );
}

export default PrivacyPolicyPage;
