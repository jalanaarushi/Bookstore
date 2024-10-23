// src/Pages/App.js
import { useContext } from 'react';
import './App.css';
import Hero from '../Components/Hero.jsx';
import NavBar from '../Components/Navabr.jsx';
import BestSeller from '../Components/BestSellerSection.jsx';
import FavouriteSection from '../Components/FavouriteSection.jsx';
import OtherBooksSection from '../Components/BookSection.jsx';
import Footer from '../Components/Footer.jsx';
import Feedbackpage from '../Components/FeedbackPage.jsx';
import { WishListContext } from '../contexts/WishListContext.js';

function App() {
  const { wishList, clickWishList } = useContext(WishListContext);

  return (
    <>
      <NavBar WishCount={wishList.length} />
      <Hero />
      <BestSeller CartClickFn={clickWishList}/>
      <FavouriteSection />
      <OtherBooksSection CartClickFn={clickWishList} />
      <Feedbackpage />
      <Footer />
    </>
  );
} 

export default App;
