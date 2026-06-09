import { useEffect, useState } from "react";
import carsData from "../data/carsData";

export default function useCars() {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCars(carsData);
        setLoading(false);
    }, []);

    return { cars, loading };
}
