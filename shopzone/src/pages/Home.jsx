import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <div style={{
        minHeight: '90vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '2rem',
        background: 'radial-gradient(ellipse at 50% 50%, #1a0f05 0%, var(--bg) 70%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* decorative circles */}
        <div style={{
          position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
          border: '1px solid rgba(255,107,53,0.1)', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
          border: '1px solid rgba(255,107,53,0.15)', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)', pointerEvents: 'none',
        }} />

        <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '4px', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Welcome to
        </p>
        <h1 style={{
          fontFamily: 'Syne', fontSize: 'clamp(3rem, 10vw, 7rem)',
          fontWeight: 800, lineHeight: 1, marginBottom: '1.5rem',
          letterSpacing: '-2px',
        }}>
          SHOP<span style={{ color: 'var(--accent)' }}>ZONE</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '480px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Discover thousands of products. No page reloads. Just pure, fast shopping.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/shop" style={{
            background: 'var(--accent)', color: '#fff', padding: '14px 32px',
            borderRadius: 'var(--radius)', fontWeight: 700, fontSize: '1rem',
            fontFamily: 'Syne',
          }}>Browse Shop →</Link>
          <Link to="/contact" style={{
            background: 'transparent', color: 'var(--text)', padding: '14px 32px',
            borderRadius: 'var(--radius)', fontWeight: 600, fontSize: '1rem',
            border: '1px solid var(--border)',
          }}>Contact Us</Link>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '5rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Syne', fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
          Why ShopZone?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: '⚡', title: 'Lightning Fast', desc: 'SPA architecture means zero full-page reloads.' },
            { icon: '🛒', title: 'Smart Cart', desc: 'Global cart state with Context API — no prop drilling.' },
            { icon: '📦', title: '100+ Products', desc: 'Real product data fetched live from DummyJSON API.' },
          ].map(f => (
            <div key={f.title} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '2rem', textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'Syne', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
