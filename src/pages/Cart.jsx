import React from 'react'
import { useCarContext } from "../context/CarContext";

export default function Cart() {
  const { wishlist, removeCar, clearWishlist } =
    useCarContext();

  return (
    <div className="container">
      <h1>My Cart</h1>

      {wishlist.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        <div>
          <button onClick={clearWishlist}>
            Clear Cart
          </button>
         <div className='cartData'>
          {wishlist.map((car) => (
            <div className="card" key={car.id}>
              <img
                src={car.image}
                alt={car.name}
              />

              <h3>{car.name}</h3>

              <p>{car.price}</p>

              <button
                onClick={() =>
                  removeCar(car.id)
                }
              >
                Remove
              </button>
            </div>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}
