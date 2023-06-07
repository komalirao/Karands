import React, {useState} from 'react'

export default function EducationInfo() {

    

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
    const [errors, setErrors] = useState({});


    const [educationalList, setEducationalList] = useState([{ educational: "" }]);
    const [experienceList, setExperiencelList] = useState([{ experience: "" }]);
    const [education, setEducation] = useState({
        qualification: "",
        course: "",
        specialization: "",
        college: "",
        courseType: "",
        passingYear: "",
      });

    const handleFocus = (event) => {
        const name = event.target.name;
        setErrors((prevState) => ({ ...prevState, [name]: "" }));
      };

      const takeCourse = (event) => {
        setEducation((prevstate) => ({ ...prevstate, course: event.target.value }));
      };
      const takeSpecialization = (event) => {
        setEducation((prevstate) => ({
          ...prevstate,
          specialization: event.target.value,
        }));
      };
      const takeCollege = (event) => {
        setEducation((prevstate) => ({
          ...prevstate,
          college: event.target.value,
        }));
      };
      const takeCourseType = (event) => {
        setEducation((prevstate) => ({
          ...prevstate,
          courseType: event.target.value,
        }));
      };
      const takePassingYear = (event) => {
        setEducation((prevstate) => ({
          ...prevstate,
          passingYear: event.target.value,
        }));
      };
  return (
    <div>
    
    <h4 className="d-flex justify-content-start">
    Education
  </h4>


    <form className="form-horizontal" role="form">
    {educationalList.map((singleEducational, index) => (
      <div key={index} className="educational">
        <div className="form-group">
          <div className="row justify-content-md-center">
            <label
              htmlFor="highestQualifications"
              className="col-lg-3 col-form-label"
            >
              Highest-Qualifications:
            </label>
            <div className=" col-lg-6">
              <select
                className="form-control"
                id="HigherQualification"
                name="HigherQualification"
               
                onFocus={handleFocus}
              >
                <option value="SelectHighestQualifications">
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
          {
            <p
              style={{
                color: "red",
                fontSize: "12px",
                marginTop: "0",
              }}
            >
              {errors.HigherQualification}
            </p>
          }
        </div>

        <div className="form-group">
          <div className="row justify-content-md-center ">
            <label
              htmlFor="Course"
              className="col-lg-3 col-form-label"
            >
              Course / Specialization:
            </label>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="ui-select"
                    onChange={takeCourse}
                  >
                    <select
                      id="course"
                      className="form-control"
                      name="course"
                      onFocus={handleFocus}
                    >
                      <option value="Select Course">
                        Select Course
                      </option>
                      <option value="B.A.">B.A.</option>
                      <option value="B.SC.">
                        B.SC.
                      </option>
                      <option value="B.Com">
                        B.Com
                      </option>
                      <option value="Btech">
                        Btech
                      </option>
                    </select>
                  </div>
                  {
                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                        textAlign: "left",
                        marginTop: "0",
                      }}
                    >
                      {errors.course}
                    </p>
                  }
                </div>
                <div className="col-md-6">
                  <div
                    className="ui-select"
                    onChange={takeSpecialization}
                  >
                    <select
                      id="specialise"
                      name="specialise"
                      className="form-control"
                      onFocus={handleFocus}
                    >
                      <option value="Specialization">
                        Specialization
                      </option>
                      <option value="1+">1+</option>
                      <option value="2+">2+</option>
                      <option value="3+">3+</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                  {
                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                        textAlign: "left",
                        marginTop: "0",
                      }}
                    >
                      {errors.specialise}
                    </p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row justify-content-md-center">
            <label
              htmlFor="College"
              className="col-lg-3 col-form-label"
            >
              College:
            </label>
            <div className=" col-lg-6">
              <input
                className="form-control"
                type="text"
                id="College"
                name="College"
                onFocus={handleFocus}
                onChange={takeCollege}
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
                  {errors.College}
                </p>
              }
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row justify-content-md-center ">
            <label
              htmlFor="courseType"
              className="col-lg-3 col-form-label d-flex text-start"
            >
              CourseType/Passingyear:
            </label>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="ui-select"
                    onChange={takeCourseType}
                  >
                    <select
                      id="courseType"
                      name="courseType"
                      onFocus={handleFocus}
                      className="form-control"
                    >
                      <option value="Select Course Type">
                        Select Course type
                      </option>
                      <option value="Regular">
                        Regular
                      </option>
                      <option value="Supply">
                        Supply
                      </option>
                      <option value="Distinct">
                        Distinct
                      </option>
                      {/* <option value="">Btech</option> */}
                    </select>
                  </div>
                  {
                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                        textAlign: "left",
                        marginTop: "0",
                      }}
                    >
                      {errors.courseType}
                    </p>
                  }
                </div>

                <div className="col-md-6">
                  <div
                    className="ui-select"
                    onChange={takePassingYear}
                  >
                    <select
                      id="passingYear"
                      className="form-control"
                      onFocus={handleFocus}
                      name="passingYear"
                    >
                      <option value="SelectPassingYear">
                        Select Passing year
                      </option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>
                  {
                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                        textAlign: "left",
                        marginTop: "0",
                      }}
                    >
                      {errors.passingYear}
                    </p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row justify-content-md-center ">
            <div className="col-md-9">
              {educationalList.length - 1 === index &&
                educationalList.length < 20 && (
                  <button
                    type="button"
                    onClick={handleServiceAdd}
                    className="btn btn btn-secondary"
                    style={{ marginRight: 10 }}
                  >
                    Add More
                  </button>
                )}
              {educationalList.length !== 1 && (
                <button
                  type="button"
                  onClick={() =>
                    handleServiceRemove(index)
                  }
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
  )
}
