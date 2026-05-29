import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then(r => r.json())
      .then(data => { setProduct(data); setLoading(false); });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '8rem', color: 'var(--muted)' }}>
      <div style={{ fontSize: '2rem' }}>⏳</div>
      <p>Loading product...</p>
    </div>
  );

  if (!product || product.message) return (
    <div style={{ textAlign: 'center', padding: '8rem' }}>
      <p style={{ color: 'var(--muted)' }}>Product not found.</p>
      <button onClick={() => navigate('/shop')} style={{
        marginTop: '1rem', background: 'var(--accent)', border: 'none',
        color: '#fff', padding: '10px 24px', borderRadius: 'var(--radius)', cursor: 'pointer',
      }}>Back to Shop</button>
    </div>
  );

  const images = product.images || [product.thumbnail];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem' }}>
      <button onClick={() => navigate('/shop')} style={{
        background: 'none', border: '1px solid var(--border)', color: 'var(--muted)',
        padding: '8px 16px', borderRadius: '8px', marginBottom: '2rem',
        display: 'flex', alignItems: 'center', gap: '6px',
      }}>← Back to Shop</button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        {/* Images */}
        <div>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)', overflow: 'hidden',
            marginBottom: '1rem', aspectRatio: '1',
          }}>
            <img src={images[activeImg]} alt={product.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {images.map((img, i) => (
              <img key={i} src={img} alt="" onClick={() => setActiveImg(i)}
                style={{
                  width: '64px', height: '64px', objectFit: 'cover',
                  borderRadius: '8px', cursor: 'pointer', background: '#fff',
                  border: i === activeImg ? '2px solid var(--accent)' : '2px solid var(--border)',
                }} />
            ))}
          </div>
        </div>

        {/* Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{ color: 'var(--accent2)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
            {product.category}
          </p>
          <h1 style={{ fontFamily: 'Syne', fontSize: '2rem', fontWeight: 800, lineHeight: 1.2 }}>
            {product.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontFamily: 'Syne', fontSize: '2.2rem', color: 'var(--accent)', fontWeight: 800 }}>
              ${product.price}
            </span>
            <span style={{
              background: 'rgba(255,215,0,0.15)', color: 'var(--accent2)',
              padding: '4px 10px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600,
            }}>⭐ {product.rating}/5</span>
          </div>

          <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>{product.description}</p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Brand', value: product.brand },
              { label: 'Stock', value: `${product.stock} left` },
              { label: 'Discount', value: `${product.discountPercentage}% off` },
            ].map(({ label, value }) => (
              <div key={label} style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: '8px', padding: '10px 14px',
              }}>
                <p style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>{label}</p>
                <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>{value}</p>
              </div>
            ))}
          </div>

          <button onClick={handleAddToCart} style={{
            background: added ? '#22c55e' : 'var(--accent)',
            border: 'none', color: '#fff', padding: '14px 28px',
            borderRadius: 'var(--radius)', fontWeight: 700, fontSize: '1rem',
            fontFamily: 'Syne', transition: 'background 0.3s', marginTop: '1rem',
          }}>
            {added ? '✓ Added to Cart!' : '🛒 Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
