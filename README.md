# Ecommerce Frontend

This is the frontend for the ecommerce platform built with Next.js. The project integrates with a Laravel backend to manage the cart, orders, and products. It is designed to be dynamic, modern, and user-friendly, following best practices in web development.

## Table of Contents

### Project Structure
### Installation
### Features
### Technologies Used
### API Services
### Styling
### Helpers

## Project Structure

The project structure follows a modular approach with a clear separation of concerns. Here’s a breakdown of the main directories and files:

#### Project Structure
##### app/
##### ├── components/               # Reusable components
##### │   ├── Cart/                 # Cart-related components
##### │   ├── Orders/               # Order-related components
##### ├── pages/                    # Next.js pages
##### │   ├── cart.js               # Cart page
##### │   ├── orders.js             # Orders page
#####     ├── index.js              # Home page
##### |── services/                 # API services for Cart and Orders
##### │   ├── cartService.js        # API for cart
##### │   ├── orderService.js       # API for orders
##### ├── utils/                    # Helper functions (e.g., currency formatter)
##### │   └── formatCurrency.js
##### ├── public/                   # Public assets
##### ├── package.json/             # Project dependencies
##### ── next.config.js/             # Next.js configuration

#### components/

This directory contains reusable React components for the frontend.

Cart: Components related to cart management (e.g., CartItem, CartSummary).
Orders: Components related to displaying and managing orders (e.g., OrderSummary, OrderItem).

#### pages/
This directory contains the main pages of the website.

cart/page.js: Page displaying the current user's cart and the option to add/remove items.

orders/page.js: Page displaying the orders placed by the user.
page.js: Home page, where users can view products and access the cart.

#### services/
This directory contains files responsible for making API requests to the Laravel backend.

cartService.js: Provides functions for interacting with the cart (e.g., adding/removing items).

orderService.js: Provides functions for interacting with the orders (e.g., placing orders, viewing order history).

#### utils/
This directory contains helper functions, such as currency formatting.

formatCurrency.js: A utility function to format prices in a readable currency format.

#### public/
Contains public assets like images, favicons, and other static files.

#### next.config.js
This is the configuration file for the Next.js project, where you can set environment variables, configure webpack, etc.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   
git clone [https://github.com/HillaArts/laravel_ecommerce-frontend.git](https://github.com/HillaArts/laravel_ecommerce-frontend.git)
cd ecommerce-frontend

2. Install dependencies:
 
npm install

3. Run the development server:

npm run dev
Your application will be available at <http://localhost:3000>.

## Features
### Cart Management:
Users can add items to their cart, view the cart, and remove items.
### Order Placement:
Users can place orders directly from their cart.
### Order History:
Users can view the orders they have placed.
### Dynamic UI:
The frontend is dynamic and responsive, providing a smooth user experience across devices.

## Technologies Used
### Next.js:
A React-based framework for building the frontend.
### Tailwind CSS:
Utility-first CSS framework for building responsive, modern UIs.
### Axios:
HTTP client for making requests to the backend API.
### JavaScript (ES6+):
Used throughout the application to write modern, clean code.

## Contribution

Feel free to fork the repository and submit pull requests if you have improvements or bug fixes. Please make sure to write tests for any new features or fixes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
