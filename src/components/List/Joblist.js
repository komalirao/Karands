import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import myImage from "../../assets/logo2.png";
import ICHPDashboard from "../Dashboard/ICHPDashboard";

function Joblist() {
  return (
    <div>
      <ICHPDashboard />

      <div class="container-lg container-xl ">
        <div class="card ">
          <div class="card-header">
            <h5 class="d-flex text-start">Job List</h5>
          </div>

          <div class="card-body">
            <div class="d-flex flex-column flex-lg-row align-items-center">
              <span class="    mb-2">
                <div class="flex-shrink-0">
                  <img
                    class=" rounded-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "red",
                    }}
                    src={myImage}
                  />
                </div>
              </span>
              <div class="row flex-fill p-4 ">
                <div class="col-sm-5 col-md-5 text-start  ">
                  <h4 class="lead">
                    <strong>Junior Frontend Developer</strong>
                  </h4>
                  <p>~Karands.com</p>
                  <span class="badge bg-secondary ">WORLDWIDE</span>{" "}
                  <span class="badge bg-success">$60K - $100K</span>
                </div>
                <div class="col-sm-4  col-md-4 py-2">
                  <span class="badge  bg-secondary p-1 mr-1">REACT</span>
                  <span class="badge  bg-secondary p-1  mr-1">NODE</span>
                  <span class="badge   bg-secondary p-1  mr-1">TYPESCRIPT</span>
                  <span class="badge  bg-secondary p-1  mr-1">JUNIOR</span>
                </div>
                <div class="col-sm-3 text-lg-end">
                  <a href="#" class="btn btn-success stretched-link">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <hr class="border border-primary border-2 opacity-50" />
            <div class="d-flex flex-column flex-lg-row align-items-center">
              <span class="    mb-2">
                <div class="flex-shrink-0">
                  <img
                    class=" rounded-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "red",
                    }}
                    src={myImage}
                  />
                </div>
              </span>
              <div class="row flex-fill p-4 ">
                <div class="col-sm-5 col-md-5 text-start  ">
                  <h4 class="lead">
                    <strong>Junior Frontend Developer</strong>
                  </h4>
                  <p>~Karands.com</p>
                  <span class="badge bg-secondary ">WORLDWIDE</span>{" "}
                  <span class="badge bg-success">$60K - $100K</span>
                </div>
                <div class="col-sm-4  col-md-4 py-2">
                  <span class="badge  bg-secondary p-1 mr-1">REACT</span>
                  <span class="badge  bg-secondary p-1  mr-1">NODE</span>
                  <span class="badge   bg-secondary p-1  mr-1">TYPESCRIPT</span>
                  <span class="badge  bg-secondary p-1  mr-1">JUNIOR</span>
                </div>
                <div class="col-sm-3 text-lg-end">
                  <a href="#" class="btn btn-success stretched-link">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <hr class="border border-primary border-2 opacity-50" />
            <div class="d-flex flex-column flex-lg-row align-items-center">
              <span class="    mb-2">
                <div class="flex-shrink-0">
                  <img
                    class=" rounded-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "red",
                    }}
                    src={myImage}
                  />
                </div>
              </span>
              <div class="row flex-fill p-4 ">
                <div class="col-sm-5 col-md-5 text-start  ">
                  <h4 class="lead">
                    <strong>Junior Frontend Developer</strong>
                  </h4>
                  <p>~Karands.com</p>
                  <span class="badge bg-secondary ">WORLDWIDE</span>{" "}
                  <span class="badge bg-success">$60K - $100K</span>
                </div>
                <div class="col-sm-4  col-md-4 py-2">
                  <span class="badge  bg-secondary p-1 mr-1">REACT</span>
                  <span class="badge  bg-secondary p-1  mr-1">NODE</span>
                  <span class="badge   bg-secondary p-1  mr-1">TYPESCRIPT</span>
                  <span class="badge  bg-secondary p-1  mr-1">JUNIOR</span>
                </div>
                <div class="col-sm-3 text-lg-end">
                  <a href="#" class="btn btn-success stretched-link">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <hr class="border border-primary border-2 opacity-50" />
            <div class="d-flex flex-column flex-lg-row align-items-center">
              <span class="    mb-2">
                <div class="flex-shrink-0">
                  <img
                    class=" rounded-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "red",
                    }}
                    src={myImage}
                  />
                </div>
              </span>
              <div class="row flex-fill p-4 ">
                <div class="col-sm-5 col-md-5 text-start  ">
                  <h4 class="lead">
                    <strong>Junior Frontend Developer</strong>
                  </h4>
                  <p>~Karands.com</p>
                  <span class="badge bg-secondary ">WORLDWIDE</span>{" "}
                  <span class="badge bg-success">$60K - $100K</span>
                </div>
                <div class="col-sm-4  col-md-4 py-2">
                  <span class="badge  bg-secondary p-1 mr-1">REACT</span>
                  <span class="badge  bg-secondary p-1  mr-1">NODE</span>
                  <span class="badge   bg-secondary p-1  mr-1">TYPESCRIPT</span>
                  <span class="badge  bg-secondary p-1  mr-1">JUNIOR</span>
                </div>
                <div class="col-sm-3 text-lg-end">
                  <a href="#" class="btn btn-success stretched-link">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Joblist;
