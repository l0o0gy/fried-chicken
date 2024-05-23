import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantForm from "./RestaurantForm";
import RestaurantDetails from "./RestaurantDetails";
const RestaurantList = () => {
    const Restaurants = [
        { id: 1, name: 'KFC', location: 'Arbil'},
        { id: 2, name: 'Fried chiken', location: 'Mansour' },
        { id: 3, name: 'Super chiken', location: 'phalastin street' },
    ];
    const [newRestaurant,setnewResturant]=useState([])
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const addRestaurant = (restaurant) => {
      setnewResturant([...Restaurants,...newRestaurant, restaurant]);
    };
    const deleteRestaurant = (index) => {
      setnewResturant(newRestaurant.filter((_, i) => i !== index));
    };
    const updateRestaurant = (index, updatedRestaurant) => {
      const newRestaurants = newRestaurant.slice();
      newRestaurants[index] = updatedRestaurant;
      setnewResturant(newRestaurants);
    };
  return (
    <div data-testid="restaurants-list"> 
    {selectedRestaurant ? (
      <RestaurantDetails restaurant={selectedRestaurant} onBack={() => setSelectedRestaurant(null)} />
    ) : (
      <>
        <RestaurantForm addRestaurant={addRestaurant} />
        {newRestaurant.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            index={index}
            restaurant={restaurant}
            deleteRestaurant={deleteRestaurant}
            updateRestaurant={updateRestaurant}
            onClick={() => setSelectedRestaurant(restaurant)}
          />
        ))}
      </>
    )}
  </div>
);
};

export default RestaurantList;
