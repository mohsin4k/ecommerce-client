import React from 'react'
import Hero from '../../components/hero/Hero'
import './Home.scss'
import Category from "../../components/category/Category"
import Product from "../../components/product/Product"


function Home() {
  return (
    <div className="Home">
      <Hero/>
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Categories</h2>
          <p className="subheading">
            Shop from the best, our film and TV posters Collections. 
          </p>
        </div>
        <div className="content">
          <Category/>
          <Category/>
          <Category/>
        </div>
      </section>

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our top Picks</h2>
          <p className="subheading">
            Shop from the best, our film and TV posters Collections. 
          </p>
        </div>
        <div className="content">
          <Product/>
          <Product/>
          <Product/>
        </div>
      </section>
    </div>
  )
}

export default Home
