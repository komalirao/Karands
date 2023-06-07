import React, { useState } from "react";

function ContactInfo() {
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

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

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

  return (
    <div>
    <div class="container-lg container-xl ">
     
          <div class="row">
            <div class="col-md-9  ">
              <div class="row d-flex">
                <h4 class="d-flex justify-content-start">Personal info</h4>

                <form class="form-horizontal" role="form">
                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="firstName" class="col-lg-3 col-form-label">
                        First name:
                      </label>
                      <div class=" col-lg-6">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="dey-dey"
                          id="firstName"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="lastName" class="col-lg-3 col-form-label">
                        Last name:
                      </label>
                      <div class="col-lg-6">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="bootdey"
                          id="lastName"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="Gender" class="col-lg-3 col-form-label">
                        Gender:
                      </label>
                      <div class="col-lg-6 ">
                        <div class="row justify-content-md-center">
                          <div class="col-md-5 form-check">
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
                              Female
                            </label>
                          </div>

                          <div class=" col-md-6 form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              Male
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="Birthday" class="col-lg-3 col-form-label">
                        Birthday:
                      </label>
                      <div class="col-lg-6">
                        <input
                          class="form-control"
                          type="text"
                          value=""
                          id="Birthday"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="Location" class="col-lg-3 col-form-label">
                        Location:
                      </label>
                      <div class="col-lg-6">
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
                    <div class="row justify-content-md-center">
                      <label
                        for="maritalStatus"
                        class="col-lg-3 col-form-label"
                      >
                        Marital Status:
                      </label>
                      <div class="col-lg-6">
                        <div class="ui-select">
                          <select id="maritalstatus" class="form-control">
                            <option value="Single">Select</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widow">Widow</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row justify-content-md-center ">
                      <label for="Position" class="col-lg-3 col-form-label">
                        Position:
                      </label>
                      <div class="col-lg-6">
                        <div class="ui-select">
                          <select id="maritalstatus" class="form-control">
                            <option value="Single">Select</option>
                            <option value="Single">Freshers</option>
                            <option value="Married">Experienced</option>
                            <option value="Divorced">CEO</option>
                            <option value="Widow">Director</option>
                            <option value="Widow">Manager</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="row justify-content-md-center ">
                      <label for="totalExp" class="col-lg-3 col-form-label">
                        Total Exp:
                      </label>
                      <div
                        class="col-lg-6"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <div class="ui-select">
                          <select
                            id="maritalstatus"
                            class="form-control"
                            style={{ width: 80 }}
                          >
                            <option value="">Years</option>
                            <option value="">1+</option>
                            <option value="">2+</option>
                            <option value="">3+</option>
                            <option value="">4+</option>
                          </select>
                        </div>
                        <span>
                          <div class="ui-select" style={{ marginLeft: 20 }}>
                            <select
                              id="maritalstatus"
                              class="form-control"
                              style={{ width: 80 }}
                            >
                              <option value="">Months</option>
                              <option value="">1+</option>
                              <option value="">2+</option>
                              <option value="">3+</option>
                              <option value="">4+</option>
                            </select>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="formFileSm" class="col-lg-3 col-form-label">
                        Upload Resume:
                      </label>
                      <div class="col-lg-6">
                        <input
                          class="form-control form-control-sm"
                          id="formFileSm"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="Language" class="col-lg-3 col-form-label">
                        Language:
                      </label>
                      <div class="col-lg-6">
                        <input
                          class="form-control form-control-lg"
                          type="text"
                          placeholder=""
                          id="Language"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="About" class="col-lg-3 col-form-label">
                        About:
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
                <hr />
                <h4 class="d-flex justify-content-start">Contact Info</h4>

                <form class="form-horizontal" role="form">
                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="mobilePhone" class="col-lg-3 col-form-label">
                        Mobile Phone:
                      </label>
                      <div class=" col-lg-6">
                        <input
                          class="form-control"
                          type="text"
                          value=""
                          id="mobilePhone"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="Email" class="col-lg-3 col-form-label">
                        Email:
                      </label>
                      <div class="col-lg-6">
                        <input
                          class="form-control"
                          type="text"
                          value=""
                          id="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="faceBook" class="col-lg-3 col-form-label">
                        Facebook:
                      </label>
                      <div class="col-lg-6">
                        <input
                          class="form-control"
                          type="text"
                          value=""
                          id="faceBook"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row justify-content-md-center">
                      <label for="Linkedln" class="col-lg-3 col-form-label">
                        Linkedln:
                      </label>
                      <div class="col-lg-6">
                        <input
                          class="form-control"
                          type="text"
                          value=""
                          id="Linkedln"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default ContactInfo;
