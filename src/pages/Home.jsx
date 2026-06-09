import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">

      <div className="Home">

        <div className="home-content">
          <h1>Premium Car Showroom</h1>

          <p>
            Find Luxury, Sports and Budget Cars in One Place
          </p>

          <Link to="/cars">
            <button>Explore Cars</button>
          </Link>
        </div>

        <div className="home-image">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
            alt="Car"
          />
        </div>

      </div>

      <div className="features">

        <div className="feature-card">
          <h3>Latest Models</h3>
          <p>All brand new cars available</p>
        </div>

        <div className="feature-card">
          <h3>Best Price</h3>
          <p>Affordable and transparent pricing</p>
        </div>

        <div className="feature-card">
          <h3>Fast Booking</h3>
          <p>Book your dream car instantly</p>
        </div>

      </div>

    </div>
  );
}