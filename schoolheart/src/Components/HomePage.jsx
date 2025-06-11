import React from 'react'
import TopNav from './Home/TopNav'
import Functionality from './Home/FunctinalitySection'
import Section from './Home/Section'
import CourseSection from './Home/CourseSection'
import PricingSection from './Home/PricingSection'

const HomePage = () => {
  return (
    <>
    <TopNav/>
    <Functionality/>
    <Section/>
    <CourseSection/>
    <PricingSection/>
    </>
  )
}

export default HomePage