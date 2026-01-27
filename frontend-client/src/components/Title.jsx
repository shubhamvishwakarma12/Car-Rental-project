import React from 'react'

export default function Title({title, subTitle, align}) {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === 'left' && 'md:items-starts md:text-left'}`}>
      <h1 className='font-semibold text-4xl md:text-[40px]'>{title}</h1>
      <p className='text-sm md:text-base max-w-156 mt-2 text-gray-500/90'>{subTitle}</p>

    </div>
  )
}
