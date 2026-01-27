import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testominal from '../components/Testmonial'
import NewsLetter from '../components/NewsLetter'

export default function Home() {
  return (
    <div>
    <Hero/>
    <FeaturedSection/>
    <Banner/>
    <Testominal/>
    <NewsLetter/>
    </div>
  )
}
