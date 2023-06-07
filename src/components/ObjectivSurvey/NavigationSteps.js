import React from 'react'
import LookingForJob from '../pages/objSurvey/LookingForJob'
import BuildNetwok from '../pages/objSurvey/BuildNetwork'
import ForInvest from '../pages/objSurvey/ForInvest'
import Mentoring from '../pages/objSurvey/Mentoring'
import Adertise from '../pages/objSurvey/Advertise'
import Header from '../pages/objSurvey/Header'


export default function NavigationSteps() {
  return (
    <div>
    <Header/>
    <div className='post-feeds'>
        <div>
          <div className="container-xl container-lg">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col col-lg-12 mb-4 mb-lg-0">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className="nav-link active"
                          id="nav-connection-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-connection"
                          type="button"
                          role="tab"
                          aria-controls="nav-connection"
                          aria-selected="true"
                        >
                          Looking for job
                        </button>
                        <button
                          className="nav-link"
                          id="nav-pending-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-pending"
                          type="button"
                          role="tab"
                          aria-controls="nav-pending"
                          aria-selected="false"
                        >
                          Looking for build Network
                        </button>
                        <button
                          className="nav-link"
                          id="nav-request-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-request"
                          type="button"
                          role="tab"
                          aria-controls="nav-request"
                          aria-selected="false"
                        >
                          looking for invest
                        </button>
                        <button
                          className="nav-link"
                          id="nav-blocked-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-blocked"
                          type="button"
                          role="tab"
                          aria-controls="nav-blocked"
                          aria-selected="false"
                        >
                          looking for Mentoring
                        </button>
                        <button
                          className="nav-link"
                          id="nav-groups-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-groups"
                          type="button"
                          role="tab"
                          aria-controls="nav-groups"
                          aria-selected="false"
                        >
                          Advertise
                        </button>
                       
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-connection"
                        role="tabpanel"
                        aria-labelledby="nav-connection-tab"
                      >
                        <LookingForJob />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-pending"
                        role="tabpanel"
                        aria-labelledby="nav-pending-tab"
                      >
                        <BuildNetwok />
                      </div>

                      <div
                        className="tab-pane fade show "
                        id="nav-request"
                        role="tabpanel"
                        aria-labelledby="nav-request-tab"
                      >
                        <ForInvest />
                      </div>
                      <div
                        className="tab-pane fade show "
                        id="nav-blocked"
                        role="tabpanel"
                        aria-labelledby="nav-blocked-tab"
                      >
                        <Mentoring />
                      </div>
                      <div
                        className="tab-pane fade show "
                        id="nav-groups"
                        role="tabpanel"
                        aria-labelledby="nav-groups-tab"
                      >
                       {/* <YourGroup/>*/}
                       <Adertise />
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
