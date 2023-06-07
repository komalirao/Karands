import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { network } from "../../../services/UserService";

export default function BuildNetwok() {
  const [build, setBuild] = useState({
    location: "",
    preferlocation: "",
    industry: "",
    functionalarea: "",
    designation: "",
    skills: "",
    about: "",
  });

  const [errors, setErrors] = useState({});

  const takeLocation = (event) => {
    console.log(build);
    setBuild((prevstate) => ({ ...prevstate, location: event.target.value }));
  };
  const takePrefer = (event) => {
    setBuild((prevstate) => ({
      ...prevstate,
      preferlocation: event.target.value,
    }));
  };
  const takeIndustry = (event) => {
    setBuild((prevstate) => ({ ...prevstate, industry: event.target.value }));
  };
  const takeFunctionalarea = (event) => {
    setBuild((prevstate) => ({
      ...prevstate,
      functionalarea: event.target.value,
    }));
  };
  const takeDesignation = (event) => {
    setBuild((prevstate) => ({
      ...prevstate,
      designation: event.target.value,
    }));
  };
  const takeSkill = (event) => {
    setBuild((prevstate) => ({ ...prevstate, skills: event.target.value }));
  };
  const takeAbout = (event) => {
    setBuild((prevstate) => ({ ...prevstate, about: event.target.value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!build.location) {
      errors.location = "Please enter location";
    }
    if (!build.preferlocation) {
      errors.preferlocation = "Please enter preferred location";
    }
    if (!build.industry) {
      errors.industry = "Please enter an industry";
    }
    if (!build.functionalarea) {
      errors.functionalarea = "Please enter a functional area";
    }
    if (!build.designation) {
      errors.designation = "Please enter a designation";
    }
    if (!build.skills) {
      errors.skills = "Please enter your skills";
    }
    if (!build.abouthire) {
      errors.abouthire = "Please tell us about yourself";
    }
    return errors;
  };

  const handleFocus = (event) => {
    const name = event.target.name;
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

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

  const handlePrev = (event) => { 
      navigate("/NetworkOrCollaborate");
  };

  const navigate = useNavigate();

  return (
    <div>
   
      <form className="container-fluid mb-2" onSubmit={validateForm}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <p className="bg-primary text-light p-2">
              {" "}
              <b>Looking to Build Network</b>
            </p>
          </div>
          <div className="col-4"></div>
        </div>
        <div class="row mt-1">
          <diV className="col-4"></diV>
          <div class="col-2">
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
          <div class="col-2">
            <input
              type="text"
              class="form-control"
              placeholder="Prefered"
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
        <div class="row mt-1">
          <diV className="col-4"></diV>

          <div className="col-4">
            <div>
              <input
                type="text"
                class="form-control"
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
                class="form-control"
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
                class="form-control"
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
                class="form-control"
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

            <div>
              {" "}
              <textarea
                className="mt-4 w-100"
                placeholder="About Yourself"
                onChange={takeAbout}
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
