import React, { useState } from 'react'
import Form from './Components/Form';
import Thanks from './Components/Thanks';

function App() {

  const [view, setView] = useState(true);
  const handleSubmit = e => {
    setView(!view);
  };

  const [rating, setRating] = useState(0);
  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div
      className="w-full max-w-md h-dvh mx-auto flex flex-col justify-center px-6"
    >
      <main
        className='relative p-6 rounded-2xl overflow-hidden before:block before:absolute before:inset-x-0 before:bottom-0 before:-z-10 before:size-[200%] before:-translate-x-1/4 before:bg-radial before:mix-blend-color-dodge'
      >
        {view ? <Form state={handleSubmit} rate={handleRating} rateState={rating} /> : <Thanks rateSelected={rating} />}
      </main>
    </div>
  );
}

export default App;
