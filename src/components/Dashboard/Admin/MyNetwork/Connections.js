import React from 'react';
import './connections.css';
import myPic from '../../../../assets/backgroundImage.png'

export default function Connections() {
  return (
    <div className="container-fluid" style={{backgroundColor:'#eee'}}>
<div className="main-body">

      {/*<!-- Breadcrumb -->
      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
          <li className="breadcrumb-item active" aria-current="page">User Grid</li>
        </ol>
      </nav>
      <!-- /Breadcrumb -->
  */}<div className='d-flex flex-start m-2'><h6>No of Connections : 12 </h6></div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{width:"100px", marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" style={{width:'100px', marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar2.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar4.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar5.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon  btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon  btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar2.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar4.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar5.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card">
            <img src={myPic} alt="Cover" className="card-img-top"/>
            <div className="card-body text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
              <h5 className="card-title">John Doe</h5>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-light btn-sm bg-light has-icon btn-block" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
