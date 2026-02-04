# Lucky Shopping – TypeScript e-commerce

## Screenshots

### Home Page
![Home Page](./src/assets/home%20page.png)

### Products Page
![Products Page](./src/assets/Products%20page.png)

### Cart Page
![Cart Page](./src/assets/cart%20page.png)

### Filter Toggle (Mobile)
![Filter Toggle](./src/assets/filter-toggle.png)

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

3. **Filtering** – Filter products by keyword, category, price, etc. See [src/components/Filters/Filters.tsx](src/components/Filters/Filters.tsx)

4. **Sorting** – Sort products by price or name in ascending/descending order. See [src/reducers/filter_reducer.ts](src/reducers/filter_reducer.ts)

5. **Stripe Checkout** – Payment processed via Stripe API. See [src/components/CheckoutForm.tsx](src/components/CheckoutForm.tsx)

## What can be improved?

1. Filter in mobile view could use a modal instead of a toggle-able menu
2. Product variants (colors, sizes) with same `product_id` but different `SKU`

---

## Author

**Mohan Kakarla**
