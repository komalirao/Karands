import React from "react";
import { useState } from "react";
import ICHPDashboard from "../Dashboard/ICHPDashboard";

function Documents() {
  const [educationalList, setEducationalList] = useState([{ educational: "" }]);
  const [experienceList, setExperiencelList] = useState([{ experience: "" }]);
  //const [optionList, setOptionList] = useState([{ optionlist: "" }]);

  {/*const handlefileAdd = () => {
    setOptionList([...optionList, { optionList: "" }]);
  };
*/}
  const handleServiceRemove = (index) => {
    const list = [...educationalList];
    list.splice(index, 1);
    setEducationalList(list);
  };
  const handleServiceAdd = () => {
    setEducationalList([...educationalList, { educational: "" }]);
  };

  const handleExperienceAdd = () => {
    setExperiencelList([...experienceList, { experience: "" }]);
  };
  const handleExperienceRemove = (index) => {
    const list = [...experienceList];
    list.splice(index, 1);
    setExperiencelList(list);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFileSelect = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };
  return (
    <div>
      <ICHPDashboard />

      <div class="container-xl container-lg">
        <div class="card ">
          <div class="card-header">
            <h5 class="d-flex text-start">Upload Documents</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col col-lg-12 mb-4 mb-lg-0">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      class="nav-link active"
                      id="nav-personal-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-personal"
                      type="button"
                      role="tab"
                      aria-controls="nav-personal"
                      aria-selected="true"
                    >
                      Personal
                    </button>
                    <button
                      class="nav-link"
                      id="nav-educational-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-educational"
                      type="button"
                      role="tab"
                      aria-controls="nav-educational"
                      aria-selected="false"
                    >
                      Educational
                    </button>
                    <button
                      class="nav-link"
                      id="nav-proffesional-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-proffesional"
                      type="button"
                      role="tab"
                      aria-controls="nav-proffesional"
                      aria-selected="false"
                    >
                      Professional
                    </button>
                    <button
                      class="nav-link"
                      id="nav-projects-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-projects"
                      type="button"
                      role="tab"
                      aria-controls="nav-projects"
                      aria-selected="false"
                    >
                      Projects
                    </button>
                    <button
                      class="nav-link"
                      id="nav-others-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-others"
                      type="button"
                      role="tab"
                      aria-controls="nav-others"
                      aria-selected="false"
                    >
                      Others
                    </button>
                  </div>
                </nav>
              </div>

              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-personal"
                  role="tabpanel"
                  aria-labelledby="nav-personal-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <div class="card mb-4">
                        <div class="card-header py-3">
                          <h5 class="mb-0 text-start">Personal details</h5>
                        </div>
                        <div class="card-body">
                          <form>
                            <div class="row mb-4">
                              <div class="col-lg-12">
                                <div class="form-outline">
                                  <label
                                    class="form-label d-flex text-start"
                                    for="form9Example1"
                                  >
                                    Full Name as per the Documents
                                  </label>
                                  <input
                                    type="text"
                                    id="form9Example1"
                                    class="form-control input-custom"
                                  />
                                </div>
                              </div>

                              <div class="col-lg-6">
                                <div class="form-outline">
                                  <label
                                    class="form-label mt-3 d-flex text-start"
                                    for="form7Example1"
                                  >
                                    Date of Birth
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control is-valid"
                                    id="validationServer01"
                                    value=""
                                    required
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-outline">
                                  <label
                                    class="form-label mt-3 d-flex text-start"
                                    for="form7Example1"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="text"
                                    id="form7Example2"
                                    class="form-control"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-outline">
                                  <label
                                    class="form-label mt-3 d-flex text-start"
                                    for="form7Example1"
                                  >
                                    Gender
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control is-valid"
                                    id="validationServer01"
                                    value=""
                                    required
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-outline">
                                  <label
                                    class="form-label mt-3 d-flex text-start"
                                    for="form7Example1"
                                  >
                                    MaritalStatus
                                  </label>
                                  <input
                                    type="text"
                                    id="form7Example1"
                                    class="form-control"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-outline">
                                  <label
                                    class="form-label mt-3 d-flex text-start"
                                    for="form7Example6"
                                  >
                                    Phone
                                  </label>
                                  <input
                                    type="number"
                                    id="form7Example6"
                                    class="form-control"
                                  />
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-outline">
                                  <label
                                    class="form-label mt-3 d-flex text-start"
                                    for="form7Example1"
                                  >
                                    Languages
                                  </label>
                                  <input
                                    type="text"
                                    id="form7Example1"
                                    class="form-control"
                                  />
                                </div>
                              </div>

                              <div class="form-outline mb-4">
                                <label
                                  class="form-label d-flex text-start"
                                  for="form7Example7"
                                >
                                  Address
                                </label>
                                <textarea
                                  class="form-control"
                                  id="form7Example7"
                                  rows="4"
                                ></textarea>
                              </div>
                            </div>

                            <div class="row">
                              <div class="card-footer py-3">
                                <h5 class="mb-0 text-start">
                                  Upload Documents
                                </h5>

                                <h6 class="mb-0 text-start mt-3">
                                  Choose any and Upload
                                </h6>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start col-lg-4">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                      >
                                        Adhaar Card
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start col-lg-4">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                      >
                                        Pan Card
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start col-lg-4">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                      >
                                        Passport
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start col-lg-4">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label d-flex text-start"
                                        for="flexCheckDefault"
                                      >
                                        Driving-License
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start col-lg-4">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                      >
                                        Voter ID
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="nav-educational"
                  role="tabpanel"
                  aria-labelledby="nav-educational-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <div class="card mb-4">
                        <div class="card-header py-3">
                          <h5 class="mb-0 text-start">Educational details</h5>
                        </div>

                        <div class="card-body">
                          <form class="form-horizontal" role="form">
                            {educationalList.map((singleEducational, index) => (
                              <div key={index} className="educational">
                                <div class="form-group">
                                  <div class="row ">
                                    <label
                                      for="highestQualifications"
                                      class="col-lg-3 col-form-label"
                                    >
                                      Highest-Qualifications:
                                    </label>
                                    <div class=" col-lg-6">
                                      <select
                                        class="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option value="" selected disabled>
                                          {" "}
                                          Select Highest Qualifications
                                        </option>
                                        <option>Doctorate/Phd</option>
                                        <option>Post Graduation</option>
                                        <option>Gradution</option>
                                        <option>12th</option>
                                        <option>10th</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row  ">
                                    <label
                                      for="Course"
                                      class="col-lg-3 col-form-label"
                                    >
                                      Course / Specialization:
                                    </label>
                                    <div class="col-lg-6">
                                      <div class="row">
                                        <div class="col-md-6">
                                          <div class="ui-select">
                                            <select
                                              id="maritalstatus"
                                              class="form-select"
                                            >
                                              <option value="">
                                                Select Course
                                              </option>
                                              <option value="">B.A.</option>
                                              <option value="">B.SC.</option>
                                              <option value="">B.Com</option>
                                              <option value="">Btech</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="col-md-6">
                                          <div class="ui-select">
                                            <select
                                              id="maritalstatus"
                                              class="form-select"
                                            >
                                              <option value="">
                                                Specialization
                                              </option>
                                              <option value="">1+</option>
                                              <option value="">2+</option>
                                              <option value="">3+</option>
                                              <option value="">4+</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row ">
                                    <label
                                      for="College"
                                      class="col-lg-3 col-form-label"
                                    >
                                      College:
                                    </label>
                                    <div class=" col-lg-6">
                                      <input
                                        class="form-control"
                                        type="text"
                                        value=""
                                        id="College"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row  ">
                                    <label
                                      for="courseType"
                                      class="col-lg-3 col-form-label"
                                    >
                                      CourseType/Passingyear:
                                    </label>
                                    <div class="col-lg-6">
                                      <div class="row">
                                        <div class="col-md-6">
                                          <div class="ui-select">
                                            <select
                                              id="maritalstatus"
                                              class="form-select"
                                            >
                                              <option value="">
                                                Select Course type
                                              </option>
                                              <option value="">B.A.</option>
                                              <option value="">B.SC.</option>
                                              <option value="">B.Com</option>
                                              <option value="">Btech</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="col-md-6">
                                          <div class="ui-select">
                                            <select
                                              id="maritalstatus"
                                              class="form-select"
                                            >
                                              <option value="">
                                                Select Passing year
                                              </option>
                                              <option value="">1+</option>
                                              <option value="">2+</option>
                                              <option value="">3+</option>
                                              <option value="">4+</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="form-group">
                                  <div class="row  ">
                                    <div class="col-md-9">
                                      {/* {educationalList.length - 1 === index && educationalList.length < 20 && (
                       <button type="button" onClick={handleServiceAdd} class="btn btn btn-secondary" style={{ marginRight: 10 }}>Add More</button>)}
                         {educationalList.length !== 1 && (
                       <button type="button" onClick={() => handleServiceRemove(index)} class="btn btn-secondary">Delete</button>)}
                        */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}

                            <div class="row">
                              <div class="card-footer py-3">
                                <h5 class="mb-0 text-start">
                                  Upload Documents
                                </h5>

                                <h6 class="mb-0 text-start mt-3">
                                  Choose any and Upload
                                </h6>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start col-lg-4">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                      >
                                        Convocation
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start ">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label d-flex text-start"
                                        for="flexCheckDefault"
                                      >
                                        Consolidated Marksheets
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start ">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label d-flex text-start"
                                        for="flexCheckDefault"
                                      >
                                        Individual Marksheet
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="nav-proffesional"
                  role="tabpanel"
                  aria-labelledby="nav-proffesional-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <div class="card mb-4">
                        <div class="card-header py-3">
                          <h5 class="mb-0 text-start">Experience details</h5>
                        </div>
                        <div class="card-body">
                          <form class="form-horizontal" role="form">
                            {experienceList.map((singleExperience, index) => (
                              <div key={index} className="experience">
                                <div class="form-group">
                                  <div class="row ">
                                    <label
                                      for="currentDesignation"
                                      class="col-lg-3 col-form-label"
                                    >
                                      Current Designation:
                                    </label>
                                    <div class=" col-lg-6">
                                      <input
                                        class="form-control"
                                        type="text"
                                        value=""
                                        id="currentDesignation"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row ">
                                    <label
                                      for="Company"
                                      class="col-lg-3 col-form-label"
                                    >
                                      Company:
                                    </label>
                                    <div class=" col-lg-6">
                                      <input
                                        class="form-control"
                                        type="text"
                                        value=""
                                        id="Company"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row ">
                                    <label
                                      for="Location"
                                      class="col-lg-3 col-form-label"
                                    >
                                      Location:
                                    </label>
                                    <div class=" col-lg-6">
                                      <input
                                        class="form-control"
                                        type="text"
                                        value=""
                                        id="Location"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row ">
                                    <label
                                      for="Experience"
                                      class="col-lg-3 col-form-label"
                                    >
                                      Experience:
                                    </label>
                                    <div class=" col-lg-6">
                                      <div class="row">
                                        <div class=" col-md-6">
                                          <input
                                            class="form-control"
                                            type="text"
                                            value=""
                                            placeholder="Starting Date"
                                          />
                                        </div>
                                        <div class=" col-md-6">
                                          <input
                                            class="form-control"
                                            type="text"
                                            value=""
                                            placeholder="Ending Date"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row  ">
                                    <label
                                      for="anualSalary"
                                      class="col-lg-3 col-form-label"
                                    >
                                      Anual Salary:
                                    </label>
                                    <div class="col-lg-6">
                                      <div class="row">
                                        <div class="col-md-2">
                                          <div class="ui-select">
                                            <select
                                              id="maritalstatus"
                                              class="form-select"
                                            >
                                              <option value="">&#8377;</option>
                                              <option value="">&#8377;</option>
                                              <option value="">&#x24;</option>
                                              <option value="">&#8364;</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="col-md-5">
                                          <div class="ui-select">
                                            <select
                                              id="lakhs"
                                              class="form-select"
                                            >
                                              <option value="">Lakhs</option>
                                              <option value="">1+</option>
                                              <option value="">2+</option>
                                              <option value="">3+</option>
                                              <option value="">4+</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="col-md-5">
                                          <div class="ui-select">
                                            <select
                                              id="maritalstatus"
                                              class="form-select"
                                            >
                                              <option value="">
                                                Thousands
                                              </option>
                                              <option value="">1+</option>
                                              <option value="">2+</option>
                                              <option value="">3+</option>
                                              <option value="">4+</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row ">
                                    <label
                                      for="Industry"
                                      class="col-lg-3 col-form-label"
                                    >
                                      Industry:
                                    </label>
                                    <div class=" col-lg-6">
                                      <input
                                        class="form-control"
                                        type="text"
                                        value=""
                                        id="Industry"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row ">
                                    <label
                                      for="functionalArea"
                                      class="col-lg-3 col-form-label"
                                    >
                                      Functional area:
                                    </label>
                                    <div class=" col-lg-6">
                                      <input
                                        class="form-control"
                                        type="text"
                                        value=""
                                        id="functionalArea"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row ">
                                    <label
                                      for="Skills"
                                      class="col-lg-3 col-form-label"
                                    >
                                      Skills:
                                    </label>
                                    <div class="col-lg-6">
                                      <input
                                        class="form-control form-control-lg"
                                        type="text"
                                        placeholder=""
                                        id="Skills"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="row ">
                                    <label
                                      for="Description"
                                      class="col-lg-3 col-form-label"
                                    >
                                      Job Roles & Responsibilities:
                                    </label>
                                    <div class="col-lg-6">
                                      <textarea
                                        class="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                {/* <div class="form-group" >
                          <div class="row  ">
                            <div class="col-md-9" >

                              {experienceList.length - 1 === index && experienceList.length < 20 && (
                                <button type="button" onClick={handleExperienceAdd} class="btn btn btn-secondary" style={{ marginRight: 10 }}>Add More</button>)}
                              {experienceList.length !== 1 && (
                                <button type="button" onClick={() => handleExperienceRemove(index)} class="btn btn-secondary">Delete</button>
                              )}
                            </div></div>
                        </div> */}
                              </div>
                            ))}

                            <div class="row">
                              <div class="card-footer py-3">
                                <h5 class="mb-0 text-start">
                                  Upload Documents
                                </h5>

                                <h6 class="mb-0 text-start mt-3">
                                  Choose any and Upload
                                </h6>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start col-lg-4">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                      >
                                        Offer Letter
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start ">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                      >
                                        Appointment Letter
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start ">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                      >
                                        Appraisal-Letter
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start col-lg-4">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label d-flex text-start"
                                        for="flexCheckDefault"
                                      >
                                        Salary Slips
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start ">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                      >
                                        Rewards Awards certificate
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-projects"
                  role="tabpanel"
                  aria-labelledby="nav-projects-tab"
                  tabindex="0"
                 >
                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <div class="card mb-4">
                        <div class="card-header py-3">
                          <h5 class="mb-0 text-start">Project details</h5>
                        </div>
                        <div class="card-body">
                          <form class="form-horizontal" role="form">
                            <div class="form-group">
                              <div class="row ">
                                <label
                                  for="Projects"
                                  class="col-lg-3 col-form-label"
                                >
                                  Project:
                                </label>
                                <div class=" col-lg-6">
                                  <div class="row ">
                                    <div class="col-md-6 ">
                                      <input
                                        class="form-control"
                                        type="text"
                                        value=""
                                        placeholder="Client Name"
                                      />
                                    </div>
                                    <div class="col-md-6">
                                      <input
                                        class="form-control "
                                        type="text"
                                        value=""
                                        placeholder="Year"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="row ">
                                <label
                                  for="Location"
                                  class="col-lg-3 col-form-label"
                                >
                                  Client:
                                </label>
                                <div class=" col-lg-6">
                                  <input
                                    class="form-control"
                                    type="text"
                                    value=""
                                    id="Location"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="row ">
                                <label
                                  for="Description"
                                  class="col-lg-3 col-form-label"
                                >
                                  Project Description:
                                </label>
                                <div class="col-lg-6">
                                  <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            {/* <div class="form-group" >
                      <div class="row  ">
                        <div class="col-md-9" >

                          {experienceList.length - 1 === index && experienceList.length < 20 && (
                            <button type="button" onClick={handleExperienceAdd} class="btn btn btn-secondary" style={{ marginRight: 10 }}>Add More</button>)}
                          {experienceList.length !== 1 && (
                            <button type="button" onClick={() => handleExperienceRemove(index)} class="btn btn-secondary">Delete</button>
                          )}
                        </div></div>
                    </div> */}

                            <div class="row">
                              <div class="card-footer py-3">
                                <h5 class="mb-0 text-start">
                                  Upload Documents
                                </h5>

                                <h6 class="mb-0 text-start mt-3">
                                  Choose any and Upload
                                </h6>
                              </div>
                              <div class="card">
                                <div class="row g-2">
                                  <div class=" col-lg-6">
                                    <div class="form-check m-3 mt-3 d-flex justify-content-start ">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexCheckDefault"
                                      >
                                        Project Document file
                                      </label>
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="input-group mt-2">
                                      <input
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile02"
                                      />
                                      {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-others"
                  role="tabpanel"
                  aria-labelledby="nav-others-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-md-12 mb-4">
                      <div class="card mb-4">
                        <div class="card-header py-3">
                          <h5 class="mb-0 text-start">Other Details</h5>
                        </div>

                        <div class="card-body">
                          <form class="form-horizontal" role="form">
                            <div class="form-group">
                              <div class="row ">
                                <label
                                  for="Description"
                                  class="col-lg-3 col-form-label"
                                >
                                  Other Details Description:
                                </label>
                                <div class="col-lg-6">
                                  <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
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

export default Documents;
