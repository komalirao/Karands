import React, { useEffect } from "react";
import ICHPDashboard from "../Dashboard/ICHPDashboard";
import Sidebar from "../Sidebar/Sidebar";

function Userlist() {
  return (
    <div>
      <ICHPDashboard />

      <div class="container-lg container-xl ">
        <div class="card ">
          <div class="card-header">
            <h5 class="d-flex text-start">User List</h5>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="table-responsive">
                  <table class="table manage-candidates-top bg-white ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Skills</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <div class="d-flex align-items-center ">
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
                              class="rounded-circle"
                            />
                            <div class="ms-7">
                              <p
                                class="fw-bold mb-1 mb-3 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                John Doe
                              </p>
                              <p
                                class="text-muted mb-2  "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                {" "}
                                <i class="fas fa-map-marker-alt pr-1"></i>
                                Hyderabad
                              </p>
                              <p
                                class="text-muted mb-2 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                <i class="fas fa-tag pr-1"></i>Front-end
                                Developer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-muted mb-0">React jS , node js</p>
                        </td>
                        <td>
                          <div>
                            <p>
                              <a href="#" class="text-primary">
                                <i class="far fa-eye"></i>
                              </a>
                              View
                            </p>
                            <p>
                              <a href="#" class="text-info">
                                <i class="fas fa-pencil-alt"></i>
                              </a>
                              Shortlist
                            </p>
                            <p>
                              <a href="#" class="text-danger">
                                <i class="far fa-trash-alt"></i>
                              </a>
                              Delete
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <div class="d-flex align-items-center ">
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
                              class="rounded-circle"
                            />
                            <div class="ms-7">
                              <p
                                class="fw-bold mb-1 mb-3 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                John Doe
                              </p>
                              <p
                                class="text-muted mb-2  "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                {" "}
                                <i class="fas fa-map-marker-alt pr-1"></i>
                                Hyderabad
                              </p>
                              <p
                                class="text-muted mb-2 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                <i class="fas fa-tag pr-1"></i>Front-end
                                Developer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-muted mb-0">React jS , node js</p>
                        </td>
                        <td>
                          <div>
                            <p>
                              <a href="#" class="text-primary">
                                <i class="far fa-eye"></i>
                              </a>
                              View
                            </p>
                            <p>
                              <a href="#" class="text-info">
                                <i class="fas fa-pencil-alt"></i>
                              </a>
                              Shortlist
                            </p>
                            <p>
                              <a href="#" class="text-danger">
                                <i class="far fa-trash-alt"></i>
                              </a>
                              Delete
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <div class="d-flex align-items-center ">
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
                              class="rounded-circle"
                            />
                            <div class="ms-7">
                              <p
                                class="fw-bold mb-1 mb-3 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                John Doe
                              </p>
                              <p
                                class="text-muted mb-2  "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                {" "}
                                <i class="fas fa-map-marker-alt pr-1"></i>
                                Hyderabad
                              </p>
                              <p
                                class="text-muted mb-2 "
                                style={{
                                  display: "-ms-flexbox",
                                  display: "flex",
                                  WebkitBoxSizing: "content-box",
                                }}
                              >
                                <i class="fas fa-tag pr-1"></i>Front-end
                                Developer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-muted mb-0">React jS , node js</p>
                        </td>
                        <td>
                          <div>
                            <p>
                              <a href="#" class="text-primary">
                                <i class="far fa-eye"></i>
                              </a>
                              View
                            </p>
                            <p>
                              <a href="#" class="text-info">
                                <i class="fas fa-pencil-alt"></i>
                              </a>
                              Shortlist
                            </p>
                            <p>
                              <a href="#" class="text-danger">
                                <i class="far fa-trash-alt"></i>
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

export default Userlist;
