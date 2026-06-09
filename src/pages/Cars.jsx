import React from 'react'

import useCars from "../hooks/useCars";
import { Link } from "react-router-dom";
import { useCarContext } from "../context/CarContext";


export default function Cars() {
    const { cars, loading } = useCars();
    const { addCar } = useCarContext();

    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <div className="container">
            <h1>Luxury Cars</h1>

            <div className="grid">
                {cars.map((car) => (
                    <div className="card" key={car.id}>

                        <img src={car.image} alt={car.name} />

                        <h3>{car.name}</h3>

                        <p>{car.price}</p>

                        <button onClick={() => addCar(car)}>
                            Add To Cart
                        </button>

                        <Link to={`/cars/${car.id}`}>
                            <button>View Details</button>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    )
}
