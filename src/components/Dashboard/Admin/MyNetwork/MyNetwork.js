import React from "react";
import Connections from "./Connections";
import Pending from "./Pending";
import Request from "./Request";
import Blocked from "./Blocked";
import Page from "./Page";
//import YourGroup from "../Group/YourGroup";
import Group from "./Group";

export default function MyNetwork() {
  return (
    <div>
      <div className="d-flex text-start ms-2">
        <h2>My Network</h2>
      </div>
      <div className="post-feeds">
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
                          Connections
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
                          Pending
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
                          Requests
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
                          Blocked
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
                          Groups
                        </button>
                        <button
                          className="nav-link"
                          id="nav-page-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-page"
                          type="button"
                          role="tab"
                          aria-controls="nav-page"
                          aria-selected="false"
                        >
                          Page
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
                        <Connections />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-pending"
                        role="tabpanel"
                        aria-labelledby="nav-pending-tab"
                      >
                        <Pending />
                      </div>

                      <div
                        className="tab-pane fade show "
                        id="nav-request"
                        role="tabpanel"
                        aria-labelledby="nav-request-tab"
                      >
                        <Request />
                      </div>
                      <div
                        className="tab-pane fade show "
                        id="nav-blocked"
                        role="tabpanel"
                        aria-labelledby="nav-blocked-tab"
                      >
                        <Blocked />
                      </div>
                      <div
                        className="tab-pane fade show "
                        id="nav-groups"
                        role="tabpanel"
                        aria-labelledby="nav-groups-tab"
                      >
                       {/* <YourGroup/>*/}
                       <Group/>
                      </div>
                      <div
                        className="tab-pane fade show "
                        id="nav-page"
                        role="tabpanel"
                        aria-labelledby="nav-page-tab"
                      >
                        <Page />
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
