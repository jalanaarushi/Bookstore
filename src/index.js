import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App.js';
import reportWebVitals from './reportWebVitals.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import NoPage from './Pages/NoPage.jsx';
import BookPage from './Pages/BookPage.jsx';
import BuyPage from './Pages/BuyPage.jsx';
import { WishListProvider } from './contexts/WishListContext.js';
import WishListPage from './Pages/WishListPage.jsx';
import About from './Pages/About.jsx';
import { ShoppingListProvider } from './contexts/ShoppingCartContext.js';
import Login from './Pages/loginPage.jsx';
import Dashboard from './Pages/DashboardBookSell.jsx';
import EditPage from './Components/EditPage.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'; 
import CookieConsent from './Components/CookieConsent.jsx'; // Import CookieConsent

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Shop",
    element: <Shop />
  },
  {
    path: "/book/:id",
    element: <BookPage />
  },
  {
    path: "/Cart",
    element: <BuyPage />
  },
  {
    path: "/WishList",
    element: <WishListPage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/Dashboard",
    element: <Dashboard />
  },
  {
    path: "/PrivacyPolicy", 
    element: <PrivacyPolicy />
  },
  {
    path: "*",
    element: <NoPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishListProvider>
      <ShoppingListProvider>
        <RouterProvider router={router} />
        <CookieConsent /> {/* Add the CookieConsent component here */}
      </ShoppingListProvider>
    </WishListProvider>
  </React.StrictMode>
);

reportWebVitals();
