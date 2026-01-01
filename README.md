## GadgetKing - React E-Commerce Store

## Project Overview
GadgetKing is a modern, responsive e-commerce web application built with React.js. It enables users to browse, filter, and purchase smartphones, laptops, and accessories. The app features dynamic filtering, sorting, and a fully functional shopping cart with product variant options.This project showcases React Context API, React Router, and Tailwind CSS in a real-world frontend e-commerce scenario.

## Live Demo
(https://gadgetkingstore.netlify.app/)
GadgetKing Live Site

## Features
1. Category Browsing: Navigate directly to Smartphones, Laptops, or Accessories.

2. Search Products: Search by product name with live filtering.

3. Filters & Subcategories: Filter products by category or subcategory (Premium, Mid-Range, Affordable).

4. Sorting: Sort products by price (Low → High, High → Low).

5. Shopping Cart: Add products with configurable options (RAM, SSD, Storage), update quantities, and view total cost.

6. Responsive Design: Fully mobile-friendly and works on all screen sizes.

7. SPA Navigation: React Router enables fast navigation between pages.

## Technologies Used

1. Frontend: React.js, Tailwind CSS
2. Routing: React Router DOM
3 . State Management: React Context API
4 . Icons: Lucide React
6. Currency Formatting: Intl.NumberFormat (NGN)

## gadgetking/
 └─ frontend/
     ├─ assets/         # Images and icons
     ├─ components/     # Reusable components (Item, SearchBar, Title, etc.)
     ├─ context/        # ShopContext for global state management
     |--layouts/        # for nopaddinglayout and paddinglayout
     ├─ pages/          # Pages like Home, Shop, Offers
     ├─ App.jsx         # Main app component
     └─ index.js        # Entry point

## Installation

1. git clone https://nobledevstudio.github.io/GadgetKing/

2. cd gadgetking/frontend

3. npm install

4. npm run dev 

## Deployment

npm run build

You can deploy the build/ folder on platforms like Vercel, Netlify, or Render.

## Usage

1. Use the home page category buttons to navigate to specific product categories.

2. Apply filters and subcategory options to narrow down results.

3. Search for products using the search bar.

4. Select product options (e.g., RAM, SSD, Storage) before adding to cart.

5. View and update the cart, then proceed to checkout.


## Key Logic Overview

1. Category & Subcategory Filter: Filters products dynamically using useState and useEffect.

2. Sorting: sortProduct function with getProductPrice calculates prices for all product types.

3. Shopping Cart: Uses React Context API to manage cart items, quantities, and total cost.

4. Navigation: Query parameters allow category-specific routing (/shop?category=Smartphone).

## Future Enhancements

1. Connect to a backend API for dynamic product data.

2. Add user authentication and a persistent cart.

3. Integrate payment gateways (Paystack, Flutterwave, Stripe).

4. Improve UI/UX with animations, product quick views, and rating systems.

