import React, { useState } from "react";

export default function JobExperience() {
  const [experienceList, setExperiencelList] = useState([{ experience: "" }]);
  const handleExperienceAdd = () => {
    setExperiencelList([...experienceList, { experience: "" }]);
  };
  const handleExperienceRemove = (index) => {
    const list = [...experienceList];
    list.splice(index, 1);
    setExperiencelList(list);
  };

  return (
    <div>
    <hr/>
    <div class="container-lg container-xl ">
      <h4 className="d-flex justify-content-start">Job Experience Info</h4>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          className="nav-link active bg-primary text-light"
          id="nav-exp-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-exp"
          type="button"
          role="tab"
          aria-controls="nav-exp"
          aria-selected="true"
        >
          Experienced Info
        </button>
        <button
          className="nav-link bg-primary text-light ms-3"
          id="nav-notExp-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-notExp"
          type="button"
          role="tab"
          aria-controls="nav-notExp"
          aria-selected="true"
        >
          Not Experienced
        </button>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-exp"
          role="tabpanel"
          aria-labelledby="nav-exp-tab"
        >
          <form className="form-horizontal mt-3" role="form">
            <div className="experience">
              <div className="form-group">
                <div className="row justify-content-md-center">
                  <label
                    htmlFor="currentDesignation"
                    className="col-lg-3 col-form-label"
                  >
                    Current Designation:
                  </label>
                  <div className=" col-lg-6">
                    <input
                      className="form-control"
                      type="text"
                      id="currentDesignation"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row justify-content-md-center">
                  <label htmlFor="Company" className="col-lg-3 col-form-label">
                    Company:
                  </label>
                  <div className=" col-lg-6">
                    <input className="form-control" type="text" id="Company" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row justify-content-md-center">
                  <label htmlFor="Location" className="col-lg-3 col-form-label">
                    Location:
                  </label>
                  <div className=" col-lg-6">
                    <input className="form-control" type="text" id="Location" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row justify-content-md-center">
                  <label
                    htmlFor="Experience"
                    className="col-lg-3 col-form-label"
                  >
                    Experience:
                  </label>
                  <div className=" col-lg-6">
                    <div className="row">
                      <div className=" col-md-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Starting Date"
                        />
                      </div>
                      <div className=" col-md-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Ending Date"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row justify-content-md-center ">
                  <label
                    htmlFor="anualSalary"
                    className="col-lg-3 col-form-label"
                  >
                    Anual Salary:
                  </label>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="ui-select">
                          <select id="maritalstatus" className="form-control">
                            {/* <option value=""></option> */}
                            <option value="Rupee">&#8377;</option>
                            <option value="Dollar">&#36;</option>
                            <option value="Euro">&#8364;</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="ui-select">
                          <select id="lakhs" className="form-control">
                            <option value="lakhs">Lakhs</option>
                            <option value="1+">1+</option>
                            <option value="2+">2+</option>
                            <option value="3+">3+</option>
                            <option value="4+">4+</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="ui-select">
                          <select id="maritalstatus" className="form-control">
                            <option value="Thousands">Thousands</option>
                            <option value="1+">1+</option>
                            <option value="2+">2+</option>
                            <option value="3+">3+</option>
                            <option value="4+">4+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row justify-content-md-center">
                  <label htmlFor="Industry" className="col-lg-3 col-form-label">
                    Industry:
                  </label>
                  <div className=" col-lg-6">
                    <input className="form-control" type="text" id="Industry" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row justify-content-md-center">
                  <label
                    htmlFor="functionalArea"
                    className="col-lg-3 col-form-label"
                  >
                    Functional area:
                  </label>
                  <div className=" col-lg-6">
                    <input
                      className="form-control"
                      type="text"
                      id="functionalArea"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row justify-content-md-center">
                  <label htmlFor="Skills" className="col-lg-3 col-form-label">
                    Skills:
                  </label>
                  <div className="col-lg-6">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder=""
                      id="Skills"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
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

                    {experienceList.length !== 1 && (
                      <button type="button" className="btn btn-secondary">
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div
          className="tab-pane fade show"
          id="nav-notExp"
          role="tabpanel"
          aria-labelledby="nav-notExp-tab"
        >
          <form className="form-horizontal mt-3" role="form">
            {experienceList.map((singleExperience, index) => (
              <div key={index} className="experience">
                <div className="form-group">
                  <div className="row justify-content-md-center">
                    <label
                      htmlFor="currentDesignation"
                      className="col-lg-3 col-form-label"
                    >
                      Expected Designation:
                    </label>
                    <div className=" col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        id="currentDesignation"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row justify-content-md-center ">
                    <label
                      htmlFor="anualSalary"
                      className="col-lg-3 col-form-label"
                    >
                      Expected Anual Salary:
                    </label>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="ui-select">
                            <select id="maritalstatus" className="form-control">
                              {/* <option value=""></option> */}
                              <option value="Rupee">&#8377;</option>
                              <option value="Dollar">&#36;</option>
                              <option value="Euro">&#8364;</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="ui-select">
                            <select id="lakhs" className="form-control">
                              <option value="lakhs">Lakhs</option>
                              <option value="1+">1+</option>
                              <option value="2+">2+</option>
                              <option value="3+">3+</option>
                              <option value="4+">4+</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="ui-select">
                            <select id="maritalstatus" className="form-control">
                              <option value="Thousands">Thousands</option>
                              <option value="1+">1+</option>
                              <option value="2+">2+</option>
                              <option value="3+">3+</option>
                              <option value="4+">4+</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row justify-content-md-center">
                    <label
                      htmlFor="Industry"
                      className="col-lg-3 col-form-label"
                    >
                      Industry:
                    </label>
                    <div className=" col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        id="Industry"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row justify-content-md-center">
                    <label
                      htmlFor="functionalArea"
                      className="col-lg-3 col-form-label"
                    >
                      Functional area:
                    </label>
                    <div className=" col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        id="functionalArea"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row justify-content-md-center">
                    <label htmlFor="Skills" className="col-lg-3 col-form-label">
                      Skills:
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder=""
                        id="Skills"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row justify-content-md-center">
                    <label
                      htmlFor="Location"
                      className="col-lg-3 col-form-label"
                    >
                      Location:
                    </label>
                    <div className=" col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        id="Location"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
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
                      {experienceList.length - 1 === index &&
                        experienceList.length < 20 && (
                          <button
                            type="button"
                            onClick={handleExperienceAdd}
                            className="btn btn btn-secondary"
                            style={{ marginRight: 10 }}
                          >
                            Add More
                          </button>
                        )}
                      {experienceList.length !== 1 && (
                        <button
                          type="button"
                          onClick={() => handleExperienceRemove(index)}
                          className="btn btn-secondary"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
