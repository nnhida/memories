import React from 'react';
import { picture, us1, us2, us3, us4 } from '../assets';
import Carousel from './Carousel';
import { ImageCard } from './ImageCard';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: us1, title: 'Our Moment 1', description: 'A special memory captured in time' },
    { Image: us2, title: 'Our Moment 2', description: 'Another beautiful moment together' },
    { Image: us3, title: 'Our Moment 3', description: 'Cherishing our time together' },
    { Image: us4, title: 'Our Moment 4', description: 'Creating lasting memories' },
  ];
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">Our Pictures</h1>
        <Carousel>
          {pictures.map(({ Image, title, description }, index) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Picture;
