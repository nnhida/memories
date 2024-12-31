import React from 'react';

export const ImageCard = ({ imageUrl, altText = 'image' }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
