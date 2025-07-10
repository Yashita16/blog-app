import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Bloglist from '../Components/Bloglist'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
   
      <Navbar></Navbar>
      <Header></Header>
      <Bloglist/>
      <Newsletter></Newsletter>
      <Footer></Footer>
      
  </>
  )
}

export default Home
