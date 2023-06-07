import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../pages/objSurvey/Header";

export default function NetworkOrCollaborate() {
  const navigate = useNavigate();
  function btnClick3() {
    navigate("/BuildNetwork");
  }
  function btnClick4() {
    navigate("/Collaborate");
  }

  return (
    <div>
      <Header />

      <div className="row">
        <p className="mt-2">
          <a href="/JobOrHire">Back</a>&nbsp;&nbsp;Please select one from below
          options <span className="bi bi-arrow-down-circle-fill"></span>
          &nbsp;&nbsp;<a href="/Mentor">Skip</a>
        </p>

        <div className="col-4"></div>
        <div
          className="col-4 d-flex mb-2 mt-2"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <button className="btn btn-primary" onClick={btnClick3}>
              Looking to Build Network
            </button>
          </div>
          <div>
            <button className="btn btn-primary" onClick={btnClick4}>
              Looking to collaborate
            </button>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
