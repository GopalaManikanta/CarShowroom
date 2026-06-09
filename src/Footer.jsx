import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-section">
                <h3>Luxury Car Showroom</h3>

                <p>
                    Your trusted destination for luxury,
                    sports and budget cars.
                </p>
            </div>

            <div className="footer-section">
                <h3>Popular Cars</h3>

                <ul>
                    <li>
                        <Link to="/cars/14">
                            Toyota Fortuner
                        </Link>
                    </li>

                    <li>
                        <Link to="/cars/15">
                            Hyundai Creta
                        </Link>
                    </li>

                    <li>
                        <Link to="/cars/16">
                            Kia Seltos
                        </Link>
                    </li>

                    <li>
                        <Link to="/cars/17">
                            Mahindra XUV700
                        </Link>
                    </li>

                    <li>
                        <Link to="/cars/1">
                            BMW X5
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Quick Links</h3>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/cars">Cars</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Contact Info</h3>

                <p> MG Road, Vijayawada,
                    Andhra Pradesh
                </p>

                <p>
                    <a href="tel:+919100338005">
                        +91 9100338005
                    </a>
                </p>

                <p>
                    <a href="mailto:manikanta@gmail.com">
                        manikanta@gmail.com
                    </a>
                </p>

                <p> Mon - Sat :
                    9:00 AM - 8:00 PM
                </p>
            </div>

        </footer>
    );
}