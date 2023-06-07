import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../pages/objSurvey/Header";

export default function Invest() {
  const navigate = useNavigate();
  function btnClick7() {
    navigate("/ForInvest");
  }
  function btnClick8() {
    navigate("/ToInvest");
  }

  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <p className="mt-2">
          <a href="/Mentor">Back</a>&nbsp;&nbsp;Please select one from below
          options <span className="bi bi-arrow-down-circle-fill"></span>
          &nbsp;&nbsp;<a href="/AddAffiliate">Skip</a>
        </p>

        <div className="col-4"></div>
        <div
          className="col-4 d-flex mb-2 mt-2"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <button className="btn btn-primary" onClick={btnClick7}>
              Looking for Investments
            </button>
          </div>
          <div>
            <button className="btn btn-primary" onClick={btnClick8}>
              Looking to Investment
            </button>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
