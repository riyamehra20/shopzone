import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

export default function Navbar() {
  const { totalItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 2rem', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '64px',
      }}>
        <Link to="/" style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.5px' }}>
          SHOP<span style={{ color: 'var(--accent)' }}>ZONE</span>
        </Link>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map(({ to, label }) => (
            <Link key={to} to={to} style={{
              fontWeight: 500, fontSize: '0.95rem',
              color: location.pathname === to ? 'var(--accent)' : 'var(--muted)',
              transition: 'color 0.2s',
              borderBottom: location.pathname === to ? '2px solid var(--accent)' : '2px solid transparent',
              paddingBottom: '2px',
            }}>{label}</Link>
          ))}

          <button onClick={() => setCartOpen(true)} style={{
            background: 'var(--accent)', border: 'none', color: '#fff',
            padding: '8px 16px', borderRadius: '8px', fontWeight: 600,
            fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            🛒 Cart {totalItems > 0 && (
              <span style={{
                background: 'var(--accent2)', color: '#000',
                borderRadius: '50%', width: '20px', height: '20px',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: 800,
              }}>{totalItems}</span>
            )}
          </button>
        </div>
      </nav>

      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </>
  );
}
