// Siri Smart Bus - React App Clone with Seat Selection & Multilingual Support
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BusFront, Calendar, MapPin } from "lucide-react";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow">
          <h1 className="text-2xl font-bold">Siri Smart Bus</h1>
          <nav>
            <Link to="/" className="mr-4 hover:underline">Home</Link>
            <Link to="/bookings" className="mr-4 hover:underline">My Bookings</Link>
            <Link to="/seats" className="hover:underline">Seat Booking</Link>
          </nav>
        </header>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/seats" element={<SeatBooking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <Card className="p-4 shadow-md">
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="text-blue-600" />
              <input type="text" placeholder="From (e.g., Nellore)" className="border p-2 w-full rounded" />
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-blue-600" />
              <input type="text" placeholder="To (e.g., Bangalore)" className="border p-2 w-full rounded" />
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="text-blue-600" />
              <input type="date" className="border p-2 w-full rounded" />
            </div>
          </div>
          <div className="text-center mt-4">
            <Button onClick={() => navigate("/seats")} className="bg-blue-600 text-white px-6 py-2 rounded">Search Buses</Button>
          </div>
        </CardContent>
      </Card>

      <img src="/bus.jpg" alt="Siri Smart Bus Promo" className="w-full rounded shadow-lg" />

      <Card className="p-4 bg-yellow-100">
        <CardContent className="text-center text-lg font-semibold text-yellow-800">
          🎉 Book directly & get 10% OFF on all Siri Smart Bus tickets!
        </CardContent>
      </Card>
    </div>
  );
};

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seats = Array.from({ length: 36 }, (_, i) => i + 1);
  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Select Your Seats</h2>
      <div className="grid grid-cols-6 gap-2">
        {seats.map((seat) => (
          <div
            key={seat}
            onClick={() => toggleSeat(seat)}
            className={`cursor-pointer p-2 text-center rounded border ${
              selectedSeats.includes(seat) ? "bg-green-500 text-white" : "bg-white"
            }`}
          >
            {seat}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-lg">Selected Seats: {selectedSeats.join(", ") || "None"}</p>
        <Button className="mt-2 bg-blue-600 text-white">Proceed to Book</Button>
      </div>
    </div>
  );
};

const Bookings = () => {
  return (
    <div className="text-center text-gray-700">
      <BusFront className="mx-auto text-blue-600 mb-4" size={40} />
      <p>No bookings yet. Start by searching for buses.</p>
    </div>
  );
};

export default App;