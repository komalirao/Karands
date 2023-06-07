import React from "react";
import ReferalCode from "./ReferalCode";
import "./ReffererDetails.css";
import logo from "../../../assets/logo2.png";
import { useNavigate } from "react-router-dom";



export default function ReffererDetails() {
//   const[referrer,setReferrer] = useState({name : "",role : "",companyName:""})

//  const takeName = (event) =>
//  {
//  console.log(referrer)
//  setReferrer((prevState)=>({...prevState ,name : event.target.value}))
//  }
//  const takeRole = (event) =>
//  {

//  setReferrer((prevState)=>({...prevState ,role : event.target.value}))
//  }
//  const takeCompanyName = (event) =>
//  {

//  setReferrer((prevState)=>({...prevState ,companyName : event.target.value}))
//  }

//  const openreferrer = () =>
//  {
//    referrerApi(referrer)

//  }
const navigate = useNavigate();

 function btnClick(){
  navigate('/Pricing');
 }



  return (
    <div>
    
      <ReferalCode />
      <div className="container mt-4">
        <div className=" mt-5">
          <div className="form p-4 mt-4">
            <div>
              <img src={logo} alt="img"/>
            </div>
            <div>
              <dl>
                <dt className="mb-2" >
                  <h6 >Komali Rao</h6>
                </dt>
                <dt className="mb-2">
                  <h6 >Web Developer</h6>
                </dt>
                <dt className="mb-2">
                  <h6 >Karands Bsns. Solution</h6>
                </dt>
              </dl>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="check mt-3">
        Confirm   <input className="ms-2" type="checkbox" />
      <button className="btn btn-primary ms-4"  onClick={btnClick}>Submit</button>
      </div>
    </div>
  );
}
