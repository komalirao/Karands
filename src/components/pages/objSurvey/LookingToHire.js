import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { hireperson } from "../../../services/UserService";

export default function LookingToHire() {
  const [hire, setHire] = useState({
    location: "",
    preferlocation: "",
    industry: "",
    functionalarea: "",
    designation: "",
    skills: "",
    jobType: "",
    abouthire: "",
    workType: "",
  });

  const [errors, setErrors] = useState({});

  const takeLocation = (event) => {
    console.log(hire);
    setHire((prevstate) => ({ ...prevstate, location: event.target.value }));
  };
  const takePrefer = (event) => {
    setHire((prevstate) => ({...prevstate,preferlocation: event.target.value,}));
  };
  const takeIndustry = (event) => {
    setHire((prevstate) => ({ ...prevstate, industry: event.target.value }));
  };
  const takeFunctionalarea = (event) => {
    setHire((prevstate) => ({ ...prevstate, functionalarea: event.target.value,}));
  };
  const takeDesignation = (event) => {
    setHire((prevstate) => ({ ...prevstate, designation: event.target.value }));
  };
  const takeSkill = (event) => {
    setHire((prevstate) => ({ ...prevstate, skills: event.target.value }));
  };
  const takeJobType = (event) => {
    setHire((prevstate) => ({ ...prevstate, jobType: event.target.value }));
  };

  const takeAboutHire = (event) => {
    setHire((prevstate) => ({ ...prevstate, abouthire: event.target.value }));
  };
  const takeworktype = (event) => {
    setHire((prevstate) => ({ ...prevstate, workType: event.target.value }));
  };

  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Navigate to the next page
      navigate("/NetworkOrCollaborate");
    } else {
      // Display errors
      setErrors(errors);
    }
  };

  const handlePrev = () => {
    navigate("/JobOrHire ");
  };

  

  const validateForm = () => {
    const errors = {};
    if (!hire.location) {
      errors.location = "Please enter location";
    }
    if (!hire.preferlocation) {
      errors.preferlocation = "Please enter preferred location";
    }
    if (!hire.industry) {
      errors.industry = "Please enter an industry";
    }
    if (!hire.functionalarea) {
      errors.functionalarea = "Please enter a functional area";
    }
    if (!hire.designation) {
      errors.designation = "Please enter a designation";
    }
    if (!hire.skills) {
      errors.skills = "Please enter your skills";
    }
    if (!hire.jobType) {
      errors.jobType = "Please select a job type";
    }
    if (!hire.abouthire) {
      errors.abouthire = "Please tell us about yourself";
    }
    if (!hire.workType) {
      errors.workType = "Please select a work type";
    }
    return errors;
  };
  const handleFocus = (event) => {
    const name = event.target.name;
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };
 

 
  return (
    <div>
      <form className="container-fluid mb-2" onSubmit={validateForm}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <p className="bg-primary text-light p-2">
              {" "}
              <b>Looking To Hire</b>
            </p>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row mt-1">
          <div className="col-4"></div>
          <div className="col-2">
            <input
              type="text"
              class="form-control"
              placeholder="Location"
              aria-label="First name"
              onChange={takeLocation}
              onFocus={handleFocus}
              name="location"
              required
            />
            {(
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  textAlign: "left",
                  marginTop: "0",
                }}
              >
                {errors.location}
              </p>
            )}
          </div>
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              placeholder="Preffered"
              aria-label="Last name"
              onChange={takePrefer}
              onFocus={handleFocus}
              name="preferlocation"
              required
            />
            {(
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  textAlign: "left",
                  marginTop: "0",
                }}
              >
                {errors.preferlocation}
              </p>
            )}
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>

          <div className="col-4">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Industry"
                aria-label="First name"
                onChange={takeIndustry}
                onFocus={handleFocus}
                name="industry"
                required
              />
              {(
                <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  textAlign: "left",
                  marginTop: "0",
                }}
              >
                {errors.industry}
              </p>
              )}
            </div>
            <div className=" mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Functional Area"
                aria-label="First name"
                onChange={takeFunctionalarea}
                onFocus={handleFocus}
                name="functionalarea"
                required
              />
              {(
                <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  textAlign: "left",
                  marginTop: "0",
                }}
              >
                {errors.functionalarea}
              </p>
              )}
            </div>
            <div className=" mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Title/Designation"
                aria-label="First name"
                onChange={takeDesignation}
                onFocus={handleFocus}
                name="designation"
                required
              />
              {(
                <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  textAlign: "left",
                  marginTop: "0",
                }}
              >
                {errors.designation}
              </p>
              )}
            </div>
            <div className=" mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Skills"
                aria-label="First name"
                onChange={takeSkill}
                onFocus={handleFocus}
                name="skills"
                required
              />
              {(
                <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  textAlign: "left",
                  marginTop: "0",
                }}
              >
                {errors.skills}
              </p>
              )}
            </div>
            <div className=" mt-2" onChange={takeJobType} onFocus={handleFocus}>
            <h6 className="text-primary pt-1">Job Type</h6>
            <hr/>
              <fieldset required>
              <label>
                Fresher <input type="radio" name="jobType" required/>
              </label>
              <label className="ms-4">
                Experienced <input type="radio" name="jobType" required />
              </label>
              <label className="ms-4">
                Both <input type="radio" name="jobType" required />
              </label>
              </fieldset>
              {(
                <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  textAlign: "left",
                  marginTop: "0",
                }}
              >
                {errors.jobType}
              </p>
              )}
              
            </div>
            <div>
              <textarea
                className="mt-2 w-100"
                placeholder="About Your Hiring Plan"
                onChange={takeAboutHire}
                onFocus={handleFocus}
                name="abouthire"
                maxLength={500}
              ></textarea>
              {(
                <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  textAlign: "left",
                  marginTop: "0",
                }}
              >
                {errors.abouthire}
              </p>
              )}
            </div>

            <div className=" mt-1" onChange={takeworktype} onFocus={handleFocus}>
            <h6 className="text-primary">Work Type</h6>
            <hr/>
             <fieldset>
             <lable>
             Work From Home <input type="radio" name="workType" />
           </lable>
           <lable className="ms-2">
             Work From Office <input type="radio" name="workType" />
           </lable>
           <lable className="ms-2">
             Remote <input type="radio" name="workType" />
           </lable>
             </fieldset>
             {(
              <p
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "left",
                marginTop: "0",
              }}
            >
              {errors.workType}
            </p>
            )}
              
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button className="btn btn-primary mt-3" onClick={handlePrev}>
                <span className="bi bi-chevron-compact-left"></span>prev
              </button>
              <button className="btn btn-primary mt-3" onClick={handleNext}>
                next<span className="bi bi-chevron-compact-right"></span>
              </button>
            </div>
          </div>

          <div className="4"></div>
        </div>
      </form>
    </div>
  );
}
