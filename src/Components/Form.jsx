import React, { useRef } from 'react';
import Inputs from './Inputs';
import { StarIcon } from "@heroicons/react/24/solid";

function Form({ state, rate, rateState }) {

  const rating = [1, 2, 3, 4, 5];

  const formRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const inputs = [...formRef.current.querySelectorAll('input')]
    inputs.forEach(input => input.checked && state());
    //state();
  };

  return (
    <section
      className='flex flex-col gap-4'
    >
      <span
        className='self-start p-3 bg-dark-blue rounded-full'
      >
        <StarIcon 
          className='size-4 text-orange'
        />
      </span>
      <h1
        className='font-normal text-2xl'
      >
        How did we do?
      </h1>
      <p
        className='text-light-grey'
      >
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>
      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div
          className='flex gap-2 justify-between 2xs:gap-4'
        >
          {
            rating.map(item => (
              <Inputs
                key={item}
                value={item}
                rating={rate}
                active={rateState}
              />
            ))
          }
        </div>
        <button
          type='submit'
          className='col-span-5 bg-orange pt-3 pb-2 px-6 leading-none uppercase text-very-dark-blue rounded-full font-semibold tracking-wider transition-colors duration-300 hover:bg-white xs:pt-4 xs:pb-3'
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;

