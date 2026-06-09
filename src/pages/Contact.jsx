import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        car: "",
        date: "",
        location: "",
        message: "",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (
            !form.name ||
            !form.phone ||
            !form.email ||
            !form.car ||
            !form.date
        ) {
            alert("Please fill required fields");
            return;
        }

        console.log(" Car Booking Details:", form);

        alert("Booking Confirmed!....");

        setForm({
            name: "",
            phone: "",
            email: "",
            car: "",
            date: "",
            location: "",
            message: "",
        });
    }

    return (
        <div className="page">
            <h1>Car Booking Page </h1>

            <div className="contact-form">
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="car"
                        placeholder="Car Model"
                        value={form.car}
                        onChange={handleChange}
                    />

                    <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={form.location}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                    />

                    <button type="submit">Book Now</button>
                </form>
            </div>
        </div>
    );
}