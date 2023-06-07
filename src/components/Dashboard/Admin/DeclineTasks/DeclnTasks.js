import React from 'react';
import DecAffliAdd from './DecAffliAdd';
import DeclnBgv from './DeclnBgv';
import DeclDrvin from './DeclDrvin';
import DecRefBonus from './DecRefBonus';

export default function DeclnTasks() {
  return (
    <div>
    <div className='d-flex text-start ms-2'><h2>Declined</h2></div>
    <div className=" post-feeds">
      <div>
        <div className="container-xl container-lg">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col col-lg-12 mb-4 mb-lg-0">
                  <nav>
                    <div
                      className="nav nav-tabs"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-bgv"
                        type="button"
                        role="tab"
                        aria-controls="nav-bgv"
                        aria-selected="true"
                      >
                        Background vevification
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-dis"
                        type="button"
                        role="tab"
                        aria-controls="nav-dis"
                        aria-selected="false"
                      >
                       Drive in Support
                      </button>
                      <button
                      className="nav-link"
                      id="nav-refb-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-refb"
                      type="button"
                      role="tab"
                      aria-controls="nav-refb"
                      aria-selected="false"
                    >
                     Refferal bonus
                    </button>
                    <button
                    className="nav-link"
                    id="nav-aff-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-aff"
                    type="button"
                    role="tab"
                    aria-controls="nav-aff"
                    aria-selected="false"
                  >
                  Affiliate adds
                  </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-bgv"
                      role="tabpanel"
                      aria-labelledby="nav-bgv-tab"
                    >
                  <DeclnBgv/>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-dis"
                      role="tabpanel"
                      aria-labelledby="nav-dis-tab"
                    >
                    <DeclDrvin/>
                    </div>

                    <div
                    className="tab-pane fade show "
                    id="nav-refb"
                    role="tabpanel"
                    aria-labelledby="nav-refb-tab"
                  >
                  <DecRefBonus/>
                  </div>
                  <div
                  className="tab-pane fade show "
                  id="nav-aff"
                  role="tabpanel"
                  aria-labelledby="nav-aff-tab"
                >
               <DecAffliAdd/>
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
