import React from "react";
import myImage from '../../../../logo.svg';

export default function RefBonus() {
  return (
    <div>
      <div className="container-lg container-xl ">
        <div className="card ">
          <div className="card-header">
            <h5 className="d-flex text-start">Job List</h5>
          </div>

          <div className="card-body mt-0">
            <div className="row mt-0">
              <div className="d-flex flex-column flex-lg-row align-items-center">
                <span className="mb-2">
                  <div className="flex-shrink-0">
                    <img
                      className=" rounded-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        backgroundColor: "red",
                      }}
                      src={myImage}
                    />
                  </div>
                </span>
                <div className="row flex-fill p-4 ">
                  <div className="col-sm-5 col-md-5 text-start  ">
                    <h4 className="lead">
                      <strong>Junior Frontend Developer</strong>
                    </h4>
                    <h6>~Karands.com</h6>
                    <h6>Work Experience: 2-3 years</h6>
                    <span className="badge bg-secondary ">WORLDWIDE</span>{" "}
                    <span className="badge bg-success">$60K - $100K</span>
                  </div>
                  <div className="col-sm-4  col-md-4 py-2">
                    <span className="badge  bg-secondary p-1 mr-1">REACT</span>
                    <span className="badge  bg-secondary p-1  mr-1">NODE</span>
                    <span className="badge   bg-secondary p-1  mr-1">
                      TYPESCRIPT
                    </span>
                    <span className="badge  bg-secondary p-1  mr-1">
                      JUNIOR
                    </span>
                  </div>
                  <div className="col-sm-3 text-lg-end">
                    <a href="#" className="btn btn-success stretched-link">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-3 mb-3 pt-2  ms-3 text-center  d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center gap-3">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#joblistdetailsModal"
                  >
                    Read Task
                  </button>
                  <div
                    className="modal fade"
                    id="joblistdetailsModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
                      style={{ display: "flex", top: "5%", bottom: "30%" }}
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Modal title
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>

                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-danger me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#jobdetailsnotesModal"
                  >
                    Notes
                  </button>
                  <div
                    className="modal fade"
                    id="jobdetailsnotesModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
                      style={{ display: "flex", top: "5%", bottom: "30%" }}
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Modal title
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>

                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button type="button" className="btn btn-success me-3">
                    Accept
                  </button>
                  <button type="button" className="btn btn-danger me-3">
                    Decline
                  </button>
                </div>
              </div>

              <hr className="border border-secondary border-1 opacity-50" />
              <div className="d-flex flex-column flex-lg-row align-items-center">
                <span className="    mb-2">
                  <div className="flex-shrink-0">
                    <img
                      className=" rounded-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        backgroundColor: "red",
                      }}
                      src={myImage}
                    />
                  </div>
                </span>
                <div className="row flex-fill p-4 ">
                  <div className="col-sm-5 col-md-5 text-start  ">
                    <h4 className="lead">
                      <strong>Junior Frontend Developer</strong>
                    </h4>
                    <h6>~Karands.com</h6>
                    <h6>Work Experience: 2-3 years</h6>
                    <span className="badge bg-secondary ">WORLDWIDE</span>{" "}
                    <span className="badge bg-success">$60K - $100K</span>
                  </div>
                  <div className="col-sm-4  col-md-4 py-2">
                    <span className="badge  bg-secondary p-1 mr-1">REACT</span>
                    <span className="badge  bg-secondary p-1  mr-1">NODE</span>
                    <span className="badge   bg-secondary p-1  mr-1">
                      TYPESCRIPT
                    </span>
                    <span className="badge  bg-secondary p-1  mr-1">
                      JUNIOR
                    </span>
                  </div>
                  <div className="col-sm-3 text-lg-end">
                    <a href="#" className="btn btn-success stretched-link">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-3 mb-3 pt-2  ms-3 text-center  d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center gap-3">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#companydetailsModal"
                  >
                    Read Task
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#companynotesModal"
                  >
                    Notes
                  </button>
                </div>

                <div>
                  <button type="button" className="btn btn-success me-3">
                    Accept
                  </button>
                  <button type="button" className="btn btn-danger me-3">
                    Decline
                  </button>
                </div>
              </div>
              <hr className="border border-secondary border-2 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
