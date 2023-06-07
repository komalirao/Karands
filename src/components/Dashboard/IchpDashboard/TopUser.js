import React from "react";
import logo from "../../../assets/employee1.jpg";

export default function TopUser() {
  return (
    <div className="container">
      <div className="side-bar">
        <div class="shadow p-3 mt-5 bg-body rounded">
          <div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <h6>Top Users</h6>
            </div>

            <hr />
            <div className="mt-2">
              <div class="job-info">
                <div
                  class="job-details d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <img src={logo} className="rounded-circle" alt="pic" />
                  </div>

                  <div class="sgt-text">
                    <h6 className="text-primary">Poonam</h6>
                    <span>Wordpress Developer</span>
                    <div>
                      <span>Location : hydrabad</span>
                    </div>
                  </div>
                  <div>
                    <h4>
                     <i> <span className="bi bi-person-plus-fill"></span></i>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="job-info">
                <div
                  class="job-details d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <img src={logo} className="rounded-circle" alt="pic" />
                  </div>
                  <div class="sgt-text">
                    <h6 className="text-primary">Bill Gates</h6>
                    <span>C & C++ Developer</span>
                    <div>
                      <span>Location : hydrabad</span>
                    </div>
                  </div>
                  <div>
                    <h4>
                      <span className="bi bi-person-plus-fill"></span>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="job-info">
                <div
                  class="job-details d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <img src={logo} className="rounded-circle" alt="pic" />
                  </div>

                  <div class="sgt-text  ms-0">
                    <h6 className="text-primary">John Doe</h6>
                    <span>PHP Developer</span>
                    <div>
                      <span>Location : hydrabad</span>
                    </div>
                  </div>
                  <div>
                    <h4>
                      <span className="bi bi-person-plus-fill"></span>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="job-info">
                <div
                  class="job-details d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <img src={logo} className="rounded-circle" alt="pic" />
                  </div>
                  <div class="sgt-text ms-0">
                    <h6 className="text-primary">Jessica William</h6>
                    <span>Graphic Designer</span>
                    <div>
                      <span>Location : hydrabad</span>
                    </div>
                  </div>
                  <div>
                    <h4>
                      <span className="bi bi-person-plus-fill"></span>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="job-info">
                <div
                  class="job-details d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <img src={logo} className="rounded-circle" alt="pic" />
                  </div>
                  <div>
                    <div class="sgt-text">
                      <h6 className="text-primary">John Doe</h6>
                      <span>PHP Developer</span>
                      <div>
                        <span>Location : hydrabad</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4>
                      <span className="bi bi-person-plus-fill"></span>
                    </h4>
                  </div>
                </div>
              </div>

              <div class="job-info">
                <div className="mt-3">
                  <h6 className="text-primary">View all...</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
