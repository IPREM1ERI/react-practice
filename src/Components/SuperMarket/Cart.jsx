import React from 'react'

const Cart = () => {
  return (
    <div className="cart">
      <h3>Cart</h3>

      Map CartItem

      <div className="cart-total">
        <p>Total:</p>
        <p>$ Amount here</p>
      </div>

      <button>CHECKOUT</button>
      <button>CLEAR CART</button>
    </div>
  )
}

export default Cart