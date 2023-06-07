import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./pricing.css";

export default function Pricing() {
    const navigate =useNavigate();
    const opendashboard = () =>
    {
        navigate('/ichpdashboard')
    }
    return (
        <div>
            <Header />
            <section className="section" id="pricing">
                <div className="container">
                    <div className="title-box text-center">
                        <h2 className="title-heading mt-4 text-primary">Pricing Plan </h2>
                    </div>

                    <div className="pt-2">
                        <div className="pricing-box mt-4">
                            <h4 className="f-20">Annual Package</h4>

                            <div className="mt-4 pt-2">
                                <p className="mb-2">
                                    <i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                    <b className="me-2">Unlimited</b>
                                    Job Posts
                                </p>
                                <p className="mb-2">
                                    <i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                    <b>1&nbsp;</b>
                                    Year access
                                </p>
                                <p className="mb-2">
                                    <i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                    Referal Earning
                                </p>
                                <p className="mb-2">
                                    <i className="mdi mdi-checkbox-marked-circle text-success f-18 mr-2"></i>
                                    Access to Affiliating and Addvertising
                                </p>
                            </div>
                            <div className="pricing-plan mt-4 pt-2">
                                <h4 className="text-muted">
                                    <span className="plan text-dark">&#8377; 1000</span>
                                </h4>
                                <p className="text-muted mb-0">Per Year</p>
                            </div>

                            <div className="mt-2 pt-2">
                                <a href="/" className="btn btn-primary btn-rounded"  onClick={opendashboard}>
                                    Purchase Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
