import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)

  const increase = (name) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.name === name
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      )
    )
  }

  const decrease = (name) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.name === name
            ? { ...pizza, count: pizza.count - 1 }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    )
  }

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  )

  return (
    <main className="cart-container">
      <h2>Detalles del pedido:</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.name} className="cart-item">
            <div className="cart-item-left">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="cart-img"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = "/src/assets/img/pepperoni.jpg"
                }}
              />

              <span className="cart-name">
                {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
              </span>
            </div>

            <div className="cart-item-right">
              <span className="cart-price">
                ${pizza.price.toLocaleString('es-CL')}
              </span>

              <button className="btn-minus" onClick={() => decrease(pizza.name)}>
                -
              </button>

              <span className="cart-count">{pizza.count}</span>

              <button className="btn-plus" onClick={() => increase(pizza.name)}>
                +
              </button>
            </div>
          </div>
        ))
      )}

      <h2 className="cart-total">
        Total: ${total.toLocaleString('es-CL')}
      </h2>

      <button className="btn-pay">Pagar</button>
    </main>
  )
}

export default Cart