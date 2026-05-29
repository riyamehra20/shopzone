import { useCart } from '../context/CartContext';

export default function Cart({ onClose }) {
  const { cart, removeFromCart, updateQty, totalPrice, clearCart } = useCart();

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'flex-end',
    }} onClick={onClose}>
      <div style={{
        width: '380px', height: '100vh', background: 'var(--surface)',
        borderLeft: '1px solid var(--border)', padding: '1.5rem',
        overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem',
      }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontFamily: 'Syne', fontSize: '1.3rem' }}>Your Cart</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '1.5rem' }}>✕</button>
        </div>

        {cart.length === 0 ? (
          <p style={{ color: 'var(--muted)', textAlign: 'center', marginTop: '3rem' }}>Your cart is empty</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} style={{
                display: 'flex', gap: '12px', padding: '12px',
                background: 'var(--card)', borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
              }}>
                <img src={item.thumbnail} alt={item.title}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '4px' }}>{item.title}</p>
                  <p style={{ color: 'var(--accent)', fontWeight: 700 }}>${item.price}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                    <button onClick={() => updateQty(item.id, item.qty - 1)}
                      style={{ background: 'var(--border)', border: 'none', color: 'var(--text)', width: '24px', height: '24px', borderRadius: '4px' }}>−</button>
                    <span style={{ fontWeight: 600 }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}
                      style={{ background: 'var(--border)', border: 'none', color: 'var(--text)', width: '24px', height: '24px', borderRadius: '4px' }}>+</button>
                    <button onClick={() => removeFromCart(item.id)}
                      style={{ background: 'none', border: 'none', color: '#ff4444', marginLeft: 'auto', fontSize: '0.8rem' }}>Remove</button>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600 }}>Total</span>
                <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.1rem' }}>${totalPrice.toFixed(2)}</span>
              </div>
              <button style={{
                width: '100%', padding: '12px', background: 'var(--accent)',
                border: 'none', color: '#fff', borderRadius: 'var(--radius)',
                fontWeight: 700, fontSize: '1rem', marginBottom: '8px',
              }}>Checkout</button>
              <button onClick={clearCart} style={{
                width: '100%', padding: '10px', background: 'transparent',
                border: '1px solid var(--border)', color: 'var(--muted)',
                borderRadius: 'var(--radius)', fontWeight: 500,
              }}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
