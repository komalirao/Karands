import React from "react";

export default function TopJob() {
  return (
    <div className="container">
      <div className="side-bar">
        <div className="shadow p-3 bg-body rounded">
          <div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <h6>Top Jobs</h6>
              <span className="bi bi-three-dots-vertical"></span>
            </div>

            <hr />
            <div style={{ textAlign: "left" }}>
              <div className="job-info">
                <div
                  className="job-details d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <h6 className="text-primary">Senior Product Designer</h6>
                    <p>Lorem ipsum dolor sit amet..</p>
                    <div className="mb-3">
                      <span className="badge bg-secondary me-1">ReactJS</span>
                      <span className="badge bg-secondary me-1">AngularJS</span>
                      <span className="badge bg-secondary me-1">MySQL</span>
                      more..
                    </div>
                  </div>
                  <div>
                    <span>$25/hr</span>
                  </div>
                </div>
              </div>
              <div className="job-info">
                <div
                  className="job-details d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <h6 className="text-primary">Senior UI / UX Designer</h6>
                    <p> Company : ABC Company</p>
                    <div className="mb-3">
                      <span className="badge bg-secondary me-1">ReactJS</span>
                      <span className="badge bg-secondary me-1">AngularJS</span>
                      <span className="badge bg-secondary me-1">MySQL</span>
                      more..
                    </div>
                  </div>
                  <div>
                    <span>$25/hr</span>
                  </div>
                </div>
              </div>
              <div className="job-info">
                <div
                  className="job-details d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <h6 className="text-primary">Junior Seo Designer</h6>
                    <p> Company : ABC Company</p>
                    <div className="mb-3">
                      <span className="badge bg-secondary me-1">ReactJS</span>
                      <span className="badge bg-secondary me-1">AngularJS</span>
                      <span className="badge bg-secondary me-1">MySQL</span>
                      more..
                    </div>
                  </div>
                  <div>
                    <span>$25/hr</span>
                  </div>
                </div>
              </div>
              <div className="job-info">
                <div
                  className="job-details d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <h6 className="text-primary">Senior PHP Designer</h6>
                    <p> Company : ABC Company</p>
                    <div className="mb-3">
                      <span className="badge bg-secondary me-1">ReactJS</span>
                      <span className="badge bg-secondary me-1">AngularJS</span>
                      <span className="badge bg-secondary me-1">MySQL</span>
                      more..
                    </div>
                  </div>
                  <div>
                    <span>$25/hr</span>
                  </div>
                </div>
              </div>
              <div className="job-info">
                <div
                  className="job-details d-flex mt-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <h6 className="text-primary">Senior Developer Designer</h6>
                    <p> Company : ABC Company</p>
                    <div className="mb-3">
                      <span className="badge bg-secondary me-1">ReactJS</span>
                      <span className="badge bg-secondary me-1">AngularJS</span>
                      <span className="badge bg-secondary me-1">MySQL</span>
                      more..
                    </div>
                  </div>
                  <div>
                    <span>$25/hr</span>
                  </div>
                </div>
              </div>

              <div className="job-info">
                <div className="mt-3">
                  <h6 className="text-primary">View all...</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
