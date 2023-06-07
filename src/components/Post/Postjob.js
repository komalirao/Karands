import React from 'react'
import ICHPDashboard from '../Dashboard/ICHPDashboard'

function Postjob(){
    return(
        <div>
          <ICHPDashboard/>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
        Post Job
      </button>
     



<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Post the Job</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h5 >Title/Description</h5>
      <div class="mb-3 row">
    <label for="staticIndustry" class="col-md-3 col-form-label">Industry</label>
    <div class="col-sm-9">
      <input type="text" readonly class="form-control" id="staticIndustry" value=""/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="functionalArea" class="col-sm-3 col-form-label">Functional Area</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="functionalArea"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputLocation" class="col-sm-3 col-form-label">Location</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="inputLocation"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputSkills" class="col-sm-3 col-form-label">Skills</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="inputSkills"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="employmentType" class="col-sm-3 col-form-label">Employemnt Type</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="employmentType"/>
    </div>
  </div>
<hr/>
  <h5 >Job Description & Requirements</h5>
  
  <div class="mb-3 row">
   
    <div class="col-sm ">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Roles and Responsibilities'></textarea>
    </div>
  </div>
  <div class="mb-3 row">
   
    <div class="col-sm ">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder=' Enter Desired Candidate Profile'></textarea>
    </div>
  </div>
 
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">WFH</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">WFO</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
  <label class="form-check-label" for="inlineCheckbox3">Remote</label>
</div>
<div class="mb-3 row">
    <label for="numberOfvacancy" class="col-sm-3 col-form-label">Number of Vacancies</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="numberofvacancy"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputSalary" class="col-sm-3 col-form-label">Salary</label>
    <div class="col-sm-9">
    <div class="row">
                          <div class="col-md-2">
                            <div class="ui-select" >
                              <select id="symbol" class="form-control" >
                                <option value=""></option>
                                <option value="">Rupee</option>
                                <option value="">Dollar</option>
                                <option value="">Euro</option>

                              </select>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="ui-select" >
                              <select id="lakhs" class="form-control" >
                                <option value="">Lakhs</option>
                                <option value="">1+</option>
                                <option value="">2+</option>
                                <option value="">3+</option>
                                <option value="">4+</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="ui-select"  >
                              <select id="thousands" class="form-control" >
                                <option value="">Thousands</option>
                                <option value="">1+</option>
                                <option value="">2+</option>
                                <option value="">3+</option>
                                <option value="">4+</option>
                              </select>
                            </div>
                          </div>
                         


                        </div>
                        
                       
                      
    </div>
    
  </div>
  <div class="mb-3 row">
    <label for="workExperience" class="col-sm-3 col-form-label">Work Experience</label>
    <div class="col-sm-9">
     <div class="row">
     <div class="col-md-4">
     <div class="ui-select" >
                          <select id="years" class="form-control" >
                            <option value="">Years</option>
                            <option value="">1+</option>
                            <option value="">2+</option>
                            <option value="">3+</option>
                            <option value="">4+</option>
                          </select>
                          </div>
                          </div>
                          <div class="col-md-4">
                          <div class="ui-select"  >
                            <select id="months" class="form-control" >
                              <option value="">Months</option>
                              <option value="">1+</option>
                              <option value="">2+</option>
                              <option value="">3+</option>
                              <option value="">4+</option>
                            </select>

                         
                          </div>

                          </div>
     </div>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="educationalQualification" class="col-sm-3 col-form-label">Educational Qualifications</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="educationalQualification"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="companyDetails" class="col-sm-3 col-form-label">Company Name</label>
    <div class="col-sm-4">
      <input type="text" class="form-control" id="companyDetails" placeholder="Type company name"/>
    </div>
    <div class="col-sm-4">
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Next
  </button>
  
  
</div>
    
  </div>
  <div class="collapse" id="collapseExample">
    
    <div class="card card-body ">
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </div>
    </div>
    <hr/>
    <h5 >Recruiter Details</h5>

    <div class="mb-3 row">
    <label for="inputName" class="col-sm-3 col-form-label">Name</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="inputName"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputEmail" class="col-sm-3 col-form-label">Email</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="inputEmail"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="contactDetails" class="col-sm-3 col-form-label">Contact Details</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="contactDetails"/>
    </div>
  </div>
  

      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <button type="button" class="btn btn-primary">Post Job</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )}

    export default Postjob