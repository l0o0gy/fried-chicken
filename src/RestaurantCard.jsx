import React from 'react';
import { useState } from 'react';
const RestaurantCard = ({ index, restaurant, onClick  }) => {
    const [rating, setRating] = useState(0)

    return (
        <div className="restaurant-card" onClick={onClick}>
           <h2 data-testid="restaurant-name">{restaurant.name}</h2>
           <p data-testid="restaurant-location">{restaurant.location}</p>
           <p data-testid="restaurant-rating"rating={rating} setRating={setRating} > Rating: {restaurant.rating}  </p>
            <button >Delete</button>
            <button >Change Rate</button>
        </div>
    );
};

export default RestaurantCard;