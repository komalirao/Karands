import React from "react";
import { Link } from "react-router-dom";
//import Userlist from "../../List/Userlist";
import ShortListed from "./ShortListed";

export default function MyPostedJobs() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 ScrollStyle">
          <div className="post-feeds">
            <div className="d-flex flex-start">
              <h4>Frontend Developer</h4>
            </div>
            <div className="d-flex mt-2">
              Karands business Solutions | &#8377;25000-&#8377;45000 | Madhapur,
              Hydrabad
            </div>
            <div className="d-flex mt-3">
              Skills : HTML, CSS, JavaScript, NodeJS
            </div>
            <div
              className="d-flex mt-3"
              style={{ display: "flex", textAlign: "start" }}
            >
              <p>
                <b>Job description :</b>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <Link>
                <span className="badge rounded-pill bg-warning text-dark">
                  expired
                </span>
              </Link>
              <button className="btn btn-outline-success">Renew Job</button>
            </div>
          </div>
          <div className="post-feeds">
            <div className="d-flex flex-start">
              <h4>FullStack Web Developer</h4>
            </div>
            <div className="d-flex mt-2">
              ABC ITech | &#8377;25000-&#8377;50000 | Madhapur, Hydrabad
            </div>
            <div className="d-flex mt-3">
              Skills : HTML, CSS, JavaScript, NodeJS
            </div>
            <div
              className="d-flex mt-3"
              style={{ display: "flex", textAlign: "start" }}
            >
              <p>
                <b>Job description :</b>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <Link>
                <span className="badge rounded-pill bg-success">Active</span>
              </Link>
              <button className="btn btn-success">Expire Job</button>
            </div>
          </div>
          <div className="post-feeds">
            <div className="d-flex flex-start">
              <h4>DotNet Developer</h4>
            </div>
            <div className="d-flex mt-2">
              Some MNC Solutions | &#8377;25000-&#8377;50000 | Madhapur,
              Hydrabad
            </div>
            <div className="d-flex mt-3">
              Skills : HTML, CSS, JavaScript, NodeJS
            </div>
            <div
              className="d-flex mt-3"
              style={{ display: "flex", textAlign: "start" }}
            >
              <p>
                <b>Job description :</b>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <Link>
                <span className="badge rounded-pill bg-warning text-dark">
                  expired
                </span>
              </Link>
              <button className="btn btn-outline-success">Renew Job</button>
            </div>
          </div>
          <div className="post-feeds">
            <div className="d-flex flex-start">
              <h4>Frontend Developer</h4>
            </div>
            <div className="d-flex mt-2">
              Some MNC Solutions | &#8377;25000-&#8377;50000 | Madhapur,
              Hydrabad
            </div>
            <div className="d-flex mt-3">
              Skills : HTML, CSS, JavaScript, NodeJS
            </div>
            <div
              className="d-flex mt-3"
              style={{ display: "flex", textAlign: "start" }}
            >
              <p>
                <b>Job description :</b>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <Link>
                <span className="badge rounded-pill bg-warning text-dark">
                  expired
                </span>
              </Link>
              <button className="btn btn-outline-success">Renew Job</button>
            </div>
          </div>
          <div className="post-feeds">
            <div className="d-flex flex-start">
              <h4>Frontend Developer</h4>
            </div>
            <div className="d-flex mt-2">
              Some MNC Solutions | &#8377;25000-&#8377;50000 | Madhapur,
              Hydrabad
            </div>
            <div className="d-flex mt-3">
              Skills : HTML, CSS, JavaScript, NodeJS
            </div>
            <div
              className="d-flex mt-3"
              style={{ display: "flex", textAlign: "start" }}
            >
              <p>
                <b>Job description :</b>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <Link>
                <span className="badge rounded-pill bg-warning text-dark">
                  expired
                </span>
              </Link>
              <button className="btn btn-outline-success">Renew Job</button>
            </div>
          </div>
          <div className="post-feeds">
            <div className="d-flex flex-start">
              <h4>Frontend Developer</h4>
            </div>
            <div className="d-flex mt-2">
              Some MNC Solutions | &#8377;25000-&#8377;50000 | Madhapur,
              Hydrabad
            </div>
            <div className="d-flex mt-3">
              Skills : HTML, CSS, JavaScript, NodeJS
            </div>
            <div
              className="d-flex mt-3"
              style={{ display: "flex", textAlign: "start" }}
            >
              <p>
                <b>Job description :</b>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <Link>
                <span className="badge rounded-pill bg-warning text-dark">
                  expired
                </span>
              </Link>
              <button className="btn btn-outline-success">Renew Job</button>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className=" post-feeds">
            <div className="row">
              <div className="col-8">
                <div className="d-flex">
                  <h4>FullStack Web Developer</h4>
                  <Link>
                    <span className="badge rounded-pill bg-success ms-3 mt-2">
                      Active
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <button className="btn btn-outline-secondary me-1">
                    Expire Job
                  </button>
                  <button className="btn btn-outline-secondary me-1">
                    <span className="bi bi-share"></span>
                  </button>
                  <button className="btn btn-outline-secondary">
                    <span className="bi bi-three-dots-vertical"></span>
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <p className="d-flex mt-1">
                    Some MNC Solutions | &#8377;25000-&#8377;50000 | Madhapur,
                    Hydrabad &nbsp;
                    <b>
                      <a
                        href="/Newjobpreview"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Job Details
                      </a>{" "}
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" post-feeds">
            <div>
              <div className="container-xl container-lg">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col col-lg-12 mb-4 mb-lg-0">
                        <nav>
                          <div
                            className="nav nav-tabs"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              className="nav-link active"
                              id="nav-home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home"
                              type="button"
                              role="tab"
                              aria-controls="nav-home"
                              aria-selected="true"
                            >
                              Applied
                            </button>
                            <button
                              className="nav-link"
                              id="nav-profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile"
                              aria-selected="false"
                            >
                              Shortlisted
                            </button>
                          </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <ShortListed />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                          >
                            <ShortListed />
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
    </div>
  );
}
