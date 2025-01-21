import React from 'react'
import 'animate.css';
import image from '../assets/illustration-thank-you.svg'

function Thanks({ rateSelected }) {
  return (
    <section
      className='text-center py-4 animate__animated animate__fadeIn'
    >
      <img
        src={image}
        alt='Flat design illustration of a phone'
        className='mx-auto mb-5'
      />
      <p
        className='w-fit mx-auto mb-8 pt-2 pb-1 px-3 rounded-full bg-dark-blue text-orange'
      >
        You selected {rateSelected} out of 5
      </p>
      <h1
        className='font-normal text-2xl mb-5'
      >
        Thank you!
      </h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </p>
    </section>
  );
}

export default Thanks;