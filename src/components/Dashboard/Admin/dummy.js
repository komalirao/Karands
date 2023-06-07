import React from "react";

export default function dummy() {
  return (
    <div>
      <div className="form-group">
        <div className="row justify-content-md-center">
          <label htmlFor="inputUsername" className="col-lg-3 col-form-label">
            Username:
          </label>
          <div className="col-lg-6">
            <input
              className="form-control"
              type="text"
              placeholder="bootdey"
              id="Username"
              onChange={takeName}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row justify-content-md-center">
          <label htmlFor="confirmPassword" className="col-lg-3 col-form-label">
            Confirm Password:
          </label>
          <div className=" col-lg-6">
            <input
              className="form-control"
              type="text"
              id="confirmPassword"
              onChange={takeConfirm}
              name="confirmPassword"
              required
            />
          </div>
        </div>
      </div>
      <button className="btn btn-success">save</button>
    </div>
  );
}
