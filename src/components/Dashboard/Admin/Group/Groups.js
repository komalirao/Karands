import React from "react";
import YourGroup from "./YourGroup";
import RecommendedGroup from "./RecommendedGroup";

export default function Groups() {
  return (
    <div>
      <div className="d-flex text-start ms-2"></div>
      <div className=" post-feeds">
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
                          id="nav-group-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-group"
                          type="button"
                          role="tab"
                          aria-controls="nav-group"
                          aria-selected="true"
                        >
                          your group
                        </button>
                        <button
                          className="nav-link"
                          id="nav-recgroup-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-recgroup"
                          type="button"
                          role="tab"
                          aria-controls="nav-recgroup"
                          aria-selected="false"
                        >
                          recommended group
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-group"
                        role="tabpanel"
                        aria-labelledby="nav-group-tab"
                      >
                       <YourGroup/>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-recgroup"
                        role="tabpanel"
                        aria-labelledby="nav-recgroup-tab"
                      >
                        <RecommendedGroup/>
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
