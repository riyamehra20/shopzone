# ShopZone

A modern multi-route E-Commerce SPA built with React and React Router DOM.

##  Live Demo

 **[View Deployed App]
 (https://shopzone-bay-omega.vercel.app/)**
---

## Features

-  Home page with welcome banner
-  Shop page with product grid (fetched from DummyJSON API)
-  Product detail page with dynamic routing (`/product/:id`)
-  Contact form UI
-  Global cart with Context API (no prop drilling)
-  No page reloads — true SPA experience

---

##  Project Structure

```
src/
├── context/
│   └── CartContext.jsx       # Global cart state
├── pages/
│   ├── Home.jsx              # Route: /
│   ├── Shop.jsx              # Route: /shop
│   ├── ProductDetail.jsx     # Route: /product/:id
│   └── Contact.jsx           # Route: /contact
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── Cart.jsx
├── App.jsx                   # BrowserRouter + Routes
└── main.jsx
```

---

##  Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI Framework |
| React Router DOM | Client-side routing |
| Context API | Global state (cart) |
| DummyJSON API | Product data source |
| Vite | Build tool |
| Netlify | Hosting |

---

##  Run Locally

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/shopzone.git

# Go into the folder
cd shopzone

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## API Used

**Base URL:** `https://dummyjson.com`

## Author

Made by **Riya Mehra**  
GitHub: [@riyamehra20](https://github.com/riyamehra20)