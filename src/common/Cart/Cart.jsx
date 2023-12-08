import React from "react"
import ContactButton from "./ContactButton"
import "./style.css"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
 
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {

            }
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.000 đ * {item.qty}
                      <span>{productQty}.000 đ</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price : </h4>
              <h4> {totalPrice}.000 đ </h4>
            </div>
          </div>
        
         

        </div>
        <ContactButton/>
      </section>
    </>
  )
}

export default Cart