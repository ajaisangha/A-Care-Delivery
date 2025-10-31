// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-5">
      <h1 className="mb-3">A+ Care Delivery</h1>
      <p className="lead">
        Professional pickup & delivery based in Waterloo — florist, pharmacy,
        retail, same-day and custom services.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Same-Day Delivery</h5>
              <p className="card-text">
                Need something delivered today? Choose economy, standard, or
                express service.
              </p>
              <Link to="/estimates?service=sameday" className="btn btn-primary">
                Get Estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Florist Deliveries</h5>
              <p className="card-text">
                We handle delicate floral arrangements with care and photo
                proof.
              </p>
              <Link to="/estimates?service=florist" className="btn btn-primary">
                Estimate Floral Delivery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
