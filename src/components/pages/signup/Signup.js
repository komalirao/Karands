import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import JSONDATA from "../../../data/mock_data.json";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  //MDBBtn,
  //MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Header from "../objSurvey/Header";
import TermsNdConditions from "./TermsNdConditions";
//import { loginApi, signup } from "../../../services/UserService";
import axios from "axios";
import { Autocomplete, Box, TextField } from "@mui/material";
import "./signup.css";

function Signup() {
  const [error, setError] = useState("");
  const [cities, setCities] = useState([]);
  //const [citiesData, setCitiesData] = useState([]);
  const [nameConatinerStyle, setNameContainerStyle] = useState("");
  const [mobileConatinerStyle, setMobileContainerStyle] = useState("");
  const [emailConatinerStyle, setEmailContainerStyle] = useState("");
  const [locationConatinerStyle, setLocationContainerStyle] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [locationError, setLocationError] = useState("");

  const [signupobj, setSignupobj] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
  });

  const [signinobj, setSigninobj] = useState({ email: "", password: "" });

  const takeName = (event) => {
    setSignupobj((prevstate) => ({ ...prevstate, name: event.target.value }));
  };
  const takeEmail = (event) => {
    setSignupobj((prevstate) => ({ ...prevstate, email: event.target.value }));
  };
  const takeMobile = (event) => {
    setSignupobj((prevstate) => ({ ...prevstate, mobile: event.target.value }));
  };

  // const takeLocation = (event) => {
  //   setSignupobj((prevstate) => ({
  //     ...prevstate,
  //     location: event.target.value,
  //   }));
  // };

  const takeEmailId = (event) => {
    setSigninobj((prevstate) => ({ ...prevstate, email: event.target.value }));
  };

  const takePassword = (event) => {
    setSigninobj((prevstate) => ({
      ...prevstate,
      password: event.target.value,
    }));
  };

  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  const navigate = useNavigate();

  const validateName = () => {
    let name = signupobj.name;
    if (name === "") {
      setNameError("Please enter your name");
    }
  };

  const validateEmail = () => {
    let email = signupobj.email;
    if (email !== "" && email.includes("@") && email.includes(".com")) {
      setEmailError("");
    } else {
      setEmailError("Please enter your email & it must include '@'  & '.com'");
    }
  };

  const validateNumber = () => {
    let number = signupobj.number;
    if (number === "") {
      setNameError("Please enter your number");
    }
  };

  const btnClick = () => {
    if (signupobj.name === "") {
      setNameError("Please enter your name");
      setNameContainerStyle("border-danger");
    }
    if (signupobj.email === "") {
      setEmailError("Please enter your email");
      setEmailContainerStyle("border-danger");
    }
    if (signupobj.mobile === "") {
      setMobileError("Please enter your mobile");
      setMobileContainerStyle("border-danger");
    }
    if (signupobj.location === "") {
      setLocationError("Please enter your location");
      setLocationContainerStyle("border-danger");
    }

    if (
      signupobj.name !== "" &&
      signupobj.email !== "" &&
      signupobj.mobile !== "" &&
      signupobj.location !== ""
    ) {
      navigate("/Verification");
    }
  };

  const opensignin = () => {
    navigate("/ichpdashboard");
  };

  useEffect(() => {
    fetch(`http://localhost:8080/city/listofcities`)
      .then((response) => response.json())
      .then((response) => {
        setCities(response);
        console.log("response", response);
      });
  }, []);

  // Fetching the location from API and storing it in an array.
  const [locations, setLocations] = useState([]);
  const locationData = [];

  useEffect(() => {
    const loadLocations = async () => {
      const locations = await axios.get(
        "http://localhost:8080/city/listofcities"
      );

      console.log(locations.data.length);
      for (let i = 0; i < locations.data.length; i++) {
        locationData[i] = locations.data[i].city;
      }
      console.log(locationData);
      setLocations(locationData);
    };
    loadLocations();
  }, []);

  //const [selectLocation, setSelectLocation] = useState();

  // Filtering the locations in the array dropdown

  const filterLocations = (locations, { inputValue }) => {
    if (inputValue === "") {
      return []; // Return empty array when input value is empty
    }
    return locations.filter((location) =>
      location.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  };

  return (
    <div>
      <Header />
      <div className="container-fluid">
      <MDBContainer
        className="p-3 my-5 d-flex flex-column"
        style={{ width: "400px" }}
      >
        <MDBTabs
          pills
          justify
          className="mb-1 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <div className="text-center mb-3"></div>

            <MDBInput
              wrapperClass="mb-4"
              placeholder="Emali Id"
              id="form1"
              type="email"
              onChange={takeEmailId}
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Password"
              id="form2"
              type="password"
              onChange={takePassword}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="/ForgetPassword">Forgot password?</a>
            </div>

            <button className="mb-4 w-100 btn btn-primary" onClick={opensignin}>
              Sign in
            </button>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <div className="text-center mb-3"></div>

            <MDBInput
              wrapperClass="mb-2"
              placeholder="Your Name"
              id="form1"
              type="text"
              onChange={takeName}
              className={nameConatinerStyle}
            />
            <p
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "left",
                marginTop: "0",
              }}
            >
              {nameError}
            </p>
            <MDBInput
              wrapperClass="mb-2"
              placeholder="Email id"
              id="form1"
              type="email"
              onChange={takeEmail}
              className={emailConatinerStyle}
              onKeyDown={validateName}
            />
            <p
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "left",
                marginTop: "0",
              }}
            >
              {emailError}
            </p>
            <MDBInput
              wrapperClass="mb-2"
              placeholder=" phone Number"
              id="form1"
              type="tel"
              onChange={takeMobile}
              className={mobileConatinerStyle}
              onKeyDown={validateEmail}
            />
            <p
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "left",
                marginTop: "0",
              }}
            >
              {mobileError}
            </p>

            <Box>
              <Autocomplete
                wrapperClass="mb-2"
                placeholder="Location"
                id="form1"
                type="text"
                options={locations}
                defaultValue={null}
               // value={selectLocation}
                onKeyDown={validateNumber}
                onChange={(event, newValue) => {
                  console.log(newValue);
                  setSignupobj((prevstate) => ({
                    ...prevstate,
                    location: newValue,
                  }));
                }}
                filterOptions={filterLocations}
                renderInput={(parms) => (
                  <TextField
                    {...parms}
                    placeholder="Location"
                    // label="Type Location"
                    color="primary"
                  />
                )}
              />
            </Box>
            <p
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "left",
                marginTop: "0",
              }}
            >
              {locationError}
            </p>
            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
              />
              &nbsp;&nbsp;
              <Link data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                read
              </Link>
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable ">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Terms and Conditions
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <TermsNdConditions />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p>{error}</p>

            <button className="mb-4 w-100 btn btn-primary" onClick={btnClick}>
              Sign up
            </button>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
      </div>
    </div>
  );
}

export default Signup;
