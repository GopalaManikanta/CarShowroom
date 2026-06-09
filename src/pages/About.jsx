import React from "react";

export default function About() {
  return (
    <div className="about-page">

      <div className="about-header">
        <h1>About Our Car Showroom</h1>
        <p>
          Your trusted destination for luxury,
          sports and budget cars.
        </p>
      </div>

      <div className="about-content">

        <div className="about-card">
          <h2> Who We Are</h2>
          <p>
            We are a premium car showroom offering
            luxury, sports and family cars with
            trusted service and best prices.
          </p>
        </div>

        <div className="about-card">
          <h2> Our Mission</h2>
          <p>
            To provide customers with the best
            car buying experience and quality service.
          </p>
        </div>

        <div className="about-card">
          <h2> Why Choose Us</h2>

          <ul>
            <li>1000+ Cars Available</li>
            <li>Trusted Dealers</li>
            <li>Easy Booking</li>
            <li>24/7 Support</li>
            <li>Affordable Pricing</li>
          </ul>
        </div>

      </div>

     

      <div className="popular-cars">
        <h2> Popular Cars</h2>

        <div className="popular-grid">

          <div className="popular-card">
            <h3>Toyota Fortuner</h3>
            <p>Premium SUV with powerful performance.</p>
          </div>

          <div className="popular-card">
            <h3>Mahindra Thar</h3>
            <p>Best off-road adventure vehicle.</p>
          </div>

          <div className="popular-card">
            <h3>Hyundai Creta</h3>
            <p>Stylish family SUV with smart features.</p>
          </div>

          <div className="popular-card">
            <h3>BMW X5</h3>
            <p>Luxury SUV with premium comfort.</p>
          </div>

        </div>
      </div>

    </div>
  );
}