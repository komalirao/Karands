import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { affiliateApi } from "../../../services/UserService";

export default function Affiliate() {
  const [affiliate, setAffiliate] = useState({
    location: "",
    preferlocation: "",
    industryType: "",
    industry: "",
    functionalarea: "",
    designation: "",
    skills: "",
    age: "",
    advertise: "",
    aboutProduct: "",
    education: "",
    range: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!affiliate.location) {
      errors.location = "Please enter location";
    }
    if (!affiliate.preferlocation) {
      errors.preferlocation = "Please enter preferred location";
    }
    if (!affiliate.industryType) {
      errors.industryType = "Please select an industry";
    }
    if (!affiliate.industry) {
      errors.industry = "Please enter industry here";
    }
    if (!affiliate.functionalarea) {
      errors.functionalarea = "Please enter a functional area";
    }
    if (!affiliate.designation) {
      errors.designation = "Please enter a designation";
    }
    if (!affiliate.skills) {
      errors.skills = "Please enter your skills";
    }
    if (!affiliate.age) {
      errors.age = "Please enter your age";
    }
    if (!affiliate.advertise) {
      errors.advertise = "Please  advertise";
    }
    if (!affiliate.aboutProduct) {
      errors.aboutProduct = "Please write about your product";
    }
    if (!affiliate.education) {
      errors.education = "Please select your education ";
    }
    if (!affiliate.range) {
      errors.range = "Please enter your earning range";
    }
    return errors;
  };

  const handleFocus = (event) => {
    const name = event.target.name;
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const takeLocation = (event) => {
    console.log(affiliate);
    setAffiliate((prevstate) => ({
      ...prevstate,
      location: event.target.value,
    }));
  };
  const takePrefer = (event) => {
    setAffiliate((prevstate) => ({
      ...prevstate,
      preferlocation: event.target.value,
    }));
  };
  const takeIndustryType = (event) => {
    setAffiliate((prevstate) => ({
      ...prevstate,
      industryType: event.target.value,
    }));
  };
  const takeIndustry = (event) => {
    setAffiliate((prevstate) => ({
      ...prevstate,
      industry: event.target.value,
    }));
  };
  const takeFunctionalarea = (event) => {
    setAffiliate((prevstate) => ({
      ...prevstate,
      functionalarea: event.target.value,
    }));
  };
  const takeDesignation = (event) => {
    setAffiliate((prevstate) => ({
      ...prevstate,
      designation: event.target.value,
    }));
  };
  const takeSkill = (event) => {
    setAffiliate((prevstate) => ({ ...prevstate, skills: event.target.value }));
  };
  const takeAge = (event) => {
    setAffiliate((prevstate) => ({ ...prevstate, age: event.target.value }));
  };
  const takeAdvertise = (event) => {
    setAffiliate((prevstate) => ({
      ...prevstate,
      advertise: event.target.value,
    }));
  };

  const takeAbout = (event) => {
    setAffiliate((prevstate) => ({
      ...prevstate,
      aboutProduct: event.target.value,
    }));
  };
  const takeEducation = (event) => {
    setAffiliate((prevstate) => ({
      ...prevstate,
      education: event.target.value,
    }));
  };
  const takeRange = (event) => {
    setAffiliate((prevstate) => ({ ...prevstate, range: event.target.value }));
  };

  const navigate = useNavigate();
  const handleNext = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Navigate to the next page
      navigate("/ReferalCode");
    } else {
      // Display errors
      setErrors(errors);
    }
  };

  const handlePrev = (event) => {
    navigate("/AddAffiliate ");
  };

  return (
    <div>
     
      <form className="container-fluid mb-2" onSubmit={validateForm}>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <p className="bg-primary text-light p-2">
            {" "}
            <b>Affiliate</b>
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

        <div className="col-4" onChange={takeIndustryType} onFocus={handleFocus}>
          <div className=" mt-3">
            <fieldset required>
            <lable>
              Production Industry <input type="radio" name="industryType" />
            </lable>
            <lable className="ms-4">
              Service Industry <input type="radio" name="industryType" />
            </lable>
            <lable className="ms-4">
              Both <input type="radio" name="industryType" />
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
                {errors.industryType}
              </p>
            )}
          </div>
          <dl>
            <div className=" mt-3">
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
                type="number"
                class="form-control"
                placeholder="Age"
                min={18}
                max={60}
                aria-label="First name"
                onChange={takeAge} 
                onFocus={handleFocus}
                name="age"
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
                  {errors.age}
                </p>
              )}
            </div>
          </dl>
          <div className=" mt-2" onChange={takeAdvertise} onFocus={handleFocus}>
            <h6>Advertise Property</h6>
           <fieldset required>
           <lable>
           Web Site <input type="radio"  name="advertise"/>
         </lable>
         <lable className="ms-4">
           Social Media
           <input type="radio" name="advertise"/>
         </lable>
         <lable className="ms-4">
           Word of mouth <input type="radio" name="advertise"/>
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
                {errors.advertise}
              </p>
            )}
          </div>
          <div>
            {" "}
            <textarea
              className="mt-3 w-100"
              placeholder="About Your Your Product"
              onChange={takeAbout}
              onFocus={handleFocus}
              name="aboutProduct"
                required
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
                {errors.aboutProduct}
              </p>
            }
          </div>

          <div className=" mt-2" onChange={takeEducation}>
            <h6>Educational Level</h6>
            <fieldset aria-required>
            <lable className=" mt-2">
              Anyone <input type="radio" name="education" />
            </lable>
            <lable className="ms-3 mt-2">
              Graduates <input type="radio" name="education" />
            </lable>
            <lable className="ms-3 mt-2">
              Masters <input type="radio" name="education" />
            </lable>
            <lable className="ms-3 mt-2">
              PG/PHD <input type="radio" name="education" />
            </lable>
            </fieldset>
            {
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  textAlign: "left",
                  marginTop: "0",
                }}
              >
                {errors.education}
              </p>
            }
          </div>
          <div className=" mt-3">
            <input
              type="number"
              class="form-control"
              placeholder="Earning Range"
              aria-label="First name"
              onChange={takeRange}
              onFocus={handleFocus}
              name="range"
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
                {errors.range}
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
