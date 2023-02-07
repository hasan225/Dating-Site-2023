import React from 'react'
import CallToAction from '../../components/CallToAction/CallToAction'
import Feedback from '../../components/Feedback/Feedback'
import Hero from '../../components/Hero/Hero'
import OurPromise from '../../components/OurPromise/OurPromise'
import SuccessReach from '../../components/SuccessReach/SuccessReach'
import WhyUs from '../../components/WhyUs/WhyUs'

const Home = () => {
  return (
    <div className='Home '>
      <Hero/>
      <WhyUs/>
      <SuccessReach/>
      <OurPromise/>
      <Feedback/>
      <CallToAction/>
    </div>
  )
}

export default Home