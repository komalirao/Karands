import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { referralCodeApi } from '../../../services/UserService'
import Header from './Header'

export default function ReferalCode() {
 const[referralcode,setReferralCode] = useState({referralCode : ""})

 const takeReferralCode = (event) =>
 {
 console.log(referralcode)
 setReferralCode((prevState)=>({...prevState ,referralCode : event.target.value}))
 }



    const navigate = useNavigate()
    function btnClick(){
      referralCodeApi(referralcode)
        navigate('/ReffererDetails')

    }
  return (
    <div>
      <Header/>
 
<div className='row'>
<div className='col-4'></div>
<div className='col-4'>
<div>
<dl>
<dt><label className='mt-3'><h2>Enter Your Referal Code</h2></label></dt>
<dd className='mt-2 w-100%'><input type="text" className='form-control' placeholder='Referal Code' onChange={takeReferralCode}/></dd>
</dl>
</div>
<div>
<button className='btn btn-primary mt-2' onClick={btnClick}>Add</button>
</div>

</div>

<div className='col-4'></div>

</div>
  
  
  
  
  </div>
    
  )
}
