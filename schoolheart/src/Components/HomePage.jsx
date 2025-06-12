import React from 'react'
import TopNav from './Home/TopNav'
import Functionality from './Home/FunctinalitySection'
import Section from './Home/Section'
import CourseSection from './Home/CourseSection'
import PricingSection from './Home/PricingSection'
import TestimonialSection from './Home/TestimonialSection'
import FormSection from './Home/FormSection'
import Footer from './Home/FooterSection'

const HomePage = () => {
  return (
    <>
    <TopNav/>
    <Functionality/>
    <Section/>
    <CourseSection/>
    <PricingSection/>
    <TestimonialSection/>
    <FormSection/>
    <Footer/>
    </>
  )
}

export default HomePage