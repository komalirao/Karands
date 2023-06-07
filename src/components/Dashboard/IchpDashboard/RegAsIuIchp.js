import React from 'react'
//import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Header from '../../pages/objSurvey/Header';
import { useNavigate } from "react-router-dom";

export default function RegAsIuIchp() {
  const navigate = useNavigate();

  const btnClick = () => {
    navigate("/ichpuser")
  }
    const handleRadioChange = () =>{
        // Get the selected radio button
        const selectedRadio = document.querySelector('input[name="options"]:checked');
      
        // Do something with the selected radio button
        console.log('Selected radio value:', selectedRadio.value);
      }
      
  return (
    <div>
    <Header/>
    <div className='container-fluid'>
    <div className="row">
        <div className="col-2">
        </div>
        <div className="col-8">
          <p className="bg-primary text-light p-2" style={{width:'630px', marginLeft:"105px"}}> <b>Registering as IU or ICHP</b></p>
        </div>
        <div className="col-2"></div>
      </div>
    <div className="row">
<div className='col-3'></div>
<div className='col-6 d-flex'>

<div className="col-sm-6 mt-3" style={{border:'1px solid grey', borderRadius:'15px', paddingTop:'10px'}}>
<div className="cards" >
  <div className="cards-body">
    <h5 className="cards-title">Individual User</h5>
    <p className="cards-text"></p>
    <div>
    <ul className='mt-3' >
    <li className='mt-3'>Build your<b> Web Profile</b></li>
    <li className='mt-3'> Search jobs </li>
    <li className='mt-3'> Get Verified </li>
    <li className='mt-3'>Earn via <b>Refferal</b> </li>
    <li className='mt-3'>Build network</li>
    <li className='mt-3'> Become affiliate</li>
    </ul>
    </div>
    <input type="radio" className="btn-check" name="options" id="option1" value="option1" onChange={handleRadioChange} autoComplete="off" />
    <label className="btn btn-outline-primary" htmlFor="option1">Select</label></div>
</div>
</div>
<div className="col-sm-6 mt-3 ms-3" style={{border:'1px solid grey', borderRadius:'15px', paddingTop:'10px'}}>
<div className="cards">
  <div className="cards-body">
    <h5 className="cards-title">ICHP User</h5>
    <p className="cards-text"></p>
    <div>
    <ul className='mt-3' >
    <li className='mt-3'> Post unlimited Jobs</li>
    <li className='mt-3'> Earn via <b>BGV, Drive Support,Refferal</b></li>
    <li className='mt-3'> Become Affiliate</li>
    <li className='mt-3'> Support Other <b>HR's </b>to earn<b> passive income</b></li>
    <li className='mt-3'> Make your occupation a <b>Business</b></li>
    </ul>
    </div>
    <input type="radio" className="btn-check" name="options" id="option2" value="option2" onChange={handleRadioChange} autoComplete="off" />
<label className="btn btn-outline-primary" htmlFor="option2">Select</label></div>
</div>
</div>
</div>
<div className='col-3'></div>
<div className="row">
        <div className="col-2">
        </div>
        <div className="col-8">
            <button className='btn btn-primary col-4 ms-4 mt-4' onClick={btnClick}>Next</button>
        </div>
        <div className="col-2"></div>
      </div>
<div className='col-2'></div>
</div>
    </div>
    </div>
  )
}
