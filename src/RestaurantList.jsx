import React, { useState } from "react";
const RestaurantList = () => {
    const Restaurants = [
        { id: 1, name: 'KFC', location: 'Arbil' },
        { id: 2, name: 'Fried chiken', location: 'Mansour' },
        { id: 3, name: 'Super chiken', location: 'phalastin street' },
    ];
    const [newRestaurant,setnewResturant]=useState([])

    const addRestaurant = (restaurant) => {
      setnewResturant([... Restaurants, newRestaurant]);
    };


  return (
    <div data-testid="restaurants-list">
      {Restaurants.map(restaurant => (
        <div key={restaurant.id}>
          name: {restaurant.name} <br/>
          location: {restaurant.location}
        </div>
        ))}
    </div>
  );
};

export default RestaurantList;
