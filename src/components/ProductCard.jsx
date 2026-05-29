import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div style={{
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius)', overflow: 'hidden',
      transition: 'transform 0.2s, border-color 0.2s',
      cursor: 'pointer',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
    >
      <div onClick={() => navigate(`/product/${product.id}`)}
        style={{ position: 'relative', paddingTop: '75%', overflow: 'hidden', background: '#fff' }}>
        <img src={product.thumbnail} alt={product.title} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover',
        }} />
        <span style={{
          position: 'absolute', top: '8px', right: '8px',
          background: 'var(--accent)', color: '#fff', borderRadius: '6px',
          padding: '2px 8px', fontSize: '0.75rem', fontWeight: 700,
        }}>⭐ {product.rating}</span>
      </div>

      <div style={{ padding: '1rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--accent2)', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {product.category}
        </p>
        <h3 onClick={() => navigate(`/product/${product.id}`)}
          style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px', lineHeight: 1.3 }}>
          {product.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.1rem' }}>${product.price}</span>
          <button onClick={(e) => { e.stopPropagation(); addToCart(product); }}
            style={{
              background: 'var(--accent)', border: 'none', color: '#fff',
              padding: '6px 14px', borderRadius: '8px', fontWeight: 600, fontSize: '0.85rem',
            }}>
            + Cart
          </button>
        </div>
      </div>
    </div>
  );
}
