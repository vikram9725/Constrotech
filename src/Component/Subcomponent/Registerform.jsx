import React from "react";
import { NavLink } from "react-router-dom";

function Registerform() {
  document.title="Register"

  return (
    <div>
      <section>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  className="card"
                  style={{ borderradius: "15px", backgroundColor: "LightGray" }}
                >
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      REGISTER FORM
                    </h2>
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              placeholder="First name"
                              id="firstName"
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>

                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              placeholder="Last name"
                              id="lastName"
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="email"
                              placeholder="Email"
                              id="firstName"
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              placeholder="Password"
                              id="password"
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-outline mb-4">
                          <input
                            type="tel"
                            placeholder="Mobail Number"
                            id="form3Example8"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <select className="select form-control-lg w-100">
                            <option value="0"> Select City</option>
                            <option value="">Pune</option>
                            <option value="">Mumbai</option>
                            <option value="">Latur</option>
                            <option value="">Dillhi</option>
                            <option value="">Kolkta</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-4 ms-1 ">
                        <div className="form-check d-flex">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3cg"
                          />
                          <label className="form-check-label ">
                            I agree all statements in{" "}
                            <a href="#!" className="text-body">
                              <u>Terms of service</u>
                            </a>
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        
                        <NavLink to={"/"}>
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                        </NavLink>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?
                        <NavLink to={"/LoginForm"}>
                          <a href="#!" className="fw-bold text-body">
                            <u>Login here</u>
                          </a>
                        </NavLink>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registerform;
