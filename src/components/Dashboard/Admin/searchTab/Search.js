import React from "react";
import { useState } from "react";
import Header from "../../../pages/objSurvey/Header";
import "./search.css";

//import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import {
  accountApi,
  // contactinfoApi,
  //educationApi,
  experienceApi,
  personinfoApi,
  // projectApi,
} from "../../../../services/UserService";
import {
  Autocomplete,
  Box,
  TextField,
  //Typography,
  //FilledInput,
  //InputAdornment,
  //IconButton,
} from "@mui/material";

//import DateComponent from "../Datepicker/Datepicker";
//import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function Search() {
  const [educationalList, setEducationalList] = useState([{ educational: "" }]);

  const [tags, setTags] = useState([]);

  const [experience, setExperience] = useState({
    designation: "",
    company: "",
    location: "",
    experienceStartDate: "",
    experienceEndDate: "",
    currency: "",
    salary: "",
    rupees: "",
    industry: "",
    functionalarea: "",
    skills: "",
    description: "",
  });
  const handleServiceRemove = (index) => {
    const list = [...educationalList];
    list.splice(index, 1);
    setEducationalList(list);
  };
  const handleServiceAdd = () => {
    setEducationalList([...educationalList, { educational: "" }]);
  };

  const takeLocation = (event) => {
    setPersonInfo((prevstate) => ({
      ...prevstate,
      location: event.target.value,
    }));
  };
  const takeSalary = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      salary: event.target.value,
    }));
  };

  const locations = ["Hyderabad", "Karantaka", "Mumbai", "Delhi", "Kolkata"];
  const [selectLocation, setSelectLocation] = useState();
  const handleLocation = (event, selectedValue) => {
    setSelectLocation(selectedValue);
  };
  const filterLocations = (locations, { inputValue }) => {
    if (inputValue === "") {
      return []; // Return empty array when input value is empty
    }
    return locations.filter((location) =>
      location.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  };
  const filterSkills = (skills, { inputValue }) => {
    if (inputValue === "") {
      return [];
    }

    return skills.filter((skill) =>
      skill.label.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  };
  const saveDetails = () => {
    accountApi(account);
    personinfoApi(personinfo);
    experienceApi(experience);
  };

  const [account, setAccount] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [personinfo, setPersonInfo] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateofBirth: "",
    location: "",
    maritalStatus: "",
    position: "",
    experience: "",
    resume: "",
    language: "",
    about: "",
  });
  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  };

  return (
    <div className="container-fluid">
      <Header />
      <h4 className=" text-dark">Search here for your requirement</h4>
      <div className="row mt-2">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="form-group">
            <div className="row justify-content-md-center">
              <label for="skills" className="col-lg-3 col-form-label mt-4">
                Key Words
              </label>
              <div className="tags-input-container">
                {/* <div className="tag-item">
        <span className="text">hello</span>
        <span className="close">&times;</span>
       </div>*/}
                {tags.map((tag, index) => (
                  <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span onClick={() => removeTag(index)} className="close">
                      &times;
                    </span>
                  </div>
                ))}
                <input
                  onKeyDown={handleKeyDown}
                  type="text"
                  className="tags-input col-lg-3 col-form-label "
                  placeholder="type skills,titles"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row justify-content-md-center">
              <label for="Location" className="col-lg-3 col-form-label">
                Add City
              </label>
              <div className=" col-lg-6">
                <Box>
                  <Autocomplete
                    options={locations}
                    defaultValue={null}
                    value={selectLocation}
                    onChange={handleLocation}
                    filterOptions={filterLocations}
                    renderInput={(parms) => (
                      <TextField {...parms} color="primary" />
                    )}
                  />
                </Box>
              </div>
              <div className="form-group">
                <div className="row justify-content-md-center mt-3 ">
                  <label for="totalExp" className="col-lg-3 col-form-label">
                    Experience
                  </label>
                  <div className="col-lg-6 d-flex flex-row">
                    <div className="ui-select">
                      <select id="inputMonths" className="form-select">
                        <option value="">Years</option>
                        <option value="">0</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6+</option>
                      </select>
                    </div>
                    <span>
                      <div className="ui-select">
                        <select id="maritalstatus" className="form-select ms-2">
                          <option value="">Months</option>
                          <option value="">0</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                          <option value="">5</option>
                          <option value="">6</option>
                          <option value="">7</option>
                          <option value="">8</option>
                          <option value="">9</option>
                          <option value="">10</option>
                          <option value="">11</option>
                        </select>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row justify-content-md-center ">
                  <label for="anualSalary" className="col-lg-3 col-form-label">
                    Salary
                  </label>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="ui-select">
                          <select id="maritalstatus" className="form-select">
                            <option value="">&#8377;</option>
                            <option value="">&#8377;</option>
                            <option value="">&#x24;</option>
                            <option value="">&#8364;</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="ui-select">
                          <select id="lakhs" className="form-select">
                            <option value="">Min salary</option>
                            <option value="">1.0</option>
                            <option value="">2.0</option>
                            <option value="">3.0</option>
                            <option value="">4.0</option>
                            <option value="">5.0</option>
                            <option value="">6+</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="ui-select">
                          <select id="maritalstatus" className="form-select">
                            <option value="">Max Salary</option>
                            <option value="">5.2</option>
                            <option value="">6.8</option>
                            <option value="">7.2</option>
                            <option value="">8.5</option>
                            <option value="">9.4</option>
                            <option value="">10</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="form-horizontal" role="form">
            {educationalList.map((singleEducational, index) => (
              <div key={index} className="educational">
                <div className="form-group">
                  <div className="row justify-content-md-center">
                    <label
                      for="highestQualifications"
                      className="col-lg-3 col-form-label"
                    >
                      Highest education
                    </label>
                    <div className=" col-lg-6">
                      <select
                        className="form-select"
                        id="exampleFormControlSelect1"
                      >
                        <option value="" selected disabled>
                          {" "}
                          Select Highest Qualifications
                        </option>
                        <option>Doctorate/Phd</option>
                        <option>Masters</option>
                        <option>Post Graduation</option>
                        <option>Gradution</option>
                        <option>Diploma</option>
                        <option>12th</option>
                        <option>10th</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </form>
        </div>
        <div className="bton mt-2">
            <button className="btn btn-primary"> Submit</button>
          </div>
      </div>
      <div className="col-2">
        <div></div>
      </div>
    </div>
  );
}
