
## 🔧 Setup & Configuration

**Q: Why are we using Vite instead of Create React App?**
A: Vite is significantly faster for development — it uses native ES modules and only rebuilds what changes. CRA is deprecated and slow by comparison.

**Q: Why `react-router-dom` and not the built-in browser router?**
A: `react-router-dom` gives us declarative routing components like `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>`, and hooks like `useNavigate()` and `useParams()` out of the box. The browser has no such abstraction.

## Routing

**Q: What is the difference between `<BrowserRouter>` and `<HashRouter>`?**
A: `BrowserRouter` uses clean URLs like `/shop`. `HashRouter` uses `/#/shop`. Use `BrowserRouter` for modern apps, but it requires server-side configuration for production deployments (404 fallback to index.html).

**Q: How does `/product/:id` work?**
A: The `:id` is a URL parameter. When the user visits `/product/5`, React Router captures `5` as `id`. We read it inside the component using the `useParams()` hook.

**Q: What happens if someone visits a route that doesn't exist?**
A: The `<Route path="*">` catches all unmatched routes and renders the `NotFound` (404) component.

**Q: Why don't we fetch all product data once and reuse it across pages?**
A: In this simple version we fetch per page. In a production app, you'd use a caching layer like React Query or Zustand to avoid redundant fetches.

**Q: What is the shape of a product object from the API?**
```json
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile...",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://...",
  "images": ["https://...", "https://..."]
}
```

**Q: Why are we using Context API instead of Redux?**
A: For an app this size, Context API is sufficient. Redux adds boilerplate and complexity that isn't justified unless the state logic becomes very large or you need time-travel debugging.

**Q: What is "prop drilling" and why are we avoiding it?**
A: Prop drilling is passing data through multiple intermediate components that don't use it, just to get it to a deeply nested child. Context API lets any component access cart data directly without passing it down manually.


**Q: How do I prevent adding the same product twice?**
A: Check if the product already exists in the cart array before adding. If it does, increment `qty` instead of pushing a new item. This is already handled in `CartContext.jsx`.

## Performance
**Q: What is code splitting and should I use it here?**
A: Code splitting loads page components only when needed, reducing initial bundle size. Use `React.lazy()` with `<Suspense>` to wrap your page imports in `App.jsx`.