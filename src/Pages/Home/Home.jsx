import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './Components/Hero'
import AutoScroll from './Components/AutoScroll'
import Products from './Components/Products'
import WhyChooseUs from './Components/WhyChooseUs'
import StatsCounter from './Components/StatsCounter'
import Testimonials from './Components/Testimonials'
import GalleryPreview from './Components/GalleryPreview'
import ContactCTA from './Components/ContactCTA'
import Footer from '../../Components/Footer'

function Home() {
    return (
        <div>
            <AutoScroll />
            <Hero />
            <Products/>
            <WhyChooseUs/>
            <StatsCounter/>
            <Testimonials/>
            <GalleryPreview/>
            <ContactCTA/>
        </div>
    )
}

export default Home
