import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../pages/objSurvey/Header";

export default function AddAffiliate() {
  const navigate = useNavigate();
  function btnClick9() {
    navigate("/Advertise");
  }
  function btnClick10() {
    navigate("/Affiliate");
  }

  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <p className="mt-2">
          <a href="/Invest">Back</a>&nbsp;&nbsp;Please select one from below
          options <span className="bi bi-arrow-down-circle-fill"></span>
        </p>

        <div className="col-4"></div>
        <div
          className="col-4 d-flex mb-2 mt-2"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <button className="btn btn-primary" onClick={btnClick9}>
              Looking to Addvertise
            </button>
          </div>
          <div>
            <button className="btn btn-primary" onClick={btnClick10}>
              Looking to Affiliate
            </button>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
