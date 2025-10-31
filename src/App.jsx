// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Rates from "./pages/Rates";
import Estimates from "./pages/Estimates";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/estimates" element={<Estimates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="bg-light text-center py-3 mt-5">
        &copy; {new Date().getFullYear()} A+ Care Delivery — Vogel Pl, Waterloo
      </footer>
    </>
  );
}
