import React from "react";
import { useParams } from "react-router-dom";
import carsData from "../data/carsData";

export default function CarDetails() {
  const { id } = useParams();

  const car = carsData.find(
    (item) => item.id === Number(id)
  );

  if (!car) {
    return <h2>Car Not Found</h2>;
  }

  return (
    <div className="container">
      <div className="details-card">

        <img
          src={car.image}
          alt={car.name}
          className="details-image"
        />

        <h1>{car.name}</h1>

        <h2>{car.price}</h2>

        <p>
          This is one of our premium cars with
          advanced features, stylish design and
          excellent performance.
        </p>

      </div>
    </div>
  );
}