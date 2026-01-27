import React from 'react'
import Title from './Title'
import CarCard from './CarCard'
import { assets, dummyCarData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export default function FeaturedSection() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div>
        <Title title='Featured Cars' subTitle='Discover our premium selection of luxury vehicles for rent.'/>
      </div>
      <div className='mt-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {dummyCarData.slice(0,6).map(car => (
          <div key={car._id}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
      <button onClick={()=>{
        navigate('/cars'); scrollTo(0,0)
      }}
       className='mt-12 px-6 py-3 bg-primary text-white rounded-full flex items-center gap-2 hover:bg-primary/90 transition'>
        Explore All Cars <img src={assets.arrow_icon} alt="" />
      </button>
    </div>
  )
}
