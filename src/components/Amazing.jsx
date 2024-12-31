import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

function Amazing() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const reasons = [
    'Your smile',
    'Your kindness',
    'Your laughter',
    'Your strength',
    'Your support',
    'Your intelligence',
    'Your beauty',
    'Your warm hugs',
    'Your thoughtfulness',
    'Your passion',
    'Your dreams',
    'Your patience',
    'Your honesty',
    'Your creativity',
    'Your love for me',
    'Your humor',
    'Your voice',
    'Your curiosity',
    'Your unconditional love',
  ];

  const positions = [
    { left: '5%', top: '5%' },
    { left: '25%', top: '10%' },
    { left: '45%', top: '15%' },
    { left: '65%', top: '20%' },
    { left: '85%', top: '25%' },
    { left: '5%', top: '30%' },
    { left: '25%', top: '35%' },
    { left: '45%', top: '40%' },
    { left: '65%', top: '45%' },
    { left: '85%', top: '50%' },
    { left: '5%', top: '55%' },
    { left: '25%', top: '60%' },
    { left: '45%', top: '65%' },
    { left: '65%', top: '70%' },
    { left: '85%', top: '75%' },
    { left: '5%', top: '80%' },
    { left: '25%', top: '85%' },
    { left: '45%', top: '90%' },
    { left: '65%', top: '95%' },
    { left: '85%', top: '100%' },
  ];

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-full h-screen px-4">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">Reasons why you're amazing:</h1>

        <div
          ref={containerRef}
          className="relative w-full h-[calc(100vh-8rem)] rounded-lg overflow-hidden mt-8 mb-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: positions[index].left,
                top: positions[index].top,
              }}
              drag
              dragConstraints={containerRef}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem]">
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-medium text-sm truncate">{reason}</h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center w-full mt-4 mb-4">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft /> Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Amazing;
