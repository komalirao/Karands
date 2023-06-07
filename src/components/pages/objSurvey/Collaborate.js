import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { collaborateApi } from "../../../services/UserService";

export default function Collaborate() {
  
  const [collaborate, setCollaborate] = useState({
    location: "",
    preferlocation: "",
    industry: "",
    functionalarea: "",
    designation: "",
    skills: "",
    offerService: "",
    lookingService: "",
    about: "",
  });

  const [errors, setErrors] = useState({});

  const takeLocation = (event) => {
    console.log(collaborate);
    setCollaborate((prevstate) => ({
      ...prevstate,
      location: event.target.value,
    }));
  };
  const takePrefer = (event) => {
    console.log(collaborate);
    setCollaborate((prevstate) => ({
      ...prevstate,
      preferlocation: event.target.value,
    }));
  };
  const takeIndustry = (event) => {
    setCollaborate((prevstate) => ({
      ...prevstate,
      industry: event.target.value,
    }));
  };
  const takeFunctionalarea = (event) => {
    setCollaborate((prevstate) => ({
      ...prevstate,
      functionalarea: event.target.value,
    }));
  };
  const takeDesignation = (event) => {
    setCollaborate((prevstate) => ({
      ...prevstate,
      designation: event.target.value,
    }));
  };
  const takeSkill = (event) => {
    setCollaborate((prevstate) => ({
      ...prevstate,
      skills: event.target.value,
    }));
  };
  const takeOffer = (event) => {
    setCollaborate((prevstate) => ({
      ...prevstate,
      offerService: event.target.value,
    }));
  };
  const takeService = (event) => {
    setCollaborate((prevstate) => ({
      ...prevstate,
      lookingService: event.target.value,
    }));
  };
  const takeAbout = (event) => {
    setCollaborate((prevstate) => ({
      ...prevstate,
      about: event.target.value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!collaborate.location) {
      errors.location = "Please enter location";
    }
    if (!collaborate.preferlocation) {
      errors.preferlocation = "Please enter preferred location";
    }
    if (!collaborate.industry) {
      errors.industry = "Please enter an industry";
    }
    if (!collaborate.functionalarea) {
      errors.functionalarea = "Please enter a functional area";
    }
    if (!collaborate.designation) {
      errors.designation = "Please enter a designation";
    }
    if (!collaborate.skills) {
      errors.skills = "Please enter your skills";
    }
    if (!collaborate.offerService) {
      errors.offerService = "Please enter your service offers";
    }
    if (!collaborate.lookingService) {
      errors.lookingService = "Please enter your services which you are looking for";
    }
    if (!collaborate.abouthire) {
      errors.abouthire = "Please tell us about yourself";
    }
    return errors;
  };

  const handleFocus = (event) => {
    const name = event.target.name;
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
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

  const handlePrev = (event) => {
      navigate("/NetworkOrCollaborate");
  };

  return (
    <div>
      <form className="container-fluid mb-2" onSubmit={validateForm}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <p className="bg-primary text-light p-2">
              {" "}
              <b>Looking to Collaborate</b>
            </p>
          </div>
          <div className="col-4"></div>
        </div>
        <div class="row">
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
        <div class="row">
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
            <div className=" mt-3">
              <input
                type="text"
                class="form-control"
                placeholder="Services you are Offering"
                aria-label="First name"
                onChange={takeOffer}
                onFocus={handleFocus}
                name="offerService"
                required
              />{(
                <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  textAlign: "left",
                  marginTop: "0",
                }}
              >
                {errors.offerService}
              </p>
              )}
            </div>
            <div className=" mt-3">
              <input
                type="text"
                class="form-control"
                placeholder="Services you are Looking for"
                aria-label="First name"
                onChange={takeService}
                onFocus={handleFocus}
                name="lookingService"
                required
              />
              {( <p
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "left",
                marginTop: "0",
              }}
            >
              {errors.lookingService}
            </p>
            )}
            </div>

            <div>
              {" "}
              <textarea
                className="mt-2 w-100"
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
