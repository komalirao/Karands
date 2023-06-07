import React from 'react'
import ICHPDashboard from '../Dashboard/ICHPDashboard'
//import ICHPDashedit from '../Dashboard/ICHPDashedit'
import Profilepreview from '../Profile/Profilepreview'
import Joblist from './Joblist'
import Userlist from './Userlist'

export default function List() {
  return (
    <div>
        <ICHPDashboard/>
        <Joblist/>
        <Userlist/>
        <Profilepreview/>
      
    </div>
  )
}
