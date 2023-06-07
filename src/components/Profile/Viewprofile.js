import React from 'react'
import './View.css'
//import { useEffect, useState } from "react";
//import myImage from '../../assets/1.jpg'
//import Sidebar from '../Sidebar/Sidebar';
//import IUDashboard from '../Dashboard/IUDashboard';
import ICHPDashboard from '../Dashboard/ICHPDashboard';


function Viewprofile() {
  return (
    <div style={{ backgroundColor: '#F0F0F0' }}>
      <ICHPDashboard />
      <div class="container-lg container-xl "  >
        <div class="card ">
          <div class="card-header">

            <h5 class="d-flex text-start">User Profile</h5>
          </div>
          <div class="card-body"  >
            <div class="row">
              <div class="col-lg-4 col-xl-4">

                <div class="card-box text-center">

                  <div class="d-inline-flex position-relative" >
                    <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">

                    </span>
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class=" avatar-xl img-thumbnai " alt="profile-image"  style={{ borderRadius: '50%',width:'120px', height:'120px' }} />
                     <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle"/>
                    <span class="" ></span>
                  </div>


                  <h4 class="mb-0">Nik G. Patel</h4>
                  <p class="text-muted">@webdesigner</p>
                  <button type="button" class="btn btn-success btn-xs waves-effect mb-2 waves-light">Follow</button>
                  <button type="button" class="btn btn-danger btn-xs waves-effect mb-2 waves-light">Message</button>

                  <div class="text-left mt-3">
                    <h4 class="font-13 text-uppercase m-2 ">About Me :</h4>
                    <p class="text-muted font-13 mb-3 m-2">
                      Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type.
                    </p>
                    <p class="text-muted mb-2 font-13 m-2"><strong>Full Name :</strong> <span class="ml-2">Nik G. Patel</span></p>

                    <p class="text-muted mb-2 font-13 m-2"><strong>Designation :</strong><span class="ml-2">Front-end-Developer</span></p>


                    <p class="text-muted mb-2 font-13 m-2"><strong>Title :</strong> <span class="ml-2 ">user@email.domain</span></p>
                    <p class="text-muted mb-2 font-13 m-2"><strong>Company :</strong> <span class="ml-2 ">Karands</span></p>


                    <p class="text-muted mb-1 font-13 m-2"><strong>Company Location :</strong> <span class="ml-2">USA</span></p>
                  </div>

                  <ul class="social-list list-inline mt-3 mb-0">
                    <li class="list-inline-item">
                      <a href="javascript: void(0);" class="social-list-item border-purple text-purple"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript: void(0);" class="social-list-item border-danger text-danger"><i class="fab fa-google"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript: void(0);" class="social-list-item border-info text-info"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary"><i class="fab fa-github"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="card">
                  <h4 class="header-title  mdi mdi-account-multiple-outline">Connections</h4>

                  <div class="row">
                    <div class="col-lg-4">
                      <a href="#">

                        <img
                          src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                          class="rounded-circle"
                          alt=""
                          style={{ width: 45, height: 45 }}
                        />

                        <div class="user">
                          <p class="user-name">Poul Smith</p></div>
                      </a>
                    </div>
                    <div class="col-lg-4">
                      <a href="#">
                        <span class="pro-pic">
                          <img
                            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                            class="rounded-circle"
                            alt=""
                            style={{ width: 45, height: 45 }}
                          />
                        </span>
                        <div class="user">
                          <p class="user-name">John Wick</p>

                        </div>
                      </a>
                    </div>
                    <div class="col-lg-4">
                      <a href="#">
                        <span class="pro-pic">
                          <img
                            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                            class="rounded-circle"
                            alt=""
                            style={{ width: 45, height: 45 }}
                          />
                        </span>
                        <div class="user">
                          <p class="user-name">Susan Don</p>

                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-8 col-xl-8 " >
                <div class="row">
                  <div class="card">
                    <div class="card-header ">
                      <div class="col-lg-12" >
                        <nav>
                          <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">Profile</button>
                            <button class="nav-link" id="nav-projects-tab" data-bs-toggle="tab" data-bs-target="#nav-projects" type="button" role="tab" aria-controls="nav-projects" aria-selected="false">Projects</button>
                            <button class="nav-link" id="nav-documents-tab" data-bs-toggle="tab" data-bs-target="#nav-documents" type="button" role="tab" aria-controls="nav-documents" aria-selected="false">Documents</button>
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="tab-content " id="nav-tabContent">
                        <div class="tab-pane fade show active " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                          <div class="row  ">
                            <h5 class="mb-4 text-uppercase d-flex justify-content-start"><i class="mdi mdi-account"></i>
                              About</h5>
                            <div class="col-6 " >
                              <h6 class=" d-flex text-start fs-13 fw-normal ">First Name :
                                <p class="text-muted flex text-start ml-2  ">Sravana</p></h6>
                            </div>
                            <div class="col-6" >
                              <h6 class=" d-flex text-start fs-13 fw-normal ">Last Name :
                                <p class="text-muted flex text-start ml-2 ">Bommidi</p></h6>
                            </div>
                            <div class="col-6  ">
                              <h6 class=" d-flex text-start fs-13 fw-normal ">User Name :
                                <p class="text-muted flex text-start ml-2  ">Sravana</p></h6>
                            </div>
                            <div class="col-6 ">
                              <h6 class=" d-flex text-start fs-13 fw-normal ">Email :
                                <p class="text-muted flex text-start ml-2 ">sravana@gmail.com</p></h6>
                            </div>
                            <div class="col-6 ">
                              <h6 class=" d-flex text-start fs-13 fw-normal ">Country :
                                <p class="text-muted flex text-start pl-2 ">India</p></h6>
                            </div>
                            <div class="col-6 ">
                              <h6 class=" d-flex text-start fs-13 fw-normal ">Birthday :
                                <p class="text-muted flex text-start ml-2 ">Jan 21st 1997</p></h6>
                            </div>
                            <div class="col-6 ">
                              <h6 class=" d-flex text-start fs-13 fw-normal ">Gender :
                                <p class="text-muted flex text-start ml-2 ">Female</p></h6>
                            </div>
                            <div class="col-6 ">
                              <h6 class=" d-flex text-start fs-13 fw-normal ">Location :
                                <p class="text-muted flex text-start ml-2  ">Hyd</p></h6>
                            </div>
                            <div class="col-6 ">
                              <h6 class=" d-flex text-start fs-13 fw-normal ">Mobile Number :
                                <p class="text-muted flex text-start ml-2 ">234-2452-262</p></h6>
                            </div>
                          </div>
                          <hr class="border border-danger border-2 opacity-50" />

                          <div class="row " >
                            <h5 class="mb-4 text-uppercase d-flex text-start" ><i class="mdi mdi-briefcase mr-1"></i>
                              Experience</h5>
                            <div class="d-flex flex-column col-lg-12 ">
                              <ul >
                                <li >

                                  <h6 class="mt-0 mb-1 fs-5 d-flex text-start  ">Lead designer / Developer</h6>
                                  <p class="d-flex text-start">websitename.com</p>
                                  <p class="text-muted mt-1 d-flex text-start ">June 2022 ~ now.</p>

                                  <h6 class="d-flex text-start"> <i class="mdi mdi-label-outline"></i>skills:</h6>
                                  <ul >
                                    <li >



                                      <p class="d-flex text-start" >The ability to work within a team and independently as required.</p>
                                      <li>
                                        <p class="d-flex text-start">Strong knowledge of various designing processes and prior experience in managing them</p>
                                      </li>
                                    </li>
                                  </ul>
                                </li>
                                <li >

                                  <h6 class="mt-0 mb-1 d-flex text-start fs-5">Senior Graphic Designer</h6>
                                  <p class="d-flex text-start">Software Inc.</p>
                                  <p class="text-muted mt-1 d-flex text-start">March 2021 ~ March 2022.</p>

                                  <h6 class="d-flex text-start"> <i class="mdi mdi-label-outline d-flex justify-content-start"></i>skills:</h6>
                                  <ul >
                                    <li  >


                                      <p class="d-flex text-start">The ability to work within a team and independently as required.</p>
                                      <li>
                                        <p class="d-flex text-start">Strong knowledge of various designing processes and prior experience in managing them</p>
                                      </li>
                                    </li>
                                  </ul>
                                </li>
                                <li >

                                  <h6 class="mt-0 mb-1 d-flex text-start fs-5">Graphic Designer</h6>
                                  <p class="d-flex text-start">Coderthemes LLP</p>
                                  <p class="text-muted mt-1 mb-2 d-flex text-start">jan 2020 ~ jan 2021.</p>

                                  <h6 class="d-flex text-start "><i class="mdi mdi-label-outline"></i>skills:</h6>
                                  <ul >
                                    <li >


                                      <p class="d-flex text-start " >The ability to work within a team and independently as required.</p>

                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>

                          </div>
                          <hr class="border border-danger border-2 opacity-50" />
                          <div class="row">

                            <div class="col-lg">
                              <h5 class="mb-4 text-uppercase d-flex text-start  "><i class="mdi mdi-book-open"></i>
                                Education</h5>
                              <ul class="list-unstyled mb-1-9">
                                <li >

                                  <h6 class="mt-0 mb-1 mdi mdi-checkbox-blank-circle-outline d-flex text-start">Bachelors's Degree E-Commerce at UCLA</h6>

                                  <p class="text-muted mt-2 d-flex text-start ">June 2022 ~ now.</p>

                                </li>
                                <li >

                                  <h6 class="mt-0 mb-1 mdi mdi-checkbox-blank-circle-outline d-flex text-start">Student at Web Design Education</h6>

                                  <p class="text-muted mt-2 d-flex text-start">March 2021 ~ March 2022.</p>
                                </li>
                                <li >

                                  <h6 class="mt-0 mb-1 mdi mdi-checkbox-blank-circle-outline d-flex text-start">Student at ST.Louis high school</h6>

                                  <p class="text-muted mt-2 mb-0 d-flex text-start">jan 2020 ~ jan 2021.</p>
                                </li>


                              </ul>




                            </div></div>
                          <hr class="border border-danger border-2 opacity-50" />  <hr />

                          <div class="row " >
                            <div class="col-lg-6" >
                              <h5 class="mb-4 text-uppercase d-flex text-start "><i class="mdi mdi-desktop-mac"></i>
                                Activity</h5><ul class="list-group list-group-flush d-flex justify-content-start">
                                <li class="list-group-item">
                                  <h6 class="d-flex text-start"><i class="mdi mdi-star-circle "></i>Somehas given you as a Surprise</h6>
                                  <p class="text-muted mt-2 mb-0  d-flex text-start"> ~ 12 minutes ago.</p>
                                </li>
                                <li class="list-group-item">
                                  <h6 class="d-flex text-start"> <i class="mdi mdi-star-circle"></i>Change your profile User details</h6>
                                  <p class="text-muted mt-2 mb-0 d-flex text-start"> ~ 1 Hour 20 minutes ago.</p>
                                </li>
                                <li class="list-group-item">
                                  <h6 class="d-flex text-start"><i class="mdi mdi-star-circle"></i> Your Settings has Updated</h6>
                                  <p class="text-muted mt-2 mb-0 d-flex text-start"> ~ One day ago.</p>
                                </li>
                                <li class="list-group-item">
                                  <h6 class="d-flex text-start"><i class="mdi mdi-star-circle"></i>Change your profile User details</h6>
                                  <p class="text-muted mt-2 mb-0 d-flex text-start"> ~ 1 Hour 20 minutes ago.</p>
                                </li>

                              </ul>



                            </div>
                            <div class="col-lg-6" >
                              <h4 class="header-title d-flex text-start">Skills</h4>
                              <div class="pt-1">
                                <h6 class="text-uppercase mt-0 ">HTML5 <span class=" float-right">90%</span></h6>
                                <div class="progress progress-sm m-0">
                                  <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                    <span class="sr-only">90% Complete</span>
                                  </div>
                                </div>
                              </div>

                              <div class="mt-2 pt-1">
                                <h6 class="text-uppercase">PHP <span class="float-right">67%</span></h6>
                                <div class="progress progress-sm m-0">
                                  <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{ width: "67%" }}>
                                    <span class="sr-only">67% Complete</span>
                                  </div>
                                </div>
                              </div>

                              <div class="mt-2 pt-1">
                                <h6 class="text-uppercase">WordPress <span class="float-right">48%</span></h6>
                                <div class="progress progress-sm m-0">
                                  <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style={{ width: "48%" }}>
                                    <span class="sr-only">48% Complete</span>
                                  </div>
                                </div>
                              </div>

                              <div class="mt-2 pt-1">
                                <h6 class="text-uppercase">Laravel <span class="float-right">95%</span></h6>
                                <div class="progress progress-sm m-0">
                                  <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}>
                                    <span class="sr-only">95% Complete</span>
                                  </div>
                                </div>
                              </div>

                              <div class="mt-2 pt-1">
                                <h6 class="text-uppercase">ReactJs <span class="float-right">72%</span></h6>
                                <div class="progress progress-sm m-0">
                                  <div class="progress-bar bg-purple" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{ width: "72%" }}>
                                    <span class="sr-only">72% Complete</span>
                                  </div>
                                </div>
                              </div>

                            </div>




                          </div>


                        </div>


                        <div class="tab-pane fade" id="nav-projects" role="tabpanel" aria-labelledby="nav-projects-tab">
                          <h5 class="mb-3  text-uppercase"><i class="mdi mdi-cards-variant mr-1"></i>
                            Projects</h5>
                          <div class="table-responsive table table-striped table table-hover ">
                            <table class="table align-middle mb-0 bg-white">
                              <thead class="bg-light">
                                <tr>
                                  <th>Name</th>
                                  <th>Title</th>
                                  <th>Status</th>
                                  <th>Position</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: 45, height: 45 }}
                                        class="rounded-circle"
                                      />
                                      <div class="ms-3">
                                        <p class="fw-bold mb-1">John Doe</p>
                                        <p class="text-muted mb-0">john.doe@gmail.com</p>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p class="fw-normal mb-1">Software engineer</p>
                                    <p class="text-muted mb-0">IT department</p>
                                  </td>
                                  <td>
                                    <span class="badge badge-success rounded-pill d-inline">Active</span>
                                  </td>
                                  <td>Senior</td>
                                  <td>
                                    <button type="button" class="btn btn-link btn-sm btn-rounded">
                                      Edit
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <img
                                        src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                        class="rounded-circle"
                                        alt=""
                                        style={{ width: 45, height: 45 }}
                                      />
                                      <div class="ms-3">
                                        <p class="fw-bold mb-1">Alex Ray</p>
                                        <p class="text-muted mb-0">alex.ray@gmail.com</p>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p class="fw-normal mb-1">Consultant</p>
                                    <p class="text-muted mb-0">Finance</p>
                                  </td>
                                  <td>
                                    <span class="badge badge-primary rounded-pill d-inline"
                                    >Onboarding</span
                                    >
                                  </td>
                                  <td>Junior</td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn btn-link btn-rounded btn-sm fw-bold"
                                      data-mdb-ripple-color="dark"
                                    >
                                      Edit
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <img
                                        src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                        class="rounded-circle"
                                        alt=""
                                        style={{ width: 45, height: 45 }}
                                      />
                                      <div class="ms-3">
                                        <p class="fw-bold mb-1">Kate Hunington</p>
                                        <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p class="fw-normal mb-1">Designer</p>
                                    <p class="text-muted mb-0">UI/UX</p>
                                  </td>
                                  <td>
                                    <span class="badge badge-warning rounded-pill d-inline">Awaiting</span>
                                  </td>
                                  <td>Senior</td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn btn-link btn-rounded btn-sm fw-bold"
                                      data-mdb-ripple-color="dark"
                                    >
                                      Edit
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table></div>
                        </div>


                        <div class="tab-pane fade" id="nav-documents" role="tabpanel" aria-labelledby="nav-documents-tab">

                          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                              <button class="nav-link active" id="pills-personal-tab" data-bs-toggle="pill" data-bs-target="#pills-personal" type="button" role="tab" aria-controls="pills-personal" aria-selected="true">Personal</button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button class="nav-link" id="pills-educational-tab" data-bs-toggle="pill" data-bs-target="#pills-educational" type="button" role="tab" aria-controls="pills-Educational" aria-selected="false">Educational</button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button class="nav-link" id="pills-professional-tab" data-bs-toggle="pill" data-bs-target="#pills-professional" type="button" role="tab" aria-controls="pills-professional" aria-selected="false">Professional</button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button class="nav-link" id="pills-projects-tab" data-bs-toggle="pill" data-bs-target="#pills-projects" type="button" role="tab" aria-controls="pills-projects" aria-selected="false">Projects</button>
                            </li>

                            <li class="nav-item" role="presentation">
                              <button class="nav-link" id="pills-others-tab" data-bs-toggle="pill" data-bs-target="#pills-others" type="button" role="tab" aria-controls="pills-others" aria-selected="false" >Others</button>
                            </li>
                          </ul>
                          <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="pills-professional" role="tabpanel" aria-labelledby="pills-professional-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="pills-educational" role="tabpanel" aria-labelledby="pills-educational-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="pills-projects" role="tabpanel" aria-labelledby="pills-projects-tab" tabindex="0">...</div>

                            <div class="tab-pane fade" id="pills-others" role="tabpanel" aria-labelledby="pills-others-tab" tabindex="0">...</div>
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

  )

}

export default Viewprofile