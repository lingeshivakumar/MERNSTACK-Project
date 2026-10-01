const faqs = [
  { q: 'How do I book an appointment?', a: 'You can book an appointment online through our website or call our front desk.' },
  { q: 'What dental services do you offer?', a: 'We provide general dentistry, orthodontics, teeth whitening, root canals, and more.' },
  { q: 'Do you accept insurance?', a: 'Yes, we accept most dental insurance plans. Please check with our reception for details.' },
  { q: 'How much do treatments cost?', a: 'Prices vary depending on the treatment. Contact us for a consultation.' },
  { q: 'What should I do in case of a dental emergency?', a: 'Call our emergency number immediately or visit our clinic as soon as possible.' },
  { q: 'Is teeth whitening safe?', a: 'Yes, professional teeth whitening is safe and effective when done by a dentist.' },
  { q: 'How often should I visit the dentist?', a: 'We recommend a check-up every six months for optimal dental health.' },
  { q: 'What age should my child have their first dental visit?', a: 'Your child should visit the dentist by their first birthday or when their first tooth appears.' },
];

function FAQsPage() {
  return (
    <>
      <div className="page-banner">
        <h1>Frequently Asked Questions</h1>
        <h3>Find answers to common questions about our dental services.</h3>
      </div>

      <div className="faq-container">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <p className="faq-question">{i + 1}. {faq.q}</p>
            <p className="faq-answer">{faq.a}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FAQsPage;
