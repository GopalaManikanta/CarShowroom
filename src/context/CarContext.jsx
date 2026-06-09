import { createContext, useReducer, useContext, } from "react";

import { carReducer } from "../carReducer";
import carsData from "../data/carsData";

const CarContext = createContext();

export function CarProvider({ children }) {
  const [wishlist, dispatch] = useReducer(
    carReducer,
    []
  );

  function addCar(car) {
    const exists = wishlist.find(
      (item) => item.id === car.id
    );

    if (exists) {
      alert("Already Added");
      return;
    }

    dispatch({
      type: "ADD_CAR",
      carsData: car,
    });
  }

  function removeCar(id) {
    dispatch({
      type: "REMOVE_CAR",
      carsData: id,
    });
  }

  function clearWishlist() {
    dispatch({
      type: "CLEAR_WISHLIST",
    });
  }

  return (
    <CarContext.Provider
      value={{
        wishlist,
        addCar,
        removeCar,
        clearWishlist,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export function useCarContext() {
  return useContext(CarContext);
}