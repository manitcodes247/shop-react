# 🛒 ShopReact — E-Commerce Frontend

A beginner-friendly e-commerce frontend built with **React.js** and **Tailwind CSS**.  
This project was built to learn core React concepts including hooks, Context API, React Router, and component-based architecture.

---

## 🔗 Live Demo

[View Live on Vercel](#) ← replace with your deployed URL

---

## 📸 Screenshots

<!-- Add screenshots after deployment. Tip: drag and drop images directly into GitHub's README editor -->

| Home Page | Cart Page |
|-----------|-----------|
| ![Home](./screenshots/home.png) | ![Cart](./screenshots/cart.png) |

---

## ✨ Features

- 🔍 Real-time product search
- 🏷️ Category filter buttons
- 🛒 Add to cart with quantity controls
- 🔢 Live cart item count badge in navbar
- 🗑️ Remove items from cart
- 💰 Auto-calculated order total
- 📱 Fully responsive design
- ⚡ Fast page navigation with React Router (no page reloads)

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| React.js | UI components and state management |
| Tailwind CSS | Styling |
| React Router v6 | Client-side navigation |
| Context API | Global cart state |
| Vite | Development build tool |

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Top navigation with cart badge
│   └── ProductCard.jsx  # Individual product display card
├── context/
│   └── CartContext.jsx  # Global cart state (Context API)
├── data/
│   └── products.js      # Dummy product JSON data
├── pages/
│   ├── Home.jsx         # Product listing with search + filters
│   └── Cart.jsx         # Cart page with order summary
├── App.jsx              # Root component with routing setup
└── main.jsx             # React entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/shop-react.git

# Navigate into the project
cd shop-react

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 💡 Concepts Practiced

This project was built to practice and understand:

- **React functional components** — every UI piece is a reusable function
- **useState hook** — managing search text, selected category, and cart items
- **Context API** — sharing cart state globally without prop drilling
- **React Router** — navigating between pages without a full page reload
- **Array methods** — `.filter()`, `.map()`, `.reduce()` for real UI logic
- **Props** — passing data and functions between components
- **Conditional rendering** — showing empty state vs. cart items

---

## 🌐 Deployment

This project is deployed on **Vercel**.  
To deploy your own copy:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Click **Deploy** — Vercel auto-detects Vite projects

---

## 🛠️ Future Improvements

- [ ] Product detail page
- [ ] LocalStorage cart persistence (cart survives page refresh)
- [ ] Toast notifications on add to cart
- [ ] Sort by price / rating
- [ ] Checkout form with basic validation

---

## 🙋 Author

**Your Name**  
[GitHub](https://github.com/your-username) · [LinkedIn](https://linkedin.com/in/your-profile)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
