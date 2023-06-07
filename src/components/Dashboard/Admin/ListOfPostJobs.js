import React from "react";
import { Link } from "react-router-dom";
import "./ListOfPostjobs.css";

export default function ListOfPostJobs() {
  return (
    <div className="container">
      <div className="">
        <div className="post-job">
          <div
            className="d-flex flex-start"
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <h4>Frontend Developer</h4>
              <p className="ms-4 mt-2">0 min ago</p>
            </div>
            <div className="dropdown">
              <div className="dots-icon">
                <span className="bi bi-three-dots-vertical"></span>
              </div>
              <div className="dropdown-content">
                <a href="#"> view job</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            </div>
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
        <div className="post-job">
          <div
            className="d-flex flex-start"
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <h4>Frontend Developer</h4>
              <p className="ms-4 mt-2">1 min ago</p>
            </div>
            <div className="dropdown">
            <div className="dots-icon">
              <span className="bi bi-three-dots-vertical"></span>
            </div>
            <div className="dropdown-content">
              <a href="#"> view job</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </div>
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
        <div className="post-job">
          <div
            className="d-flex flex-start"
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <h4>Frontend Developer</h4>
              <p className="ms-4 mt-2">2 min ago</p>
            </div>
            <div className="dropdown">
            <div className="dots-icon">
              <span className="bi bi-three-dots-vertical"></span>
            </div>
            <div className="dropdown-content">
              <a href="#"> view job</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </div>
          </div>
          <div className="d-flex mt-2">
            Karands business Solutions | &#8377;25000-&#8377;45000 | Madhapur,
            Hydrabad
          </div>
          <div className="d-flex mt-3">
            Skills : HTML, CSS, JavaScript,NodeJS
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
    </div>
  );
}
