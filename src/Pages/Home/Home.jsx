import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './Components/Hero'
import AutoScroll from './Components/AutoScroll'
import Products from './Components/Products'

function Home() {
    return (
        <div>
            <Navbar />
            <AutoScroll />
            <Hero />
            <Products/>

        </div>
    )
}

export default Home
