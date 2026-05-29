import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return alert('Please fill required fields.');
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '650px', margin: '0 auto', padding: '3rem 2rem' }}>
      <h1 style={{ fontFamily: 'Syne', fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        Get in Touch
      </h1>
      <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
        Have a question or feedback? We'd love to hear from you.
      </p>

      {submitted ? (
        <div style={{
          background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
          borderRadius: 'var(--radius)', padding: '2rem', textAlign: 'center',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
          <h2 style={{ fontFamily: 'Syne', marginBottom: '0.5rem' }}>Message Sent!</h2>
          <p style={{ color: 'var(--muted)' }}>We'll get back to you within 24 hours.</p>
          <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
            style={{
              marginTop: '1.5rem', background: 'var(--accent)', border: 'none', color: '#fff',
              padding: '10px 24px', borderRadius: '8px', fontWeight: 600,
            }}>Send Another</button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {[
            { name: 'name', label: 'Full Name *', placeholder: 'John Doe', type: 'text' },
            { name: 'email', label: 'Email Address *', placeholder: 'john@example.com', type: 'email' },
            { name: 'subject', label: 'Subject', placeholder: 'What is this about?', type: 'text' },
          ].map(field => (
            <div key={field.name}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.9rem' }}>
                {field.label}
              </label>
              <input
                type={field.type} name={field.name}
                value={form[field.name]} onChange={handleChange}
                placeholder={field.placeholder}
                style={{
                  width: '100%', padding: '12px 16px',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', color: 'var(--text)', fontSize: '0.95rem',
                }}
              />
            </div>
          ))}

          <div>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.9rem' }}>
              Message *
            </label>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="Tell us how we can help..."
              rows={5}
              style={{
                width: '100%', padding: '12px 16px', resize: 'vertical',
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', color: 'var(--text)', fontSize: '0.95rem',
                fontFamily: 'DM Sans, sans-serif',
              }}
            />
          </div>

          <button onClick={handleSubmit} style={{
            background: 'var(--accent)', border: 'none', color: '#fff',
            padding: '14px', borderRadius: 'var(--radius)', fontWeight: 700,
            fontSize: '1rem', fontFamily: 'Syne', marginTop: '0.5rem',
          }}>
            Send Message →
          </button>
        </div>
      )}
    </div>
  );
}
