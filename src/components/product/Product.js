import React from 'react'
import './Product.scss'
import dummyImg from '../../assets/naruto.jpeg'

function Product() {
  return (
    <div className="Product">
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img src={dummyImg} alt="" id="img" />
          </div>
        </div>
        <div className="product-info">
          <p className="title">
              Delux wall hanger 23", 23x23 solid color
          </p>
          <p className="price">₹ 990</p>
        </div>
      </div>
    </div>
  )
}

export default Product
