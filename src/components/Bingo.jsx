import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from './icons';
import capybara from '../assets/capybara.png';
import satay from '../assets/satay.png';
import birthday from '../assets/birthday-cake.png';
import chips from '../assets/bnnchips.png';
import doll from '../assets/doll.png';
import medal from '../assets/gold-medal.png';
import travel from '../assets/luggage.png';
import cat from '../assets/paw.png';
import weight from '../assets/weight-scale.png';
import dress from '../assets/get-dressed.png';
import bath from '../assets/bathtub.png';
import basket from '../assets/basketball.png';
import walk from '../assets/footprint.png';
import eat from '../assets/cooking.png';
import sleep from '../assets/sleeping.png';
import cooking from '../assets/baking.png';
import concert from '../assets/concert.png';
import read from '../assets/stack-of-books.png';
import book from '../assets/book.png';
import grocery from '../assets/grocery.png';
import baloon from '../assets/balloons.png';

const Bingo = () => {
  const navigate = useNavigate();
  const [stampedBoxes, setStampedBoxes] = useState(Array(25).fill(false));
  const [bingo, setBingo] = useState(false);
  const [allCompleted, setAllCompleted] = useState(false);
  const [completedLines, setCompletedLines] = useState(new Set());
  const [score, setScore] = useState(0);

  const checkBingo = () => {
    const lines = [];

    // Check rows
    for (let row = 0; row < 5; row++) {
      if (stampedBoxes.slice(row * 5, row * 5 + 5).every(Boolean)) {
        lines.push(`row${row}`);
      }
    }

    // Check columns
    for (let col = 0; col < 5; col++) {
      if ([0, 1, 2, 3, 4].every((row) => stampedBoxes[row * 5 + col])) {
        lines.push(`col${col}`);
      }
    }

    // Check diagonals
    if ([0, 6, 12, 18, 24].every((index) => stampedBoxes[index])) {
      lines.push('diag1');
    }
    if ([4, 8, 12, 16, 20].every((index) => stampedBoxes[index])) {
      lines.push('diag2');
    }

    // Find new completed lines and broken lines
    const newLines = lines.filter((line) => !completedLines.has(line));
    const brokenLines = [...completedLines].filter((line) => !lines.includes(line));

    if (newLines.length > 0) {
      // Add new lines to completedLines
      setCompletedLines((prev) => new Set([...prev, ...newLines]));
      // Update score
      setScore((prev) => prev + newLines.length);
      return true;
    }

    if (brokenLines.length > 0) {
      // Remove broken lines from completedLines
      setCompletedLines((prev) => {
        const newSet = new Set(prev);
        brokenLines.forEach((line) => newSet.delete(line));
        return newSet;
      });
      // Update score
      setScore((prev) => Math.max(0, prev - brokenLines.length));
    }

    return false;
  };

  const handleBoxClick = (index) => {
    const newStampedBoxes = [...stampedBoxes];
    newStampedBoxes[index] = !newStampedBoxes[index];
    setStampedBoxes(newStampedBoxes);
  };

  const handleReset = () => {
    setBingo(false);

    if (allCompleted) {
      // Reset all game states including score
      setStampedBoxes(Array(25).fill(false));
      setCompletedLines(new Set());
      setAllCompleted(false);
      setScore(0);
    } else {
      // Clear completed lines if all possible lines are completed
      if (completedLines.size >= 12) {
        setCompletedLines(new Set());
      }
    }
  };

  useEffect(() => {
    // Check if all boxes are completed
    if (stampedBoxes.every(Boolean)) {
      setAllCompleted(true);
      setBingo(true);
    } else if (checkBingo()) {
      setBingo(true);
    }
  }, [stampedBoxes]);

  return (
    <div className="min-h-screen flex flex-col items-center p-2 sm:p-4">
      {/* Scoreboard */}
      <div className="w-full max-w-md mb-2 bg-pink-100 rounded-lg shadow-lg p-2 sm:p-3 sm:w-36 md:w-40 sm:absolute sm:top-4 sm:left-4 lg:top-6 lg:left-6">
        <div className="flex items-center justify-center mb-1">
          <div className="w-5 h-5 sm:w-5 sm:h-5 bg-pink-300 rounded-full flex items-center justify-center">
            <span className="text-white text-sm sm:text-base">🏆</span>
          </div>
          <h3 className="ml-2 text-pink-800 font-bold text-sm sm:text-base">Score</h3>
        </div>
        <div className="text-center">
          <span className="text-pink-600 text-xl sm:text-2xl font-bold">{score}</span>
        </div>
      </div>

      <div className="bg-pink-200 rounded-lg shadow-lg p-2 sm:p-4 md:p-6 max-w-2xl w-full mt-4 sm:mt-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-800 mb-2 sm:mb-3 md:mb-4 text-center">
          <span className="bg-pink-300 px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full">Bingo!</span>
        </h1>

        <div className="grid grid-cols-5 gap-0.5 sm:gap-1 md:gap-2">
          {[
            'mam sate bareng',
            'keluar kota bareng',
            'hida menang lks',
            'bilu punya teman baru',
            'mam kipik pisang setiap bulan',
            'ketemu pas ulang tahun',
            'hida berat badan 40-45kg',
            'kucing kucing sehat selalu',
            'mandi bareng',
            'ichel punya boneka baru',
            'ichel ketemu bilu',
            'ketemu capybara bareng',
            'basketball date',
            'late night walk',
            'dress up date',
            'hida mam masakan ichel',
            'street feeding bareng',
            'hida nggak gampang eepy',
            'ichel gampang bobo',
            'ikut cooking class bareng',
            'nonton konser bareng',
            'baca buku bareng (+ annotate)',
            'bikin scrap book bareng',
            'grocery shopping bareng',
            'hida beliin ichel balon',
          ].map((text, index) => (
            <div
              key={index}
              onClick={() => handleBoxClick(index)}
              className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg flex items-center justify-center font-bold cursor-pointer transition-all p-1 sm:p-2 text-center text-[10px] sm:text-xs md:text-sm leading-tight relative overflow-hidden shadow-md
                ${stampedBoxes[index] ? 'bg-pink-300 text-pink-900 scale-105' : 'bg-pink-100 text-pink-800 hover:bg-pink-300 hover:text-pink-900 hover:scale-105'}`}
            >
              {text}
              {stampedBoxes[index] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pink-500 opacity-50 rounded-full"></div>
                  <div className="absolute text-white text-lg sm:text-xl md:text-2xl font-bold">
                    {
                      [
                        <img
                          src={satay}
                          alt="satay"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={travel}
                          alt="travel"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={medal}
                          alt="medal"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={cat}
                          alt="cat"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={chips}
                          alt="banana chips"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={birthday}
                          alt="birthday"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={weight}
                          alt="weight"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={cat}
                          alt="cat"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={bath}
                          alt="bath"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={doll}
                          alt="doll"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={cat}
                          alt="cat"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={capybara}
                          alt="capybara"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={basket}
                          alt="basket"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={walk}
                          alt="walk"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={dress}
                          alt="dress"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={eat}
                          alt="eat"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={cat}
                          alt="cat"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={sleep}
                          alt="sleep"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={sleep}
                          alt="sleep"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={cooking}
                          alt="cooking"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={concert}
                          alt="concert"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={read}
                          alt="read"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={book}
                          alt="book"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={grocery}
                          alt="grocery"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                        <img
                          src={baloon}
                          alt="baloon"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        />,
                      ][index]
                    }
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleReset}
          className="mt-2 sm:mt-3 md:mt-4 w-full bg-pink-400 text-pink-900 py-1 px-2 sm:py-1 sm:px-3 md:py-2 md:px-4 rounded hover:bg-pink-500 transition-colors text-xs sm:text-sm md:text-base"
        >
          Continue Playing
        </button>
      </div>

      {/* Conditional Bingo message */}
      {bingo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
          <div className="bg-white p-4 sm:p-6 rounded-lg text-center relative overflow-hidden w-full max-w-sm">
            <img
              src="/src/assets/fireworks.gif"
              alt="Fireworks"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            {allCompleted ? (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-2 relative z-10">Congratulations!</h2>
                <p className="text-lg sm:text-xl text-pink-600 mb-4 relative z-10">You both won the best couple!</p>
              </>
            ) : (
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 relative z-10">BINGO!</h2>
            )}
            <button
              onClick={handleReset}
              className="mt-2 bg-pink-500 text-white px-4 py-1 sm:px-6 sm:py-2 rounded hover:bg-pink-600 transition-colors relative z-10 text-sm sm:text-base"
            >
              Continue Playing
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-center w-full mt-12">
        <button
          className="px-6 py-3 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
          onClick={() => navigate('/question')}
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </button>
      </div>
    </div>
  );
};

export default Bingo;
