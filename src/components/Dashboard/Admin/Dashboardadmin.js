import React from 'react'
import AdminDashboard from '../AdminDashboard';
import './Dashboardadmin.css';

function Dashboardadmin() {
    return (
        <div>
            <AdminDashboard />
            <div className='background'>

                <div className='box'>
                    <div className='users'>
                        <h4>
                            Number of users
                        </h4>
                        <h6>1000 + users</h6>

                    </div>
                    <div className='users' >
                        <h4>Number of jobs</h4>
                        <h6>1000 + users</h6>
                    </div>
                    <div className='users'>
                        <h4>
                            Number of post feed
                        </h4>
                        <h6>500 + posts</h6>
                    </div>
                    <div className='users'>
                        <h4>
                            Number of user online
                        </h4>
                        <h6>2000+  users </h6>
                    </div>
                    <div className='users'>
                        <h4>
                            Number of subscriptions
                        </h4>
                        <h6>5000 + suscribed</h6>
                    </div>
                    <div className='users'>
                        <h4>
                            Renewal
                        </h4>
                        <h6>700 + users renewed</h6>

                    </div>

                </div>


            </div>

        </div>


    )
}
export default Dashboardadmin;
