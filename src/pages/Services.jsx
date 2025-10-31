// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "florist",
      title: "Florist Delivery",
      desc: "Delicate handling for floral arrangements with photo proof of delivery.",
    },
    {
      id: "pharmacy",
      title: "Pharmacy Delivery",
      desc: "Fast and secure prescription delivery across Waterloo Region.",
    },
    {
      id: "retail",
      title: "Retail Delivery",
      desc: "For stores needing reliable local delivery of small and medium goods.",
    },
    {
      id: "sameday",
      title: "Same-Day Courier",
      desc: "Express, standard, or economy delivery for your urgent items.",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-4">Our Services</h2>
      <div className="row">
        {services.map((s) => (
          <div key={s.id} className="col-md-6 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{s.title}</h5>
                  <p className="card-text">{s.desc}</p>
                </div>
                <div className="text-end">
                  <Link
                    to={`/estimates?service=${s.id}`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Get Estimate →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
