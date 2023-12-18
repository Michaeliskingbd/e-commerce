import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Product from '../Components/Products'
import Slider from '../Components/Slider'



const Home = () => {
  console.log('Product component is rendering.')

 
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Product/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home