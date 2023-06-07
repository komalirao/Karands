import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../pages/objSurvey/Header";

export default function Mentor() {
  const navigate = useNavigate();
  function btnClick5() {
    navigate("/Mentoring");
  }
  function btnClick6() {
    navigate("/Mentorship");
  }
  return (
    <div>
      <Header />
      <div className="row">
        <p className="mt-2">
          <a href="/NetworkOrCollaborate">Back</a>&nbsp;&nbsp;Please select one
          from below options{" "}
          <span className="bi bi-arrow-down-circle-fill"></span>&nbsp;&nbsp;
          <a href="/Invest">Skip</a>
        </p>
        <div className="col-4"></div>
        <div
          className="col-4 d-flex mb-2 mt-2"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <button className="btn btn-primary" onClick={btnClick5}>
              Looking for Mentoring
            </button>
          </div>
          <div>
            <button className="btn btn-primary" onClick={btnClick6}>
              Looking for MentorShip
            </button>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
