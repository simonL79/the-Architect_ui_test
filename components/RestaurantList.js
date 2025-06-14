import React from 'react';
import RestaurantCard from './RestaurantCard';

export default function RestaurantList() {
  // TODO: Fetch restaurant data from an API
  const restaurants = [];

  return (
    <div className='p-5'>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}