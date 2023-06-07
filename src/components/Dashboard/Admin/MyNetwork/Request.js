import React from 'react';
import myPic from '../../../../assets/backgroundImage.png'


export default function Request() {
  return (
    <div className='container-fluid' style={{backgroundColor:'#eee'}}>
    <div className="main-body">
    <div className='d-flex flex-start m-2'><h6>No of pending connections : 10 </h6></div>
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
              <button className="btn btn-primary btn-sm bg-light btn-block m-1 text-primary" type="button">Withdrawal</button>
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
            <button className="btn btn-primary btn-sm bg-light btn-block m-1 text-primary" type="button">Withdrawal</button>
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
            <button className="btn btn-primary btn-sm bg-light btn-block m-1 text-primary" type="button">Withdrawal</button>
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
          <button className="btn btn-primary btn-sm bg-light btn-block m-1 text-primary" type="button">Withdrawal</button>
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
        <button className="btn btn-primary btn-sm bg-light btn-block m-1 text-primary" type="button">Withdrawal</button>
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
      <button className="btn btn-primary btn-sm bg-light btn-block m-1 text-primary" type="button">Withdrawal</button>
      </div>
    </div>
  </div>
  <div className="col mb-3">
  <div className="card">
    <img src={myPic} alt="Cover" className="card-img-top"/>
    <div className="card-body text-center">
      <img src="https://bootdey.com/img/Content/avatar/avatar6.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
      <h5 className="card-title">John Doe</h5>
      <p className="text-secondary mb-1">Full Stack Developer</p>
      <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
    </div>
    <div className="card-footer">
    <button className="btn btn-primary btn-sm bg-light btn-block m-1 text-primary" type="button">Withdrawal</button>
    </div>
  </div>
</div>
<div className="col mb-3">
<div className="card">
  <img src={myPic} alt="Cover" className="card-img-top"/>
  <div className="card-body text-center">
    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
    <h5 className="card-title">John Doe</h5>
    <p className="text-secondary mb-1">Full Stack Developer</p>
    <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
  </div>
  <div className="card-footer">
  <button className="btn btn-primary btn-sm bg-light btn-block m-1 text-primary" type="button">Withdrawal</button>
  </div>
</div>
</div>
<div className="col mb-3">
<div className="card">
  <img src={myPic} alt="Cover" className="card-img-top"/>
  <div className="card-body text-center">
    <img src="https://bootdey.com/img/Content/avatar/avatar8.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
    <h5 className="card-title">John Doe</h5>
    <p className="text-secondary mb-1">Full Stack Developer</p>
    <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
  </div>
  <div className="card-footer">
  <button className="btn btn-primary btn-sm bg-light btn-block m-1 text-primary" type="button">Withdrawal</button>
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
  <button className="btn btn-primary btn-sm bg-light btn-block m-1 text-primary" type="button">Withdrawal</button>
  </div>
</div>
</div>
      </div>
    </div>
    </div>
  )
}
