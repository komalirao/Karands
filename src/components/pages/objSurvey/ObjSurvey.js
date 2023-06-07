import React, { useState, useEffect  }  from "react";
import Header from "./Header";

export default function ObjSurvey() {
  
  const [color, setColor] = useState(null);
  const [isChecked, setIsChecked] = useState(null);

  function handleChange(event) {
    setColor(event.target.value);
    setIsChecked(true);
  }

  function handleClick() {
    if (isChecked) {
      setColor(null);
      setIsChecked(false);
      document.querySelector('input[name="reasone"]:checked').checked = false;
    }
  }
  useEffect(() => {
    setColor(null);
    setIsChecked(false);
  }, []);
 

  return (
    <div>
    <Header/>
      <h3 className="mt-4">You are here for ?</h3>
      <div className="row container-fluid">
        <div className="col-3"></div>
        <div className="col-3"
        >
          <div className="mt-4">
          
            <lable>Looking for Job  <input type="radio" name="reasone" id="SearchJob" value="red" checked={color === "red"} onChange={handleChange}/>
            </lable>
          </div>
          <div className="mt-4">
            <lable>
              Looking to build Network <input type="radio" name="connection" />
            </lable>
          </div>
          <div className="mt-4">
            <lable>
              Mentoring others <input type="radio" name="relation" />
            </lable>
          </div>
          <div className="mt-4">
            <lable>
              looking for investments <input type="radio" name="savings" />
            </lable>
          </div>
          <div className="mt-4">
            <lable>
              Advertise <input type="radio" name="marketing" />
            </lable>
          </div>
        </div>
        <div className="col-3">
          <div className="mt-4">
            <lable>
              Looking to hire <input type="radio" name="reasone" id="hiring" value="green" checked={color === "green"} onChange={handleChange}/>
            </lable>
          </div>
          <div className="mt-4">
            <lable>
              Looking to Collaborate <input type="radio" name="connection" />
            </lable>
          </div>
          <div className="mt-4">
            <lable>
              Seeking Mentorship <input type="radio" name="relation" />
            </lable>
          </div>
          <div className="mt-4">
            <lable>
              Looking to invest <input type="radio" name="savings" />
            </lable>
          </div>
          <div className="mt-4">
            <lable>
              Affiliate <input type="radio" name="marketing" />
            </lable>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
      
          <div>
        <button className=" mt-4" onClick={handleClick} style={{ backgroundColor: isChecked ? "blue" : "white" }} >
        {isChecked ? "Submit" : "click"}
        </button>
      </div>
    </div>
  );
}
