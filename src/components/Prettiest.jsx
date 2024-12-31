import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from './icons';
import Carousel from './Carousel';
import { ImageCard } from './ImageCard';
import { ella1, ella2, ella3, ella4 } from '../assets';

function Prettiest() {
  const navigate = useNavigate();

  const prettiestContent = [
    {
      Image: ella1,
      title: 'Ella 1',
      description: 'Beautiful moment',
    },
    {
      Image: ella2,
      title: 'Ella 2',
      description: 'Stunning view',
    },
    {
      Image: ella3,
      title: 'Ella 3',
      description: 'Lovely smile',
    },
    {
      Image: ella4,
      title: 'Ella 4',
      description: 'Charming pose',
    },
  ];

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center p-4">
      <div className="w-[90%] max-w-[400px] animate-fade-in">
        <h1 className="text-xl sm:text-xl font-bold mb-6 text-center text-white drop-shadow-lg">Mirror, mirror... Who's the prettiest girl in the world?</h1>

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
            className="px-6 py-3 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/question')}
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Prettiest;
