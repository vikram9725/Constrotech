import React from "react";
import img1 from "../../images/ViewDetails/kunal-group-aspiree-elevation-563476.jpeg";
import img2 from "../../images/ViewDetails/5min.dcf63708.png";
import img3 from "../../images/ViewDetails/download.jpg";
// import img4 from '../imagebuilder/images (1).png'

import "../../Css/Viewdetails.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// import viewdetails from "../../ViewDetails.json";

//import viewdetails1 from '../viewDetails1.json'
function ViewDetails() {

  // Access json data 
  const [user, setUser] = useState([])
  async function userdata() {
    const a = await axios.get(`./JsonData/Flat.json`)
    if (a.data.length > 0)
      setUser(a.data)
  }
  useEffect(() => {
    userdata();
  }, [])

  // Filter Json data

  let a = user.filter((e) => e.id <= 8);

  let b = user.filter((e) => e.id >= 9);

  return (
    <div>
      {/* first card */}
      <div className="card" style={{ width: "1480px", height: "800px" }}>
        <div className="card-body">
          <div class="row">
            <div class="col-md-12 text center">
              <div class="section-title">
                <div class="row project">
                  <div class="col-md-8 col-lg-6">
                    <div class="single-project">
                      <img
                        src={img1}
                        style={{
                          marginTop: "30px",
                          marginLeft: "100px",
                          width: "800px",
                          height: "500px",
                        }}
                        alt=""
                      ></img>
                    </div>
                    <br></br>

                    <div style={{ marginLeft: "120px" }}>
                      <h3>Kunal Aspiree<i class="bi bi-heart"></i></h3>
                      <h5>by Kunal Group</h5>
                      <br></br>
                      <div
                        className="d-flex justify-content-between"
                      >
                        <div>
                          <h6 className>2,3 BHK</h6>
                          <p>Apartment</p>
                        </div>
                        <div>
                          <h6 className>1,225 - 1,790 sq ft</h6>
                          <p>
                            Builtup area <i class="bi bi-info-circle"></i>
                          </p>
                        </div>
                        <div>
                          <h6 className>Price on request</h6>
                          <p>Builder Price</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* second card */}
                  <div class="col-md-4 col-lg-6">
                    <div class="single-project">
                      <div
                        className="card"
                        style={{
                          width: "24rem",
                          height: "27rem",
                          marginLeft: "250px",
                          marginTop: "30px",
                        }}
                      >
                        <div className="card-body">
                          <div
                            class="ta-center lead-title-bg"
                            style={{ backgroundColor: "indigo" }}
                          >
                            <span
                              class="light-color"
                              style={{ color: "white" }}
                            >
                              Interested to buy property in
                              <h1 style={{ color: "white" }}>
                                {" "}
                                Kunal Aspiree ?
                              </h1>
                            </span>
                          </div>

                          <form>
                            <div class="form-name">
                              <input
                                data-required="false"
                                data-name
                                type="text"
                                placeholder="Name"
                                name="lead_name"
                                class="form-Control"
                              ></input>
                              <span
                                data-required="Name is required"
                                data-invalid="Name is invalid"
                                class="error-info"
                              ></span>
                            </div>

                            <div class="form-name">
                              <input
                                data-required="false"
                                data-name
                                type="text"
                                placeholder="Phone Number"
                                name="lead_name"
                                class="form-Control"
                              ></input>
                              <span
                                data-required="mobile No. is required"
                                data-invalid="Mobile No. is invalid"
                                class="error-info"
                              ></span>
                            </div>

                            <div class="input-group mb-2">
                              <div class="input-group-prepend">
                                <div 
                                  class="input-group-text"
                                  style={{ width: "30px", height: "20px" }}
                                >
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  <p>
                                    I agree to be contacted by Proptiger
                                    <br></br> via WhatsApp, SMS, Phone, Email
                                    etc.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              class="btn btn-warning"
                              style={{
                                width: "300px",
                                height: "40px",
                                fontSize: "20px",
                                marginLeft: "40px",
                              }}
                            >
                              {" "}
                              Get Call Back
                            </button>

                            <div class="row">
                              <div class="col-md-12 text center">
                                <div class="row project">
                                  <div class="col-md-4 col-lg-3">
                                    <div class="single-project">
                                      <img
                                        src={img2}
                                        style={{
                                          width: "60px",
                                          heigh: "50px",
                                          marginTop: "25px",
                                        }}
                                        alt=""
                                      ></img>
                                    </div>
                                  </div>

                                  <div class="col-md-4 col-lg-8">
                                    <p style={{ marginTop: "25px" }}>
                                      <b style={{ fontSize: "18px" }}>
                                        Assured Callback in 5 mins{" "}
                                      </b>
                                      <br></br> Get an assured callback in 5
                                      mins from sales expert (9 AM - 6 PM IST)
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                      {/* third card */}
                      <div
                        className="card"
                        style={{
                          width: "24rem",
                          height: "15rem",
                          marginLeft: "250px",
                          marginTop: "90px",
                        }}
                      >
                        <div
                          style={{
                            width: "400px",
                            height: "400px",
                            marginLeft: "140px",
                          }}
                        >
                          <img src={img3} alt=""></img>
                        </div>
                        <p style={{ marginLeft: "90px" }}>
                          Contact Helpdesk on
                          <br></br>Whatsapp(Chat Only)
                          <br></br>
                          <br></br>
                          <h2 style={{ color: "orange" }}> +91-96939-69347</h2>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex"
        style={{ marginLeft: "250px", marginBottom: "0px" }}
      >
        <p className="p-5">Overview</p>
        <p className="p-5">Floor Plan</p>
        <p className="p-5">Amenities</p>
        <p className="p-5">Gallery</p>
        <p className="p-5">Home Loan</p>
      </div>

      {/* fourth card */}
      <div className="card" style={{ width: "1500px", height: "2000px" }}>
        <div className="card-body">
          {/* Overview start */}
          <div style={{ marginLeft: "120px" }}>
            <h5>Overview</h5>
            <br></br>

            <div className="d-flex mb-1">
              <div className="p-5 ">
                <h6>Jun'22</h6>
                <p>Possession Start Date</p>
              </div>
              <div className="p-5 ">
                <h6 className>Completed</h6>
                <p>Status</p>
              </div>
              <div className="p-5">
                <h6 className>10 Acres</h6>
                <p>Total Area</p>
              </div>
            </div>

            <div className="d-flex ">
              <div className="p-5 py-1 ">
                <h6>Jun'17</h6>
                <p>Launch Date</p>
              </div>
              <div className="p-5 py-1" style={{ marginLeft: "70px" }}>
                <h6 className>Resale</h6>
                <p>Availability</p>
              </div>
            </div>
          </div>
          {/* Overview end */}
          <hr color="grey" />

          {/* Salient Features start */}
          <div style={{ marginLeft: "120px" }}>
            <h5>Salient Features</h5>
            <ul>
              <i
                class="bi bi-check-lg"
                style={{ color: "orange", fontSize: "20px" }}
              ></i>{" "}
              &nbsp;&nbsp;Connected via the 60 ft. and 100 ft. wide Development
              Plan roads
              <br></br>{" "}
              <i
                class="bi bi-check-lg"
                style={{ color: "orange", fontSize: "20px" }}
              ></i>
              &nbsp;&nbsp;Just off Pune-Bengaluru Highway
              <br></br>{" "}
              <i
                class="bi bi-check-lg"
                style={{ color: "orange", fontSize: "20px" }}
              ></i>
              &nbsp;&nbsp;Close to Hinjewadi IT Park, PCMC Industrial Estate &
              Chakan Auto Hub
              <br></br>{" "}
              <i
                class="bi bi-check-lg"
                style={{ color: "orange", fontSize: "20px" }}
              ></i>
              &nbsp;&nbsp;Separate covered pool for ladies
              <br></br>{" "}
              <i
                class="bi bi-check-lg"
                style={{ color: "orange", fontSize: "20px" }}
              ></i>
              &nbsp;&nbsp; Special areas demarcated for senior citizens, both at
              ground level as well as on the terraces.
            </ul>

            <br></br>

            <h5>More about Kunal Aspiree</h5>
            <p>
              Kunal Aspiree is registered in RERA under new projects as follows
              -P52100001814(Kunal Aspiree Phase<br></br>
              II), P52100002540(Kunal Aspiree Phase III).unal Aspiree is a
              brilliant testimony to the optimal and multiple<br></br>
              utilization of space – both indoor and outdoors. A clubhouse that
              acts as an informal gupshup lounge;<br></br>
              sitouts that transform into conversation hubs; a barbeque corner
              that can also host small parties – the<br></br>
              outdoor spaces at Kunal Aspiree are designed as terrific
              multi-taskers. And when it comes to your home, <br></br>the
              applied intelligence of design is even more obvious. Every little
              thing has been thought of – utility, <br></br>storage, style,
              luxury, comfort, indulgence, ventilation, light and most
              importantly, your happiness!
            </p>

            <b>Approved for Home loans from following banks</b>
            <br></br>
            <br></br>
            <div class="row">
              <div class="col-md-10 text center">
                <div class="row ">
                  {b.map((e) => {
                    return (
                      <div class="col-md-4 col-lg-2">
                        <div class="single-project">
                          <img src={e.image} alt=""></img>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="d-flex  mt-5 mp-5">
              <h5>Kunal Aspiree Amenities</h5>
              <h1 className="p-4 ml-2">
                <i class="bi bi-cloud-sun-fill"></i>
                <p style={{ fontSize: "10px" }}>
                  Rain Water<br></br> Harvesting
                </p>
              </h1>
              <h1 className="p-4 ml-2">
                <i class="bi bi-telephone"></i>
                <p style={{ fontSize: "10px" }}>Intercom</p>
              </h1>
              <h1 className="p-4">
                <i class="bi bi-info-circle"></i>
                <p style={{ fontSize: "10px" }}>Terrace Garden</p>
              </h1>
              <h1 className="p-4">
                <i class="bi bi-info-circle"></i>
                <p style={{ fontSize: "10px" }}>Security Cabin</p>
              </h1>
            </div>
            <div className="d-flex" style={{ marginLeft: "200px" }}>
              <h1 className="p-4 ml-2">
                <i class="bi bi-info-circle"></i>
                <p style={{ fontSize: "10px" }}>Chess Board</p>
              </h1>
              <h1 className="p-4 ml-2">
                <i class="bi bi-shop"></i>
                <p style={{ fontSize: "10px" }}>Shopping Mall</p>
              </h1>
              <h1 className="p-4 ml-2">
                <i class="bi bi-yin-yang"></i>
                <p style={{ fontSize: "10px" }}>Vaastu Compliant</p>
              </h1>
              <h1 className="p-4 ml-2">
                <i class="bi bi-car-front-fill"></i>
                <p style={{ fontSize: "10px" }}>Car Parking</p>
              </h1>
            </div>
            {/* Kunal Aspiree Amenities end */}

            <div className="d-flex mt-5">
              <h5>Gallery</h5>

              <ul class="nav nav-tabs nav-justified mt-5">
                <li className="p-5">Elevation </li>

                <li className="p-5">
                  <a href="./Amenities.jsx">Amenities</a>
                </li>
                <li className="p-5">
                  <a href="/">Floor Plans</a>
                </li>
                <li className="p-5">
                  <a href="/">Neighbourhood</a>
                </li>
                <li className="p-5">
                  <a href="/">Others</a>
                </li>
                <hr color="grey" />
              </ul>
            </div>

            <div class="row">
              <div class="col-md-12 text center">
                <div className="row d-flex mt-3">
                  {a.map((i) => {
                    return (
                      <div class="col-md-4 col-lg-3">
                        <div class="single-project">
                          <img
                            src={i.image}
                            style={{
                              marginLeft: "30px",
                              width: "300px",
                              height: "200px",
                            }}
                            alt=""
                          ></img>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <br></br>
    </div>
  );
}

export default ViewDetails;
