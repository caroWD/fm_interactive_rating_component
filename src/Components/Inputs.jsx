import React from 'react'

function Inputs({ value, rating, active }) {
  return (
    <div
      className='flex justify-center items-center'
    >
      <input
        type='radio'
        id={value}
        name='rating'
        value={value}
        className='hidden'
      />
      <label
        htmlFor={value}
        className={`flex justify-center items-center size-[38.39px] pt-[3px] cursor-pointer leading-none font-normal rounded-full transition-colors duration-300 hover:bg-orange hover:text-very-dark-blue 2xs:size-[43px] xs:size-[53px] ${active === value ? 'bg-white text-very-dark-blue' : 'text-light-grey bg-dark-blue'}`}
        onClick={() => rating(value)}
      >
          {value}
        </label>
    </div>
  )
}

export default Inputs