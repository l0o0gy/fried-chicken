import React from 'react';
import RestaurantList from  "./RestaurantList"
const RestaurantCard = ({ name, location, rating  }) => {
    const validatedRating = Math.max(1, Math.min(5, rating));

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < validatedRating; i++) {
            stars.push(<span key={i}>&#9733;</span>); 
        }
        return stars;
    };

    return (
        <div className="restaurant-card">
            <div className='card'>
            <RestaurantList/>
            </div>
            <div className='card'>
            <h3 data-testid="restaurant-name">{name}</h3>
            <p data-testid="restaurant-location">Location: {location}</p>
            <div data-testid="restaurant-rating">
               Rating:
                {renderStars("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/2011px-Star_full.svg.png")}
            </div>
            </div>
        </div>
    );
};

export default RestaurantCard;