import React from 'react';
import ShortListed from './ShortListed';
import PostFeeds from './PostFeed';
import TopUser from './TopUser'

export default function MyJobs() {
  return (
    <div className='container-fluid'>
    <div className='row'>

    <div className='col-4 ScrollStyle'>
    <h2>Jobs Match your Profile</h2>
    <div className="post-feeds">
            <div className="d-flex" style={{justifyContent:'space-between'}}>
             <div> <h4>Frontend Developer</h4></div>
             <div>
             <button className="btn btn-outline-secondary btn-sm me-1">
             <span className="bi bi-share"></span>
           </button>
           <button className="btn btn-outline-secondary btn-sm">
                   <span className="bi bi-three-dots-vertical"></span>
                 </button>
                 </div>
            </div>
            <div className="d-flex mt-2">
              Karands business Solutions | &#8377;25000-&#8377;45000 | Madhapur,
              Hydrabad
            </div>
            <div className="d-flex mt-3">
              Skills : HTML, CSS, JavaScript, NodeJS
            </div>
            <div
              className="d-flex mt-3"
              style={{ display: "flex", textAlign: "start" }}
            >
             { /*<p>
                <b>Job description :</b>Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
             </p>*/}
            </div>
            <div className="d-flex mt-3"  style={{justifyContent:'space-around'}}>
             <span className='btn btn-primary'>save</span>
             
             
              <button className="btn btn-success">View</button>
            </div>
          </div>
          <div className="post-feeds">
          <div className="d-flex" style={{justifyContent:'space-between'}}>
           <div> <h4>Frontend Developer</h4></div>
           <div>
           <button className="btn btn-outline-secondary btn-sm me-1">
           <span className="bi bi-share"></span>
         </button>
         <button className="btn btn-outline-secondary btn-sm">
                 <span className="bi bi-three-dots-vertical"></span>
               </button>
               </div>
          </div>
          <div className="d-flex mt-2">
            Karands business Solutions | &#8377;25000-&#8377;45000 | Madhapur,
            Hydrabad
          </div>
          <div className="d-flex mt-3">
            Skills : HTML, CSS, JavaScript, NodeJS
          </div>
          <div
            className="d-flex mt-3"
            style={{ display: "flex", textAlign: "start" }}
          >
           { /*<p>
              <b>Job description :</b>Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
           </p>*/}
          </div>
          <div className="d-flex mt-3"  style={{justifyContent:'space-around'}}>
           <span className='btn btn-primary'>save</span>
           
           
            <button className="btn btn-success">View</button>
          </div>
        </div>
        <div className="post-feeds">
        <div className="d-flex" style={{justifyContent:'space-between'}}>
         <div> <h4>Frontend Developer</h4></div>
         <div>
         <button className="btn btn-outline-secondary btn-sm me-1">
         <span className="bi bi-share"></span>
       </button>
       <button className="btn btn-outline-secondary btn-sm">
               <span className="bi bi-three-dots-vertical"></span>
             </button>
             </div>
        </div>
        <div className="d-flex mt-2">
          Karands business Solutions | &#8377;25000-&#8377;45000 | Madhapur,
          Hydrabad
        </div>
        <div className="d-flex mt-3">
          Skills : HTML, CSS, JavaScript, NodeJS
        </div>
        <div
          className="d-flex mt-3"
          style={{ display: "flex", textAlign: "start" }}
        >
         { /*<p>
            <b>Job description :</b>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
         </p>*/}
        </div>
        <div className="d-flex mt-3"  style={{justifyContent:'space-around'}}>
         <span className='btn btn-primary'>save</span>
         
         
          <button className="btn btn-success">View</button>
        </div>
      </div>
      <div className="post-feeds">
      <div className="d-flex" style={{justifyContent:'space-between'}}>
       <div style={{position:'sticky',}}>
        <h4>Frontend Developer</h4>
        </div>
       <div>
       <button className="btn btn-outline-secondary btn-sm me-1">
       <span className="bi bi-share"></span>
     </button>
     <button className="btn btn-outline-secondary btn-sm">
             <span className="bi bi-three-dots-vertical"></span>
           </button>
           </div>
      </div>
      <div className="d-flex mt-2">
        Karands business Solutions | &#8377;25000-&#8377;45000 | Madhapur,
        Hydrabad
      </div>
      <div className="d-flex mt-3">
        Skills : HTML, CSS, JavaScript, NodeJS
      </div>
      <div
        className="d-flex mt-3"
        style={{ display: "flex", textAlign: "start" }}
      >
       { /*<p>
          <b>Job description :</b>Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.
       </p>*/}
      </div>
      <div className="d-flex mt-3"  style={{justifyContent:'space-around'}}>
       <span className='btn btn-primary'>save</span>
       
       
        <button className="btn btn-success">View</button>
      </div>
    </div>
    </div>
    <div className='col-8'>
    <div>
    <div>
    <div className="container-xl container-lg">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col col-lg-12 mb-4 mb-lg-0">
                      <nav>
                          <div className="nav nav-tabs" id="nav-tab" role="tablist">
                           <button className="nav-link active" id="nav-viewed-tab" data-bs-toggle="tab" data-bs-target="#nav-viewed" type="button" role="tab" aria-controls="nav-viewed" aria-selected="true">Viewed</button>
                           <button className="nav-link" id="nav-applied-tab" data-bs-toggle="tab" data-bs-target="#nav-applied" type="button" role="tab" aria-controls="nav-applied" aria-selected="false">Applied</button>
                           <button className="nav-link" id="nav-shared-tab" data-bs-toggle="tab" data-bs-target="#nav-shared" type="button" role="tab" aria-controls="nav-shared" aria-selected="false">Shared</button>
                           <button className="nav-link" id="nav-saved-tab" data-bs-toggle="tab" data-bs-target="#nav-saved" type="button" role="tab" aria-controls="nav-saved" aria-selected="false">Saved</button>
                           </div>
                      </nav>
                       <div className="tab-content" id="nav-tabContent">
                          <div className="tab-pane fade show active" id="nav-viewed" role="tabpanel" aria-labelledby="nav-viewed-tab">
                          <ShortListed/>
                          </div>
                          <div className="tab-pane fade" id="nav-applied" role="tabpanel" aria-labelledby="nav-applied-tab">
                          <ShortListed/>
                          </div>
                          <div className="tab-pane fade" id="nav-shared" role="tabpanel" aria-labelledby="nav-shared-tab">
                         <PostFeeds/>
                          </div>
                          <div className="tab-pane fade" id="nav-saved" role="tabpanel" aria-labelledby="nav-saved-tab">
                          <TopUser/>
                          </div>
                          
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
    </div>
    </div>
    </div>
  )
}
