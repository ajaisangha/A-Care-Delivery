// src/pages/Estimates.jsx
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ZONES, RATES } from "../rates";

function zoneIdx(z) {
  return z >= 1 && z <= 3 ? z - 1 : null;
}

export default function Estimates() {
  const [params] = useSearchParams();
  const initial = params.get("service") || "florist";
  const [service, setService] = useState(initial);
  const [zone, setZone] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [handling, setHandling] = useState(0);
  const [wait, setWait] = useState(0);
  const [result, setResult] = useState(null);

  function calc() {
    const z = zoneIdx(Number(zone));
    if (z === null) {
      setResult({ note: "Zone 4 requires custom quote." });
      return;
    }

    let base = 0;
    if (service === "florist") base = RATES.florist.single[z];
    else if (service === "pharmacy") base = RATES.pharmacy.standard[z];
    else if (service === "retail") base = RATES.retail.small[z];
    else base = RATES.sameday.economy[z];

    let cost = base * quantity;
    cost += handling * RATES.extras.handling;
    if (wait > 5) cost += (wait - 5) * RATES.extras.waitingPerMin;
    cost += cost * RATES.extras.fuelSurchargePct;
    setResult({ total: cost.toFixed(2) });
  }

  return (
    <div className="container py-5">
      <h2>Estimate Delivery Cost</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <div className="mb-3">
              <label className="form-label">Service Type</label>
              <select
                className="form-select"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="florist">Florist</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="retail">Retail</option>
                <option value="sameday">Same-Day</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Zone</label>
              <select
                className="form-select"
                value={zone}
                onChange={(e) => setZone(e.target.value)}
              >
                {ZONES.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Extra handling items</label>
              <input
                type="number"
                min="0"
                value={handling}
                onChange={(e) => setHandling(Number(e.target.value))}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Waiting time (minutes)</label>
              <input
                type="number"
                min="0"
                value={wait}
                onChange={(e) => setWait(Number(e.target.value))}
                className="form-control"
              />
            </div>

            <button className="btn btn-primary" onClick={calc}>
              Calculate
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <h5>Result</h5>
            {result ? (
              result.note ? (
                <div className="alert alert-info">{result.note}</div>
              ) : (
                <h3>${result.total}</h3>
              )
            ) : (
              <p className="text-muted">Enter details and click Calculate.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
