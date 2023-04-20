import React from 'react'
import dummyImg from "../../assets/naruto.jpeg";
import './ProductDetail.scss'

function ProductDetail() {
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img">
              <img src={dummyImg} alt="" />
          </div>
          <div className="product-info">
              <h1 className="heading">
                Tis is the title
              </h1>
              <h3 className="price">
                ₹699
              </h3>
              <p className="description">
                lelo is mast product hai you won't 
                get this any easier. 
              </p>

              <div className="cart-options">
                <div className="quantity-selector">
                  <span className="btn decrement">-</span>
                  <span className="quantity">3</span>
                  <span className="btn increment">+</span>
                </div>
                <button className="btn-primary add-to-cart">
                  Add to cart
                </button>
              </div>

              <div className="return-policy">
                <ul>
                  <li>one of the best product</li>
                  <li>you can get into the best online selling department</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
