import React from 'react';
import './Restaurant.css';
import restaurants from './Data.js'
import SearchFilter from "../SearchFilter/SearchFilter.jsx";
import RatingFilter from "../RatingFilter/RatingFilter.jsx";
import RestaurantCard from "../RestaurantCard/RestaurantCard.jsx";


function Restaurant({}) {
  return (
    <div className='main-content'>
      <div className="filters">
        <SearchFilter onType={(searchKey) => {
            setSearchKey(searchKey);
          }} />
        <RatingFilter onChange={(ratingCount) => {
            setRating(ratingCount);
          }} />
      </div>
      <div className="restaurants">
        {restaurants.map((res) => {
          return <RestaurantCard {...res} />;
        })}
      </div>
    </div>
  );
}

export default Restaurant;