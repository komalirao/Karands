import React from "react";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { Form, FormGroup, Label, Input, Button, FormText } from "reactstrap";
import {
  accountApi,
  contactinfoApi,
  educationApi,
  experienceApi,
  personinfoApi,
  projectApi,
} from "../../services/UserService";
//import ICHPDashboard from "../Dashboard/ICHPDashboard";
//import IUDashboard from "../Dashboard/IUDashboard";
//import Sidebar from "../Sidebar/Sidebar";
// import './editprofile.css';
import JobExperience from "./JobExperience";
import ContactInfo from "./ContactInfo";
import EducationInfo from "./EducationInfo";
import AccountSetting from "./AccountSetting";

function Editprofile() {
  const [account, setAccount] = React.useState({
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
  const [contactinfo, setContactInfo] = useState({
    mobile: "",
    email: "",
    facebook: "",
    linkedin: "",
  });

  const [education, setEducation] = useState({
    qualification: "",
    course: "",
    specialization: "",
    college: "",
    courseType: "",
    passingYear: "",
  });

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

  const [projects, setProjects] = useState({
    project: "",
    year: "",
    client: "",
    description: "",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [location, setLocation] = useState("");
  const [maritalStat, setMaritalStat] = useState("");
  const [position, setPosition] = useState("");
  const [formfile, setFormfile] = useState("");
  const [language, setLanguage] = useState("");
  const [textarea1, setTextarea1] = useState("");
  const [highqualification, sethighqualification] = useState("");
  const [course, setCourse] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [college, setCollege] = useState("");
  const [coursetype, setCoursetype] = useState("");
  const [passingyear, setPassingyear] = useState("");

  // const [textarea1, setTextarea1] = useState("");
  // const [textarea1, setTextarea1] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!birthday) {
      errors.Birthday = "birthday is required";
    }
    if (!location) {
      errors.Location = "location is required";
    }
    if (!maritalStat) {
      errors.maritalStatus = "maritalStatus is required";
    }
    if (!position) {
      errors.position = "position is required";
    }
    if (!formfile) {
      errors.formFileSm = "please upload resume";
    }
    if (!language) {
      errors.Language = "language is required";
    }
    if (!textarea1) {
      errors.exampleFormControlTextarea1 = "write something here";
    }
    if (!highqualification) {
      errors.HigherQualification = "please select any field";
    }
    if (!course) {
      errors.course = "please select any course";
    }
    if (!specialization) {
      errors.specialise = "please select any specialization";
    }
    if (!college) {
      errors.College = "please add your college";
    }
    if (!coursetype) {
      errors.courseType = "please select your course type";
    }
    if (!passingyear) {
      errors.passingYear = "please select your passing year";
    }

    return errors;
  };
  //const navigate = useNavigate();

  const handleChanges = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // submit the form
    } else {
      setErrors(errors);
    }
    //submit for complete page {edokkate ayipova plz}
  };

  // const navigate = useNavigate();
  // const saveDetails = (event) => {
  //   event.preventDefault();
  //   const errors = validateForm();
  //   if (Object.keys(errors).length === "") {
  //     // Navigate to the next page
  //     navigate("/NetworkOrCollaborate");
  //   } else {
  //     // Display errors
  //     setErrors(errors);
  //   }
  // };

  // const handleFocus = (event) => {
  //   const name = event.target.name;
  //   setErrors((prevState) => ({ ...prevState, [name]: "" }));
  // };

 
  const takeFirstName = (event) => {
    setPersonInfo((prevstate) => ({
      ...prevstate,
      firstName: event.target.value,
    }));
  };
  const takeLastName = (event) => {
    setPersonInfo((prevstate) => ({
      ...prevstate,
      lastName: event.target.value,
    }));
  };
  const takeGender = (event) => {
    setPersonInfo((prevstate) => ({
      ...prevstate,
      gender: event.target.value,
    }));
  };

  const takeDateofBirth = (event) => {
    setPersonInfo((prevstate) => ({
      ...prevstate,
      dateofBirth: event.target.value,
    }));
  };
  const takeLocation = (event) => {
    setPersonInfo((prevstate) => ({
      ...prevstate,
      location: event.target.value,
    }));
  };
  const takeMaritalStatus = (event) => {
    setPersonInfo((prevstate) => ({
      ...prevstate,
      maritalStatus: event.target.value,
    }));
  };
  const takePosition = (event) => {
    setPersonInfo((prevstate) => ({
      ...prevstate,
      position: event.target.value,
    }));
  };
  const takeExperience = (event) => {
    setPersonInfo((prevstate) => ({
      ...prevstate,
      experience: event.target.value,
    }));
  };
  const takeResume = (event) => {
    setPersonInfo((prevstate) => ({
      ...prevstate,
      resume: event.target.value,
    }));
  };
  const takeLanguage = (event) => {
    setPersonInfo((prevstate) => ({
      ...prevstate,
      language: event.target.value,
    }));
  };

  const takeAbout = (event) => {
    setPersonInfo((prevstate) => ({ ...prevstate, about: event.target.value }));
  };

  const takeMobile = (event) => {
    setContactInfo((prevState) => ({
      ...prevState,
      mobile: event.target.value,
    }));
  };

  const takeEmailId = (event) => {
    setContactInfo((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };

  const takeFacebook = (event) => {
    setContactInfo((prevState) => ({
      ...prevState,
      facebook: event.target.value,
    }));
  };

  const takeLinkedIn = (event) => {
    setContactInfo((prevState) => ({
      ...prevState,
      linkedin: event.target.value,
    }));
  };

  const takeQualification = (event) => {
    setEducation((prevstate) => ({
      ...prevstate,
      qualification: event.target.value,
    }));
  };

  const takeDesignation = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      designation: event.target.value,
    }));
  };
  const takeCompany = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      company: event.target.value,
    }));
  };
  const takeLocationId = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      location: event.target.value,
    }));
  };
  const takeStartDate = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      experienceStartDate: event.target.value,
    }));
  };
  const takeEndDate = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      experienceEndDate: event.target.value,
    }));
  };
  const takeCurrency = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      currency: event.target.value,
    }));
  };
  const takeSalary = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      salary: event.target.value,
    }));
  };
  const takeThousand = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      rupees: event.target.value,
    }));
  };
  const takeIndustry = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      industry: event.target.value,
    }));
  };
  const takeFunctionalarea = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      functionalarea: event.target.value,
    }));
  };
  const takeSkill = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      skills: event.target.value,
    }));
  };
  const takeDescription = (event) => {
    setExperience((prevstate) => ({
      ...prevstate,
      description: event.target.value,
    }));
  };
  const takeProject = (event) => {
    setProjects((prevstate) => ({ ...prevstate, project: event.target.value }));
  };
  const takeYear = (event) => {
    setProjects((prevstate) => ({ ...prevstate, year: event.target.value }));
  };
  const takeClient = (event) => {
    setProjects((prevstate) => ({ ...prevstate, client: event.target.value }));
  };
  const takeDescriptions = (event) => {
    setProjects((prevstate) => ({
      ...prevstate,
      description: event.target.value,
    }));
  };

  const [educationalList, setEducationalList] = useState([{ educational: "" }]);
  const [experienceList, setExperiencelList] = useState([{ experience: "" }]);

  const [profilePic, setProfilePic] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [certopen, setCertOpen] = useState(false);

  const handleCertificateToggle = () => {
    setCertOpen(!certopen);
  };

  const [otheropen, setOtherOpen] = useState(false);

  const handleOtherToggle = () => {
    setOtherOpen(!otheropen);
  };

  // const handleSubmit = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("profilePic", profilePic);

  //     const response = await fetch("/api/updateProfilePic", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       console.log("Profile picture updated successfully");
  //     } else {
  //       console.error("Profile picture update failed");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred while updating the profile picture:", error);
  //   }
  // };
  const handleSubmit = () => {
    try {
      const blob = dataURLtoBlob(profilePic);
      const blobUrl = URL.createObjectURL(blob);
      localStorage.setItem("profilePic", blobUrl);
      console.log("Profile picture saved to local storage");
    } catch (error) {
      console.error(
        "An error occurred while saving the profile picture to local storage:",
        error
      );
    }
  };

  const dataURLtoBlob = (dataURL) => {
    const parts = dataURL.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  };

  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const percentage = rating * 20;

  const handleServiceRemove = (index) => {
    const list = [...educationalList];
    list.splice(index, 1);
    setEducationalList(list);
  };
  const handleServiceAdd = () => {
    setEducationalList([
      ...educationalList,
      {
        educational: "",
        degree: "",
        institute: "",
        courseType: "",
        passingYear: "",
      },
    ]);
  };

  const handleExperienceAdd = () => {
    setExperiencelList([...experienceList, { experience: "" }]);
  };
  const handleExperienceRemove = (index) => {
    const list = [...experienceList];
    list.splice(index, 1);
    setExperiencelList(list);
  };

  const saveChanges = () => {
    accountApi(account);
    personinfoApi(personinfo);
    contactinfoApi(contactinfo);
    educationApi(education);
    experienceApi(experience);
    projectApi(projects);
  };

  const handleFocus = (event) => {
    const name = event.target.name;
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };
  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
      {/* <Sidebar /> */}
      <div className="container-fluid" onSubmit={validateForm}>
        <div className="row justify-content-md-center">
          <div className="card" style={{ backgroundColor: "#F0F0F0" }}>
            <div className="card-body">
              <div
                className="container-lg bootstrap snippets bootdey justify-content-end"
                style={{ backgroundColor: "white" }}
              >
                <h1 className="edit">Edit Profile</h1>
                <hr />

                <div className="row">
                  <div className="col-md-3">
                    <div className="text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt="Profile pic"
                        className="avatar img-circle img-thumbnail"
                        style={{
                          height: "150px",
                          width: "150px",
                          borderRadius: "50%",
                        }}
                      />
                      <h6>Upload a different photo...</h6>

                      <div className="btn btn-primary btn-rounded">
                        <label
                          className="form-label text-white m-1"
                          htmlFor="customFile1"
                          onClick={handleSubmit}
                        >
                          Upload
                        </label>
                        <input
                          type="file"
                          className="form-control d-none"
                          id="customFile1"
                          onChange={handleFileSelect}
                        />
                      </div>
                    </div>

                    <div className="profile-since">
                      <p className="text-muted mb-2 font-13">
                        <strong>Status :</strong>{" "}
                        <span className="ml-2">Active</span>
                      </p>
                    </div>

                    <div className="profile-since">
                      <p className="text-muted mb-2 font-13">
                        <strong> User Rating:</strong>
                        <span>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <span
                              className="ms-2"
                              key={num}
                              onClick={() => handleRating(num)}
                              style={{
                                cursor: "pointer",
                                color: num <= rating ? "gold" : "gray",
                              }}
                            >
                              ★
                            </span>
                          ))}
                        </span>
                      </p>
                    </div>
                    <div className="profile-since">
                      <p className="text-muted mb-2 font-13">
                        <strong> Member since: </strong>{" "}
                        <span className="ml-2">Jan 2012</span>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-9 ">
                    <div className="row d-flex">
                      <div>
                        <AccountSetting />
                            </div>

                      <div>
                        <ContactInfo />
                      </div>

                      <div>
                        <EducationInfo />
                      </div>

                      <div>
                        <JobExperience />
                        <hr />
                      </div>

                      <div className="d-flex">
                        <h4 className="d-flex justify-content-start">
                          Project Info (if any)
                        </h4>
                        <i
                          className="f-13"
                          style={{ width: "30px", borderRadius: "50" }}
                          onClick={handleToggle}
                        >
                          <h2
                            style={{ color: "blue", marginLeft: "20px" }}
                            className={`fa ${
                              isOpen
                                ? "bi bi-dash-circle-fill"
                                : "bi bi-plus-circle-fill"
                            }`}
                          />
                        </i>
                      </div>
                      {isOpen && (
                        <div>
                          <form className="form-horizontal mt-2" role="form">
                            <div className="form-group">
                              <div className="row justify-content-md-center">
                                <label
                                  htmlFor="Projects"
                                  className="col-lg-3 col-form-label mt-2"
                                >
                                  Project:
                                </label>
                                <div className=" col-lg-6">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <input
                                        className="form-control mt-2"
                                        type="text"
                                        placeholder="Client Name"
                                        onChange={takeProject}
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <input
                                        className="form-control mt-2"
                                        type="text"
                                        placeholder="Year"
                                        onChange={takeYear}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row justify-content-md-center">
                                <label
                                  htmlFor="Client"
                                  className="col-lg-3 col-form-label"
                                >
                                  Client:
                                </label>
                                <div className=" col-lg-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Client"
                                    onChange={takeClient}
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="form-group"
                              onChange={takeDescriptions}
                            >
                              <div className="row justify-content-md-center">
                                <label
                                  htmlFor="Description"
                                  className="col-lg-3 col-form-label"
                                >
                                  Description:
                                </label>
                                <div className="col-lg-6">
                                  <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row justify-content-md-center ">
                                <div className="col-md-9">
                                  <button
                                    type="button"
                                    className="btn btn btn-secondary"
                                    style={{ marginRight: 10 }}
                                  >
                                    Add More
                                  </button>

                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                          <hr />
                        </div>
                      )}

                      <div className="d-flex">
                        <h4 className="d-flex justify-content-start">
                          Certification (if any)
                        </h4>
                        <i
                          className="f-13"
                          style={{ width: "30px", borderRadius: "50" }}
                          onClick={handleCertificateToggle}
                        >
                          <h2
                            style={{ color: "blue", marginLeft: "20px" }}
                            className={`fa ${
                              certopen
                                ? "bi bi-dash-circle-fill"
                                : "bi bi-plus-circle-fill"
                            }`}
                          />
                        </i>
                      </div>

                      {certopen && (
                        <div>
                          <form className="form-horizontal mt-2" role="form">
                            <div className="form-group">
                              <div className="row justify-content-md-center">
                                <label
                                  htmlFor="Client"
                                  className="col-lg-3 col-form-label"
                                >
                                  Name of Certification:
                                </label>
                                <div className=" col-lg-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Client"
                                    onChange={takeClient}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row justify-content-md-center">
                                <label
                                  htmlFor="Client"
                                  className="col-lg-3 col-form-label"
                                >
                                  Name of Institute:
                                </label>
                                <div className=" col-lg-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Client"
                                    onChange={takeClient}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row justify-content-md-center">
                                <label
                                  htmlFor="Projects"
                                  className="col-lg-3 col-form-label mt-2"
                                >
                                  Date:
                                </label>
                                <div className=" col-lg-6">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <lable>from</lable>
                                      <input
                                        className="form-control mt-2"
                                        type="month"
                                        id="date"
                                        placeholder="Client Name"
                                        // onChange={takeCertificate}
                                      />
                                    </div>

                                    <div className="col-md-6">
                                      <lable>to</lable>
                                      <input
                                        className="form-control mt-2"
                                        type="month"
                                        id="date"
                                        placeholder="Year"
                                        // onChange={takeValidYear}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-4 mt-3">
                                    <input type="checkbox" /> lifetime
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="form-group"
                              onChange={takeDescriptions}
                            >
                              <div className="row justify-content-md-center">
                                <label
                                  htmlFor="Description"
                                  className="col-lg-3 col-form-label"
                                >
                                  Description:
                                </label>
                                <div className="col-lg-6">
                                  <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row justify-content-md-center ">
                                <div className="col-md-9">
                                  <button
                                    type="button"
                                    className="btn btn btn-secondary"
                                    style={{ marginRight: 10 }}
                                  >
                                    Add More
                                  </button>

                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                          <hr />
                        </div>
                      )}

                      <div className="d-flex">
                        <h4 className="d-flex justify-content-start">Other</h4>
                        <i
                          className="f-13"
                          style={{ width: "30px", borderRadius: "50" }}
                          onClick={handleOtherToggle}
                        >
                          <h2
                            style={{ color: "blue", marginLeft: "20px" }}
                            className={`fa ${
                              otheropen
                                ? "bi bi-dash-circle-fill"
                                : "bi bi-plus-circle-fill"
                            }`}
                          />
                        </i>
                      </div>

                      {otheropen && (
                        <div>
                          <form className="form-horizontal mt-2" role="form">
                            <div className="form-group">
                              <div className="row justify-content-md-center">
                                <label
                                  htmlFor="Client"
                                  className="col-lg-3 col-form-label"
                                >
                                  Name of Document:
                                </label>
                                <div className=" col-lg-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="Client"
                                    onChange={takeClient}
                                  />
                                </div>
                              </div>
                            </div>

                            <div
                              className="form-group"
                              onChange={takeDescriptions}
                            >
                              <div className="row justify-content-md-center">
                                <label
                                  htmlFor="Description"
                                  className="col-lg-3 col-form-label"
                                >
                                  Description:
                                </label>
                                <div className="col-lg-6">
                                  <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row justify-content-md-center ">
                                <div className="col-md-9">
                                  <button
                                    type="button"
                                    className="btn btn btn-secondary"
                                    style={{ marginRight: 10 }}
                                  >
                                    Add More
                                  </button>

                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                          <hr />
                        </div>
                      )}

                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg "
                            onClick={handleChanges}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editprofile;
