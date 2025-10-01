import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";


const EMICalculator = ({ user }) => {
  const [loanServices, setLoanServices] = useState([]);
  const [codes, setCodes] = useState([]);
  const [selectedCode, setSelectedCode] = useState(null);
  const [loanAmount, setLoanAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/allservices")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setLoanServices(response.data);
        } else {
          console.error("Invalid data format:", response.data);
          setLoanServices([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching loan services:", err);
        setLoanServices([]); 
      });
  }, []);

  const handleTypeChange = (e) => {
    const selected = e.target.value;
    setSelectedCode(null);
    setLoanAmount("");
    setTenure("");
    setEmi(null);

    const found = loanServices.find((s) => s.type === selected);
    if (found && Array.isArray(found.detail)) {
      setCodes(found.detail);
    } else {
      setCodes([]);
    }
  };

  const handleCodeChange = (e) => {
    const codeValue = e.target.value;
    const codeDetail = codes.find((c) => c.type === codeValue);
    setSelectedCode(codeDetail || null);
  };

  const calculateEMI = (e) => {
    e.preventDefault();

    if (!selectedCode || !loanAmount || !tenure) {
      setEmi("All fields are required");
      return;
    }

    const principal = parseFloat(loanAmount);
    const months = parseInt(tenure);
    const rate = selectedCode.rate / 12;

    // Prevent negative or zero values
    if (principal <= 0 || months <= 0) {
      setEmi("Loan amount and tenure must be positive numbers");
      return;
    }

    if (
      isNaN(principal) ||
      isNaN(months) ||
      principal < selectedCode.min ||
      principal > selectedCode.max
    ) {
      setEmi("Invalid loan amount or tenure");
      return;
    }

    const emiValue =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);

    setEmi(emiValue.toFixed(2));
  };

  return (
    <>
      <Navbar user={user} />
      <div className="container mt-5 py-4">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light shadow rounded p-4">
            <h3 className="text-center text-primary">EMI Calculator</h3>
            <p className="text-center text-muted small">
              (Please check the minimum and maximum loan amount before checking)
            </p>

            <form onSubmit={calculateEMI}>
              <div className="mb-3">
                <label className="form-label fw-bold">Loan Type</label>
                <select
                  className="form-select"
                  onChange={handleTypeChange}
                  required
                >
                  <option value="">Select Loan Type</option>
                  {loanServices?.map((service) => (
                    <option key={service.code} value={service.type}>
                      {service.type}
                    </option>
                  ))}
                </select>
              </div>

              {codes.length > 0 && (
                <div className="mb-3">
                  <label className="form-label fw-bold">Code</label>
                  <select
                    className="form-select"
                    onChange={handleCodeChange}
                    required
                  >
                    <option value="">Select Code</option>
                    {codes?.map((code) => (
                      <option key={code.type} value={code.type}>
                        {code.type}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {selectedCode && (
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Loan Amount (Min ₹{selectedCode.min}, Max ₹
                    {selectedCode.max})
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="Enter loan amount"
                    required
                    min={selectedCode.min} 
                  />
                </div>
              )}

              {selectedCode && (
                <div className="mb-3">
                  <label className="form-label fw-bold">Tenure (months)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    placeholder="Enter tenure in months"
                    required
                    min={1} 
                  />
                </div>
              )}

              <button type="submit" className="btn btn-warning w-100">
                Submit
              </button>
            </form>

            {emi && (
              <div className="text-center mt-3">
                {isNaN(emi) ? (
                  <span className="text-danger fw-bold">{emi}</span>
                ) : (
                  <span className="text-success fw-bold">Estimated EMI: ₹{emi}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EMICalculator;