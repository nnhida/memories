import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Closing, Letter, Passcode, Question, Recap, Timer, Message, Picture, Prettiest, Amazing, Birthday } from './components';
import './index.css';
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Passcode />}
      />
      <Route
        path="/question"
        element={<Question />}
      />
      <Route
        path="/timer"
        element={<Timer />}
      />
      <Route
        path="/Prettiest"
        element={<Prettiest />}
      />
      <Route
        path="/Amazing"
        element={<Amazing />}
      />
      <Route
        path="/Birthday"
        element={<Birthday />}
      />
      <Route
        path="/recap"
        element={<Recap />}
      />
      {/* <Route
          path="/recap/message"
          element={<Message />}
        /> */}
      {/* <Route
          path="/recap/music"
          element={<Music />}
        /> */}
      <Route
        path="/recap/pictures"
        element={<Picture />}
      />
      <Route
        path="/letter"
        element={<Letter />}
      />
      <Route
        path="/closing"
        element={<Closing />}
      />
    </Routes>
  );
}

export default App;
