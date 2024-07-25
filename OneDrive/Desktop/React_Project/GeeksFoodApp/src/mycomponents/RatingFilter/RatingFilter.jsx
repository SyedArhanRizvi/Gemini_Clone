import React from 'react'
import './RatingFilter.css'

function RatingFilter() {
  return (
    <div className="rating-filter-container">
      <label htmlFor="rating">Minimum Rating:</label>
      <input name='rating' type="number" min={0} max={5} />
    </div>
  )
}

export default RatingFilter