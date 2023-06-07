import React from "react";

export default function ShortListed() {
  return (
    <div>
      <div className="container-lg container-xl mt-3 ">
        <div className="card ">
          {/*<div className="card-header">
            <h5 className="d-flex text-start">User List</h5>
  </div>*/}

          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table manage-candidates-top bg-white ">
                    <thead>
                      <tr>
                        <th scope="col">no.</th>
                        <th scope="col"></th>
                        <th scope="col">Skills</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <div className="d-flex align-items-center ">
                            <img
                              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                              alt=""
                              style={{
                                width: "80px",
                                height: "80px",
                                marginRight: "20px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                overflow: "hidden",
                              }}
                              className="rounded-circle"
                            />
                            <div className="ms-7">
                              <p
                                className="fw-bold mb-1 mb-3 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                John Doe
                              </p>
                              <p
                                className="text-muted mb-2  "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                {" "}
                                <i className="fas fa-map-marker-alt pr-1"></i>
                                Hyderabad
                              </p>
                              <p
                                className="text-muted mb-2 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                <i className="fas fa-tag pr-1"></i>Front-end
                                Developer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-muted mb-0">React jS , node js</p>
                        </td>
                        <td>
                          <div>
                            <p>
                              <a href="#" className="text-primary">
                                <i className="far fa-eye me-1"></i>
                              </a>
                              View
                            </p>
                            <p>
                              <a href="#" className="text-info">
                                <i className="fas fa-pencil-alt me-1"></i>
                              </a>
                              Shortlist
                            </p>
                            <p>
                              <a href="#" className="text-danger">
                                <i className="far fa-trash-alt me-1"></i>
                              </a>
                              Delete
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <div className="d-flex align-items-center ">
                            <img
                              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                              alt=""
                              style={{
                                width: "80px",
                                height: "80px",
                                marginRight: "20px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                overflow: "hidden",
                              }}
                              className="rounded-circle"
                            />
                            <div className="ms-7">
                              <p
                                className="fw-bold mb-1 mb-3 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                John Doe
                              </p>
                              <p
                                className="text-muted mb-2  "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                {" "}
                                <i className="fas fa-map-marker-alt pr-1"></i>
                                Hyderabad
                              </p>
                              <p
                                className="text-muted mb-2 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                <i className="fas fa-tag pr-1"></i>Front-end
                                Developer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-muted mb-0">React jS , node js</p>
                        </td>
                        <td>
                          <div>
                            <p>
                              <a href="#" className="text-primary">
                                <i className="far fa-eye me-1"></i>
                              </a>
                              View
                            </p>
                            <p>
                              <a href="#" className="text-info">
                                <i className="fas fa-pencil-alt me-1"></i>
                              </a>
                              Shortlist
                            </p>
                            <p>
                              <a href="#" className="text-danger">
                                <i className="far fa-trash-alt me-1"></i>
                              </a>
                              Delete
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <div className="d-flex align-items-center ">
                            <img
                              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                              alt=""
                              style={{
                                width: "80px",
                                height: "80px",
                                marginRight: "20px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                overflow: "hidden",
                              }}
                              className="rounded-circle"
                            />
                            <div className="ms-7">
                              <p
                                className="fw-bold mb-1 mb-3 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                John Doe
                              </p>
                              <p
                                className="text-muted mb-2  "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                {" "}
                                <i className="fas fa-map-marker-alt pr-1"></i>
                                Hyderabad
                              </p>
                              <p
                                className="text-muted mb-2 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                <i className="fas fa-tag pr-1"></i>Front-end
                                Developer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-muted mb-0">React jS , node js</p>
                        </td>
                        <td>
                          <div>
                            <p>
                              <a href="#" className="text-primary">
                                <i className="far fa-eye me-1"></i>
                              </a>
                              View
                            </p>
                            <p>
                              <a href="#" className="text-info">
                                <i className="fas fa-pencil-alt me-1"></i>
                              </a>
                              Shortlist
                            </p>
                            <p>
                              <a href="#" className="text-danger">
                                <i className="far fa-trash-alt me-1"></i>
                              </a>
                              Delete
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
