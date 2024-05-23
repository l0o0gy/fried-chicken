import './App.css';
import RestaurantList from './RestaurantList';
import RestaurantCard from "./RestaurantCard"
import React from 'react';
import { useState } from 'react';

function App() {
  const [restaurants, setRestaurants] = useState([])

  return (
    <div className="App">
      <h1>Fried Chicken Restaurants</h1>
      {/* <RestaurantList
        restaurantList={restaurants}
        setRestaurants={setRestaurants}
      /> */}
      <RestaurantCard/>
    </div>
  );
}

export default App;