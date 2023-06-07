import React, {useState} from "react";
import Header from "./Header";
//import axios from "axios";
import { LookingForJobApi } from "../../../services/UserService";

export default function LookingForJob() {

  const [job, setJob] = useState({ location: "", preferedLocation: "", industry : "", functionalArea: "", titleOrDesignation: "", skills: "", experienceLevel: "", description: "", modeOfWork:"" })

  const takeLocation = (event) => {

    setJob((prevState) => ({ ...prevState, location: event.target.value }))
  }
  const takePrefer = (event) => {
    setJob((prevstate) => ({...prevstate,preferedLocation: event.target.value,}));
  };
  const takeIndustry = (event) => {
    setJob((prevstate) => ({ ...prevstate, industry: event.target.value }));
  };
  const takeFunctionalarea = (event) => {
    setJob((prevstate) => ({ ...prevstate, functionalArea: event.target.value,}));
  };
  const takeDesignation = (event) => {
    setJob((prevstate) => ({ ...prevstate, titleOrDesignation: event.target.value }));
  };
  const takeSkill = (event) => {
    setJob((prevstate) => ({ ...prevstate, skills: event.target.value }));
  };
  const takeJobType = (event) => {
    setJob((prevstate) => ({ ...prevstate, experienceLevel: event.target.value }));
  };

  const takeAboutJob = (event) => {
    setJob((prevstate) => ({ ...prevstate, description: event.target.value }));
  };
  const takeworktype = (event) => {
    setJob((prevstate) => ({ ...prevstate, modeOfWork: event.target.value }));
  };

  const handleNext = () => {
   LookingForJobApi(job)
   
  };


  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <p className="bg-primary text-light p-2">
            {" "}
            <b>Looking for Job</b>
          </p>
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row mt-1">
        <div className="col-4"></div>
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            aria-label="First name"
            onChange={takeLocation}
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            placeholder="Preferred"
            aria-label="Last name"
           onChange={takePrefer}
          />
        </div>

      </div>
      <div className="row mt-1">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Industry"
              aria-label="First name"
              onChange={takeIndustry}
              />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Functional Area"
              aria-label="First name"
              onChange={takeFunctionalarea}
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Title/Designation"
              aria-label="First name"
              onChange={takeDesignation}
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Skills"
              aria-label="First name"
              onChange={takeSkill}
              
            />
          </div>
          <div className="mt-2" onChange={takeJobType}>
            <label>
              Fresher <input type="radio" name="job"  />
            </label>
            <label className="ms-4">
              Experienced <input type="radio" name="job"/>
            </label>
          </div>
          <div>
            <textarea
              className="mt-2 w-100"
              placeholder="About Yourself"
              onChange={takeAboutJob}
            ></textarea>
          </div>
          <div className="mt-2" onChange={takeworktype}>
            <label>
              Work From Home <input type="radio" name="type" />
            </label>
            <label className="ms-2">
              Work From Office <input type="radio" name="type" />
            </label>
            <label className="ms-2">
              Remote <input type="radio" name="type" />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="btn btn-primary mt-3">
          <span className="bi bi-chevron-compact-left"></span>prev
        </button>
        <button className="btn btn-primary mt-3" onClick={handleNext}>
          next<span className="bi bi-chevron-compact-right"></span>
        </button>
          </div>
  
        </div>

        <div className="col-4"></div>
      </div>
    </div>
  );
}
