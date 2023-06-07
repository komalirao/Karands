import React from "react";
import Header from "../../pages/objSurvey/Header";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function IchpUser() {
  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const handleChang = (event) => {
    setMonth(event.target.value);
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <p className="bg-primary text-light p-2">
            {" "}
            <b>ICHP User</b>
          </p>
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row mt-1">
        <div className="col-4"></div>

        <div className="col-4"></div>
      </div>
      <div className="row mt-1">
        <div className="col-4"></div>

        <div className="col-4">
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="HR/Recruiter title only"
              aria-label="First name"
            />
          </div>
          <div className=" mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Industry"
              aria-label="First name"
            />
          </div>
          <div className=" mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              aria-label="First name"
            />
          </div>
          <div className=" mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Skills"
              aria-label="First name"
            />
          </div>
          <div>
            <label className="mt-4">Work Experience</label>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                year
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={year}
                onChange={handleChange}
                label="years"
              >
                <MenuItem value="">
                  <em>Years</em>
                </MenuItem>
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>10+</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                months
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={month}
                onChange={handleChang}
                label="months"
              >
                <MenuItem value="">
                  <em>months</em>
                </MenuItem>
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
              </Select>
            </FormControl>
          </div>
            <div className="mt-4" style={{display:'flex',justifyContent:'flex-end'}}>
            <button className="btn btn-primary">Save</button>
            </div>
          <div className="4"></div>
        </div>
      </div>
    </div>
  );
}
