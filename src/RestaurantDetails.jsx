import React from 'react';

const RestaurantDetails = ({ restaurant, onBack }) => (
  <div>
    <h1>{restaurant.name}</h1>
    <p>Location: {restaurant.location}</p>
    <p>Rating: {restaurant.rating}</p>
    <button onClick={onBack}>Back</button>
  </div>
);

export default RestaurantDetails;