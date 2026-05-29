import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=50')
      .then(r => r.json())
      .then(data => {
        setProducts(data.products);
        const cats = ['all', ...new Set(data.products.map(p => p.category))];
        setCategories(cats);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'all' || p.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontFamily: 'Syne', fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        The Shop
      </h1>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>{filtered.length} products found</p>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search products..."
          style={{
            flex: 1, minWidth: '200px', padding: '10px 16px',
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', color: 'var(--text)', fontSize: '0.95rem',
          }}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}
          style={{
            padding: '10px 16px', background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', color: 'var(--text)', fontSize: '0.95rem',
          }}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--muted)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
          Loading products...
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
