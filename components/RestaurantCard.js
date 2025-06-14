import React from 'react';

export default function RestaurantCard({ restaurant }) {
  return (
    <div className='p-5 border rounded-lg'>
      <h2 className='text-xl'>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      <button className='mt-2 bg-green-500 text-white p-2 rounded'>Order Now</button>
    </div>
  );
}