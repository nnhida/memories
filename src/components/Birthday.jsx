import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';

function Birthday() {
  const navigate = useNavigate();
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const BIRTHDATE = new Date('2007-06-29');

  useEffect(() => {
    const calculateAge = () => {
      const now = new Date();
      const years = differenceInYears(now, BIRTHDATE);
      const months = differenceInMonths(now, BIRTHDATE) % 12;
      const days = differenceInDays(now, new Date(now.getFullYear(), now.getMonth(), BIRTHDATE.getDate()));

      setAge({ years, months, days });
    };

    calculateAge();
    const interval = setInterval(calculateAge, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center bg-cover bg-center relative text-white px-4">
      <div className="text-center z-10">
        <h1 className="text-3xl font-bold mb-8 drop-shadow-lg">My birthdate is:</h1>
        <h2 className="text-2xl font-semibold mb-12 drop-shadow-lg">29th June 2007</h2>

        <div className="flex items-center justify-center gap-3 sm:gap-4 text-5xl sm:text-7xl font-bold mb-6">
          <div className="flex flex-col items-center">
            <span className="drop-shadow-lg">{age.years.toString().padStart(2, '0')}</span>
            <span className="text-sm sm:text-2xl mt-1 sm:mt-2">Years</span>
          </div>
          <span className="text-4xl sm:text-6xl">:</span>
          <div className="flex flex-col items-center">
            <span className="drop-shadow-lg">{age.months.toString().padStart(2, '0')}</span>
            <span className="text-sm sm:text-2xl mt-1 sm:mt-2">Months</span>
          </div>
          <span className="text-4xl sm:text-6xl">:</span>
          <div className="flex flex-col items-center">
            <span className="drop-shadow-lg">{age.days.toString().padStart(2, '0')}</span>
            <span className="text-sm sm:text-2xl mt-1 sm:mt-2">Days</span>
          </div>
        </div>

        <button
          className="px-6 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>
    </div>
  );
}

export default Birthday;
