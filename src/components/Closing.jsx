import React from 'react';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';
import { fireworks } from '../assets';

function Closing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black/20 flex flex-col items-center justify-center">
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Fireworks background */}
        <div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: `url(${fireworks})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Content overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Main content */}
        <div className="z-20 w-[90%] max-w-[400px]">
          <p className="text-white text-center text-xl font-semibold px-4 drop-shadow-lg">lets walk together until 2025 end, shall we?</p>

          {/* Button */}
          <div className="flex justify-center w-full mt-12">
            <button
              className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
              onClick={() => navigate('/')}
            >
              <ArrowLeft /> Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Closing;
