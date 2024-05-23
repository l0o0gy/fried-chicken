const RestaurantList = () => {
    const Restaurants = [
        { id: 1, name: 'KFC', location: 'Arbil' },
        { id: 2, name: 'Fried chiken', location: 'Mansour' },
        { id: 3, name: 'Super chiken', location: 'phalastin street' },
    ];

  return (
    <div data-testid="restaurants-list">
                {Restaurants.map(restaurant => (
                    <li key={restaurant.id}>
                       name: {restaurant.name} <br/>
                       location: {restaurant.location}
                    </li>
                ))}
    </div>
  );
};

export default RestaurantList;
