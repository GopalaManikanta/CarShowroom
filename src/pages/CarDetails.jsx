import React from 'react'
import { useParams } from "react-router-dom";

export default function CarDetails() {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Car Id : {id}</h1>
    </div>
  );
}
