import React, { useState } from 'react';

const RestaurantForm = ({ addRestaurant }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant({ name, location, rating });
    setName('');
    setLocation('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Restaurant Name"
        data-testid="restaurant-name-input"
      /> <br/>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        data-testid="restaurant-location-input"
      /> <br/>
      <div data-testid="range-input">
       {[1, 2, 3, 4, 5].map((star) => {
        return (  
          <span
            className='start'
            style={{
              cursor: 'pointer',
              color: rating >= star ? 'gold' : 'gray',
              fontSize: `35px`,
            }}
            onClick={() => {
              setRating(star)
            }}
          >
            {' '}
            ★{' '}
          </span>
        )
      })}
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default RestaurantForm;