import React from 'react'
import { Link } from "react-router-dom";
import { useCarContext } from "./context/CarContext";

export default function Navbar() {
    const { wishlist } = useCarContext();
    return (
        <nav className="navbar">
            <h2>Car Showroom</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>

                <Link to="/cars">Cars</Link>

                <Link to="/cart">
                Cart ({wishlist.length})
                </Link>

                <Link to="/about">About</Link>

                <Link to="/contact">Contact</Link>

                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    )
}
