import React, {useState} from "react";

export default function AccountSetting() {

    const [errors, setErrors] = useState({});

    const [account, setAccount] = React.useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
      });

    const takeEmail = (event) => {
        setAccount((prevstate) => ({ ...prevstate, email: event.target.value }));
      };
      const takeName = (event) => {
        setAccount((prevstate) => ({ ...prevstate, name: event.target.value }));
      };
    
      const takePassword = (event) => {
        setAccount((prevstate) => ({ ...prevstate, password: event.target.value }));
      };
      const takeConfirm = (event) => {
        setAccount((prevstate) => ({
          ...prevstate,
          confirmPassword: event.target.value,
        }));
      };
      

      const handleFocus = (event) => {
        const name = event.target.name;
        setErrors((prevState) => ({ ...prevState, [name]: "" }));
      };
  return (
    <div>
    <h4 className="d-flex justify-content-start">
    Account Settings
  </h4>

      <form className="form-horizontal" role="form">
        <div className="form-group">
          <div className="row justify-content-md-center">
            <label htmlFor="staticEmail" className="col-lg-3 col-form-label">
              Email
            </label>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                id="staticEmail"
                placeholder="email@example.com"
                onChange={takeEmail}
              />
            </div>
            {/* <label className=" col-lg-2 control-label">Email:</label>
        <div className=" col-lg-6" >
        <input className="form-control" type="text" placeholder="dey-dey"/>
        </div> */}
          </div>
        </div>

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
            <label htmlFor="inputPassword" className="col-lg-3 col-form-label">
              Password:
            </label>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                id="inputPassword"
                onChange={takePassword}
                onFocus={handleFocus}
                name="password"
                required
              />
              {
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    textAlign: "left",
                    marginTop: "0",
                  }}
                >
                  {errors.password}
                </p>
              }
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row justify-content-md-center">
            <label
              htmlFor="confirmPassword"
              className="col-lg-3 col-form-label"
            >
              Confirm Password:
            </label>
            <div className=" col-lg-6">
              <input
                className="form-control"
                type="text"
                id="confirmPassword"
                onChange={takeConfirm}
                onFocus={handleFocus}
                name="confirmPassword"
                required
              />
              {
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    textAlign: "left",
                    marginTop: "0",
                  }}
                >
                  {errors.confirmPassword}
                </p>
              }
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
