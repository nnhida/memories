import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Mic, Camera, ArrowLeft, X, Clock } from 'lucide-react';
import { Google } from './icons';

function Question() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const validSearchTerms = ['how long have we been together?', 'how long have we been together', 'our anniversary date', 'when did we start dating'];

  const trends = ['Who is the prettiest girl in the world?', 'Why does Michella so amazing?', `Biw's birthdate (coz Ella forgets)`];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();

    if (validSearchTerms.includes(query)) {
      setErrorMessage('');
      navigate('/timer');
    } else {
      setErrorMessage('Page not Found! Tips: Read pro tip under the search box');
      setTimeout(() => setErrorMessage(''), 4000);
    }
  };
  return (
    <div className="min-h-screen bg-[#202124] text-white">
      {!isInputFocused ? (
        <div className="flex flex-col items-center px-4 pt-16">
          <div className="mb-8">
            <Google />
          </div>
          <div
            className="w-full max-w-[600px] flex items-center gap-3 px-4 py-3 rounded-full bg-[#303134] border border-[#5f6368] focus-within:border-[#8ab4f8]"
            onClick={() => {
              setIsInputFocused(true);
              setTimeout(() => inputRef.current?.focus(), 0);
            }}
          >
            <Search className="w-5 h-5 text-[#9aa0a6]" />
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent outline-none"
              placeholder="Search Google or type a URL"
            />
            <Mic className="w-5 h-5 text-[#8ab4f8]" />
            <Camera className="w-5 h-5 text-[#8ab4f8]" />
          </div>

          <div className="mt-8 w-full max-w-[600px]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl">Trending searches</h2>
              <button className="p-2">
                <Search className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              {trends.map((trend) => {
                let path = '/';
                if (trend.includes('prettiest girl')) {
                  path = '/Prettiest';
                } else if (trend.includes('Michella')) {
                  path = '/Amazing';
                } else if (trend.includes('Biw')) {
                  path = '/Birthday';
                }

                return (
                  <div
                    key={trend}
                    className="flex items-center gap-3 py-2 cursor-pointer hover:bg-[#303134] rounded-lg px-2"
                    onClick={() => navigate(path)}
                  >
                    <Search className="w-5 h-5 text-[#9aa0a6]" />
                    <span>{trend}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        // Search Input View with Keyboard
        <div className="flex flex-col min-h-screen w-full max-w-[480px] mx-auto ">
          <form
            onSubmit={handleSearch}
            className="border-b border-[#5f6368]"
          >
            <div className="flex items-center gap-3 px-4 py-3">
              <button
                type="button"
                onClick={() => setIsInputFocused(false)}
              >
                <ArrowLeft className="w-5 h-5 text-[#8ab4f8]" />
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                autoFocus
              />
              <Mic className="w-5 h-5 text-[#8ab4f8]" />
              <Camera className="w-5 h-5 text-[#8ab4f8]" />
            </div>
          </form>
          <div className="mt-10 px-5 text-white/50">
            <p>Pro tip: try searching "How long have we been together?" ;)</p>
            {errorMessage && <div className="mt-4 text-sm font-bold text-red-500">{errorMessage}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
