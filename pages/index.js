import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RestaurantList from '../components/RestaurantList';

export default function Home() {
  return (
    <div>
      <Header />
      <RestaurantList />
      <Footer />
    </div>
  );
}