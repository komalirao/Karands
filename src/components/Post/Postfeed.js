import React from 'react'
import ICHPDashboard from '../Dashboard/ICHPDashboard'

function Postfeed() {
  return (
    <div >
      <ICHPDashboard/>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Post Feed
      </button>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Post Feed</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              <div class="container">

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Title of the Post</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Title" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Write Something Cool!</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div>
                  <div class="btn btn-primary btn-rounded">
                    <label class="form-label text-white m-1" for="customFile1">Choose file</label>
                    <input type="file" class="form-control d-none" id="customFile1" />
                  </div>


                </div>
              </div>

            </div>
            <div class="modal-footer d-flex justify-content-between">
              <button type="button" class="btn btn-primary " >To whom do you want to show</button>
              <button type="button" class="btn btn-primary ">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Postfeed