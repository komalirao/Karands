import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../pages/objSurvey/Header";

export default function JobOrHire() {
  const navigate = useNavigate();
  function btnClick1() {
    navigate("/LookingForJob");
  }
  function btnClick2() {
    navigate("/LookingToHire");
  }

  return (
    <div>
      <Header />
      <div className="row">
        <p className="mt-2">
          Please select one from below options{" "}
          <span className="bi bi-arrow-down-circle-fill"></span>&nbsp;&nbsp;
          <a href="/NetworkOrCollaborate">Skip</a>
        </p>
        <div className="col-4"></div>

        <div
          className="col-4 d-flex mb-2 mt-2"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <button className="btn btn-primary" onClick={btnClick1}>
              Looking for Job
            </button>
          </div>
          <div>
            <button className="btn btn-primary" onClick={btnClick2}>
              Looking to Hire
            </button>
          </div>
        </div>

        <div className="col-4"></div>
      </div>
    </div>
  );
}
