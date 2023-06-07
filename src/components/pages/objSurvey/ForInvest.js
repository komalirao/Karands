import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { investmentApi } from "../../../services/UserService";

export default function ForInvest() {
  const [invest, setInvest] = useState({
    location: "",
    preferlocation: "",
    industryType: "",
    industry: "",
    // functionalarea: "",
    investmentamountLimit: "",
    projectstatus: "",
    aboutProjectplan: "",
    attachproject: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!invest.location) {
      errors.location = "Please enter location";
    }
    if (!invest.preferlocation) {
      errors.preferlocation = "Please enter preferred location";
    }
    if (!invest.industryType) {
      errors.industryType = "Please enter an industry Type";
    }
    if (!invest.industry) {
      errors.industry = "Please enter Industry";
    }
    if (!invest.investmentamountLimit) {
      errors.investmentamountLimit = "Please enter any amount";
    }
    if (!invest.projectstatus) {
      errors.projectstatus = "Please enter your project status";
    }
    if (!invest.aboutProjectplan) {
      errors.aboutProjectplan = "Please enter your project plans";
    }
    if (!invest.attachproject) {
      errors.attachproject = "Please select your project file";
    }
    return errors;
  };
  const handleFocus = (event) => {
    const name = event.target.name;
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const takeLocation = (event) => {
    console.log(invest);
    setInvest((prevstate) => ({ ...prevstate, location: event.target.value }));
  };
  const takePrefer = (event) => {
    console.log(invest);
    setInvest((prevstate) => ({
      ...prevstate,
      preferlocation: event.target.value,
    }));
  };
  const takeIndustryType = (event) => {
    console.log(invest);
    setInvest((prevstate) => ({
      ...prevstate,
      industryType: event.target.value,
    }));
  };

  const takeIndustry = (event) => {
    setInvest((prevstate) => ({ ...prevstate, industry: event.target.value }));
  };
  // const takeFunctionalarea = (event) => {
  //   setInvest((prevstate) => ({
  //     ...prevstate,
  //     functionalarea: event.target.value,
  //   }));
  // };
  const takeAmountLimit = (event) => {
    setInvest((prevstate) => ({
      ...prevstate,
      investmentamountLimit: event.target.value,
    }));
  };
  const takeStatus = (event) => {
    setInvest((prevstate) => ({
      ...prevstate,
      projectstatus: event.target.value,
    }));
  };

  const takeAbout = (event) => {
    setInvest((prevstate) => ({
      ...prevstate,
      aboutProjectplan: event.target.value,
    }));
  };
  const takeProject = (event) => {
    setInvest((prevstate) => ({
      ...prevstate,
      attachproject: event.target.value,
    }));
  };

  const navigate = useNavigate();
  const handleNext = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Navigate to the next page
      navigate("/AddAffiliate");
    } else {
      // Display errors
      setErrors(errors);
    }
  };

  const handlePrev = (event) => {
    navigate("/Invest");
  };

  return (
    <div>
      <form className="container-fluid mb-2" onSubmit={validateForm}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <p className="bg-primary text-light p-2">
              <b>Looking for Investments</b>
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
        <div class="row mt-1">
          <diV className="col-4"></diV>

          <div className="col-4">
            <div
              className=" mt-1"
              onChange={takeIndustryType}
              onFocus={handleFocus}
            >
              <h5 className="text-primary">Industry</h5>
              <hr />
              <fieldset required>
                <lable>
                  Production Industry <input type="radio" name="industryType" />
                </lable>
                <lable className="ms-4">
                  Service Industry <input type="radio" name="industryType" />
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
                  {errors.industryType}
                </p>
              }
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
              {/*<div className=" mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Functional Area"
                  aria-label="First name"
                  onChange={takeFunctionalarea}
                />
                </div>*/}
              <div className="mt-3 mb-2">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Investment amount limit "
                  aria-label="First name"
                  onChange={takeAmountLimit}
                  onFocus={handleFocus}
                  name="investmentamountLimit"
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
                    {errors.investmentamountLimit}
                  </p>
                }
              </div>

              <div
                className=" mt-2 p-2"
                onChange={takeStatus}
                onFocus={handleFocus}
              >
                <h6 className="mt-2 text-primary">Project Stage</h6>
                <hr />
                <fieldset required>
                  <lable>
                    Under construction{" "}
                    <input type="radio" name="projectstatus" />
                  </lable>
                  <lable className="ms-4">
                    Already working <input type="radio" name="projectstatus" />
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
                    {errors.projectstatus}
                  </p>
                }
              </div>
            </dl>

            <div>
              {" "}
              <textarea
                className="mt-2 w-100"
                placeholder="About Your Project Plans"
                onChange={takeAbout}
                onFocus={handleFocus}
                name="aboutProjectplan"
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
                  {errors.aboutProjectplan}
                </p>
              }
            </div>
            <div className="form-input mt-2 w-100">
              <input
                type="file"
                className="form-control"
                onChange={takeProject}
                onFocus={handleFocus}
                name="attachproject"
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
                  {errors.attachproject}
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
