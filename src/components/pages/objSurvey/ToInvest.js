import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { investorApi } from "../../../services/UserService";

export default function ToInvest() {
  const [investment, setInvestment] = useState({
    location: "",
    preferlocation: "",
    industryType: "",
    industry: "",
    // functionalarea: "",
    audienceType: "",
    investmentamountLimit: "",
    aboutInvestPlan: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!investment.location) {
      errors.location = "Please enter location";
    }
    if (!investment.preferlocation) {
      errors.preferlocation = "Please enter preferred location";
    }
    if (!investment.industryType) {
      errors.industryType = "Please enter proffetional Experience";
    }
    if (!investment.industry) {
      errors.industry = "Please enter an industry";
    }
    if (!investment.audienceType) {
      errors.audienceType = "Please enter a designation";
    }
    if (!investment.investmentamountLimit) {
      errors.investmentamountLimit = "Please enter your skills";
    }
    if (!investment.aboutInvestPlan) {
      errors.aboutInvestPlan = "Please tell us about yourself";
    }
    return errors;
  };
  const handleFocus = (event) => {
    const name = event.target.name;
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };


  const takeLocation = (event) => {
    console.log(investment);
    setInvestment((prevstate) => ({
      ...prevstate,
      location: event.target.value,
    }));
  };
  const takePrefer = (event) => {
    setInvestment((prevstate) => ({
      ...prevstate,
      preferlocation: event.target.value,
    }));
  };
  const takeIndustryType = (event) => {
    setInvestment((prevstate) => ({
      ...prevstate,
      industryType: event.target.value,
    }));
  };

  const takeIndustry = (event) => {
    setInvestment((prevstate) => ({
      ...prevstate,
      industry: event.target.value,
    }));
  };
  // const takeFunctionalarea = (event) => {
  //   setInvestment((prevstate) => ({
  //     ...prevstate,
  //     functionalarea: event.target.value,
  //   }));
  // };

  const takeAudienceType = (event) => {
    setInvestment((prevstate) => ({
      ...prevstate,
      audienceType: event.target.value,
    }));
  };

  const takeAmountLimit = (event) => {
    setInvestment((prevstate) => ({
      ...prevstate,
      investmentamountLimit: event.target.value,
    }));
  };
  const takeAbout = (event) => {
    setInvestment((prevstate) => ({
      ...prevstate,
      aboutInvestPlan: event.target.value,
    }));
  };

  //const investmentopen = () => {

  // console.log(response.data.id);

  //}
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
           
            <b>Looking to Invest</b>
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
          <div className=" mt-2">
            <h6 className="mt-2">Industry</h6>
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

            {/* <div className=" mt-2 p-2" >
 
  <lable >
 Product Industry  <input type="radio" name="job" />
</lable>
<lable className="ms-4">
 Service Industry <input type="radio" name="job" />
</lable>
<lable className="ms-4">
  Both  <input type="radio" name="job" />
</lable>
  </div> */}
           
          </dl>
          <div className=" mt-2 mb-2" onChange={takeAudienceType} onFocus={handleFocus}>
            <h6>Audience Type</h6>
            <fieldset required>
            <lable>
              Individuals <input type="radio" name="audienceType" />
            </lable>
            <lable className="ms-4">
              Groups <input type="radio" name="audienceType" />
            </lable>
            <lable className="ms-4">
              Both <input type="radio" name="audienceType" />
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
                {errors.audienceType}
              </p>
            }
          </div>

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
          <div>
            {" "}
            <textarea
              className="mt-2 w-100"
              placeholder="About Your Investment Plans"
              onChange={takeAbout}
              onFocus={handleFocus}
              name="aboutInvestPlan"
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
                {errors.aboutInvestPlan}
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
