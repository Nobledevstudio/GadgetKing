
## 📱 GadgetKing — React E-Commerce Store

### 🛍️ Project Overview
**GadgetKing** is a modern, responsive e-commerce web application built with **React.js**. It allows users to browse, filter, and purchase smartphones, laptops, and accessories.

The application demonstrates real-world frontend e-commerce functionality using **React Context API**, **React Router**, and **Tailwind CSS**, with dynamic filtering, sorting, and a fully functional shopping cart with configurable product variants.

---

### 🔗 Live Demo
👉 **GadgetKing Live Site**  
https://gadgetkingstore.netlify.app/

---

### ✨ Features
- **Category Browsing** — Navigate between Smartphones, Laptops, and Accessories.
- **Product Search** — Live search by product name.
- **Filters & Subcategories** — Filter by category and subcategory (Premium, Mid-Range, Affordable).
- **Sorting** — Sort products by price (Low → High, High → Low).
- **Shopping Cart** — Add products with configurable options (RAM, SSD, Storage), update quantities, and view total cost.
- **Responsive Design** — Fully mobile-friendly and optimized for all screen sizes.
- **SPA Navigation** — Fast page transitions using React Router.

---

### 🛠️ Technologies Used
- **Frontend:** React.js, Tailwind CSS  
- **Routing:** React Router DOM  
- **State Management:** React Context API  
- **Icons:** Lucide React  
- **Currency Formatting:** `Intl.NumberFormat` (NGN)

---

### 📁 Project Structure
```
gadgetking/
└── frontend/
    ├── assets/          # Images and icons
    ├── components/      # Reusable components
    ├── context/         # ShopContext for global state
    ├── layouts/         # NoPaddingLayout & PaddingLayout
    ├── pages/           # Home, Shop, Offers, etc.
    ├── App.jsx          # Main app component
    └── index.js         # Entry point
```

---

### ⚙️ Installation & Setup
```bash
git clone https://github.com/nobledevstudio/GadgetKing.git
cd gadgetking/frontend
npm install
npm run dev
```

---

### 🚀 Deployment
```bash
npm run build
```

Deploy the generated build folder on **Netlify**, **Vercel**, or **Render**.

> ⚠️ For Netlify SPA routing, ensure a `_redirects` file is configured.

---

### 🧭 Usage
1. Navigate categories from the home page.
2. Filter and sort products.
3. Search products using the search bar.
4. Select product options before adding to cart.
5. View and update the cart.

---

### 🧠 Key Logic Overview
- Dynamic filtering using `useState` and `useEffect`
- Price sorting with helper functions
- Global cart management using React Context API
- Query-based routing (`/shop?category=Smartphone`)

---

### 🔮 Future Enhancements
- Backend API integration
- Authentication and persistent cart
- Payment gateways (Paystack, Flutterwave, Stripe)
- UI/UX animations and ratings

---

### 👨‍💻 Author
**NobleDevStudio**
