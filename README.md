# Lucky Shopping – TypeScript e-commerce

## 🌐 Live Demo

**[https://lucky-shopping-store.netlify.app](https://lucky-shopping-store.netlify.app)**

## Screenshots

### Home Page
![Home Page](./src/assets/home%20page.png)

### Products Page
![Products Page](./src/assets/Products%20page.png)

### Cart Page
![Cart Page](./src/assets/cart%20page.png)

---

### Project owner: Mohan Kakarla

## What is this project about?

An e-commerce app that allows shoppers to view, sort, and filter products, add items to cart, and checkout via Stripe. Products are managed via Sanity CMS.

## Technologies Used

- **React.js** (create-react-app) with **TypeScript**
- **styled-components** & CSS for styling
- **react-router** for routing
- **Stripe API** for payment processing
- **Sanity CMS** for product management
- **Netlify** for hosting and serverless functions

## Project Structure

```
├── public/                  # Static files
│   └── index.html
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # Reusable UI components
│   │   ├── Navbar/          # Navigation bar
│   │   ├── Sidebar/         # Mobile sidebar menu
│   │   ├── FeaturedProducts/# Featured products section
│   │   ├── Services/        # Services section
│   │   ├── Filters/         # Product filters
│   │   ├── Sort/            # Sorting options
│   │   └── Contact/         # Contact form
│   ├── context/             # React Context providers
│   │   ├── products_context.tsx
│   │   ├── cart_context.tsx
│   │   └── filter_context.tsx
│   ├── reducers/            # State reducers
│   │   ├── products_reducer.ts
│   │   ├── cart_reducer.tsx
│   │   └── filter_reducer.ts
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── SingleProductPage/
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   └── SuccessfulPaymentPage.tsx
│   ├── utils/               # Helper functions & constants
│   ├── App.tsx              # Main app component
│   └── index.tsx            # Entry point
├── functions/               # Netlify serverless functions
│   ├── products.ts
│   └── create-payment-intent.ts
├── luckyshopping/           # Sanity CMS Studio
│   └── schemas/             # Content schemas
└── package.json
```

## Run Locally

```powershell
# Clone the repository
git clone https://github.com/mkakarla2/Ecommerce--Shopping.git

# Go into the repository
cd Ecommerce--Shopping

# Install dependencies
npm install

# Start development server
npm start
```

## Key Features

1. **Product Management** – Products are managed via Sanity CMS

2. **View Options** – Shoppers can choose between `ListView` or `GridView`. See [src/components/ProductList.tsx](src/components/ProductList.tsx)

3. **Sorting** – Sort products by price or name in ascending/descending order. See [src/reducers/filter_reducer.ts](src/reducers/filter_reducer.ts)

4. **Stripe Checkout** – Payment processed via Stripe API. See [src/components/CheckoutForm.tsx](src/components/CheckoutForm.tsx)

## What can be improved?

1. Product variants (colors, sizes) with same `product_id` but different `SKU`

---

## Author

**Mohan Kakarla**
