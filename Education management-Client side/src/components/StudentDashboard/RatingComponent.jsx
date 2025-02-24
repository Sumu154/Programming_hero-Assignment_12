import React, { useState } from 'react';
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";


const RatingComponent = ( { rating, setRating } ) => {

  const handleRating = (index) => {
    setRating(index); // Set rating based on clicked star
    console.log(rating);
  };

  return (
    <div className="flex justify-center gap-1 text-2xl">
      {[1, 2, 3, 4, 5].map((it) => (
        <button key={it} onClick={() => handleRating(it)}>
          { it <= rating ? <MdStar className="text-orange" /> 
          : <MdStarBorder className="text-orange" />
          }
        </button>
      ))}
    </div>
  );
};

export default RatingComponent;