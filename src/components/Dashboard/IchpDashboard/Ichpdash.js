import React from 'react'
import ICHPDashboard from '../ICHPDashboard'
import PostFeeds from './PostFeed'
import TopJob from './TopJobs'
import TopUser from './TopUser'
import './Ichpdash.css';
import Userlist from '../../List/Userlist'

export default function Ichpdash() {
    return (
        <div>
            <ICHPDashboard />


            <div className='ichp'>


                <div>
                    <PostFeeds />
                </div>
                <div >
                    <TopUser />
                </div>


            </div>
            <div className='ichptwo'>
               
                <div >
                    <TopJob />
                </div>

            </div>


        </div>
    )
}
