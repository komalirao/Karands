import React from "react";
import Header from "../../pages/objSurvey/Header";

export default function BecomeIchp() {
  return (
    <div>
    <Header/>
      <div className="container">
      <div className="side-bar" style={{width:'300px'}}>
        <div class="shadow p-3 mt-5 bg-body rounded">
          <div>
            <div className="d-flex">
              <h6>Want to become ICHP</h6>
            </div>

            <hr />
            <div className="mt-2">
              <div class="job-info">
                <div
                  class="job-details d-flex mt-3"
            style={{display:'flex', textAlign:'start'}}
                >
                 

                  <div class="sgt-text">
                <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply.</p>
                  </div>
                  
                </div>
              </div>
             
            
            </div>
            <div>
            <button className="btn btn-primary">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
