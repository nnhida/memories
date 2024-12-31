import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from './icons';
import Carousel from './Carousel';
import { ImageCard } from './ImageCard';
import { brandy, bruno, greenday, kanye, souljaboy, sparks, sunsetz } from '../assets';

function Prettiest() {
  const navigate = useNavigate();

  const prettiestContent = [
    {
      Image: brandy,
      title: 'Brandy',
      description: 'The timeless beauty',
    },
    {
      Image: bruno,
      title: 'Bruno',
      description: 'The charming one',
    },
    {
      Image: greenday,
      title: 'Green Day',
      description: 'The energetic spirit',
    },
    {
      Image: kanye,
      title: 'Kanye',
      description: 'The creative genius',
    },
    {
      Image: souljaboy,
      title: 'Soulja Boy',
      description: 'The trendsetter',
    },
    {
      Image: sparks,
      title: 'Sparks',
      description: 'The shining star',
    },
    {
      Image: sunsetz,
      title: 'Sunsetz',
      description: 'The golden hour',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 flex flex-col items-center justify-center p-4">
      <div className="w-[90%] max-w-[400px] animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Who is the prettiest?</h1>

        <Carousel>
          {prettiestContent.map(({ Image, title, description }, index) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText={title}
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-6 py-3 flex justify-center items-center bg-white/30 gap-2 hover:bg-white/40 backdrop-blur-sm text-purple-900 font-medium border border-white/50 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => navigate('/question')}
          >
            <ArrowLeft className="w-5 h-5 text-purple-900" /> Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Prettiest;
