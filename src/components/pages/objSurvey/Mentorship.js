import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { mentorshipApi } from "../../../services/UserService";

export default function Mentorship() {
  const [mentorship, setMentorShip] = useState({
    location: "",
    preferlocation: "",
    industry: "",
    functionalarea: "",
    designation: "",
    skills: "",
    about: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!mentorship.location) {
      errors.location = "Please enter location";
    }
    if (!mentorship.preferlocation) {
      errors.preferlocation = "Please enter preferred location";
    }
    if (!mentorship.professionalexp) {
      errors.professionalexp = "Please enter proffetional Experience";
    }
    if (!mentorship.industry) {
      errors.industry = "Please enter an industry";
    }
    if (!mentorship.functionalarea) {
      errors.functionalarea = "Please enter a functional area";
    }
    if (!mentorship.designation) {
      errors.designation = "Please enter a designation";
    }
    if (!mentorship.skills) {
      errors.skills = "Please enter your skills";
    }
    if (!mentorship.jobType) {
      errors.jobType = "Please select a job type";
    }
    if (!mentorship.abouthire) {
      errors.abouthire = "Please tell us about yourself";
    }
    if (!mentorship.workType) {
      errors.workType = "Please select a work type";
    }
    return errors;
  };
  const handleFocus = (event) => {
    const name = event.target.name;
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const takeLocation = (event) => {
    console.log(mentorship);
    setMentorShip((prevstate) => ({
      ...prevstate,
      location: event.target.value,
    }));
  };
  const takePrefer = (event) => {
    console.log(mentorship);
    setMentorShip((prevstate) => ({
      ...prevstate,
      preferlocation: event.target.value,
    }));
  };

  const takeIndustry = (event) => {
    setMentorShip((prevstate) => ({
      ...prevstate,
      industry: event.target.value,
    }));
  };
  const takeFunctionalarea = (event) => {
    setMentorShip((prevstate) => ({
      ...prevstate,
      functionalarea: event.target.value,
    }));
  };
  const takeDesignation = (event) => {
    setMentorShip((prevstate) => ({
      ...prevstate,
      designation: event.target.value,
    }));
  };
  const takeSkill = (event) => {
    setMentorShip((prevstate) => ({
      ...prevstate,
      skills: event.target.value,
    }));
  };
  const takeAbout = (event) => {
    setMentorShip((prevstate) => ({ ...prevstate, about: event.target.value }));
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
    navigate("/Mentor");
  };

  return (
    <div>
      <form className="container-fluid mb-2" onSubmit={validateForm}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <p className="bg-primary text-light p-2">
              {" "}
              <b>Looking For Mentorship</b>
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
            {
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
            }
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
            {
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
            }
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
              {
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
              }
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
              {
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
              }
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
              {
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
              }
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
              {
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
              }
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
              {
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
              }
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
