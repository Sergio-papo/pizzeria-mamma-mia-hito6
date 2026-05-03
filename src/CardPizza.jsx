import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const CardPizza = ({ name, price, ingredients, img }) => {
  const { cart, setCart } = useContext(CartContext);

   const addToCart = () => {
    const pizzaEncontrada = cart.find((pizza) => pizza.name === name);

    if (pizzaEncontrada) {
      const nuevoCart = cart.map((pizza) =>
        pizza.name === name
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      );

      setCart(nuevoCart);
    } else {
      const nuevaPizza = {
        name,
        price,
        ingredients,
        img,
        count: 1,
      };

      setCart([...cart, nuevaPizza]);
    }
  };

  return (
    <article className="card-pizza">
      <img
        src={img}
        alt={name}
        className="pizza-img"
        onError={(e) => {
          e.currentTarget.onerror = null
          e.currentTarget.src = "/src/assets/img/pepperoni.jpg"
        }}
      />

      <div className="card-body">
        <h3>Pizza {name}</h3>

        <hr />

        <p className="ingredients-title">Ingredientes:</p>

        <ul className="ingredients-list">
          {ingredients?.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <hr />

        <h2>Precio: ${price.toLocaleString('es-CL')}</h2>

        <div className="card-buttons">
          <button>Ver más 👀</button>
          <button className="btn-add" onClick={addToCart}>Añadir 🛒</button>
        </div>
      </div>
    </article>
  )
}

export default CardPizza