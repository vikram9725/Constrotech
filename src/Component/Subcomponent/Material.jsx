import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Css/Material.css";
import ReactSilcSlider from "./ReactSilkSlider";
const Material = () => {

  // import json data

  const [user, setUser] = useState([])
  async function userdata() {
    const a = await axios.get(`./JsonData/dbs.json`)
    if (a.data.length > 0)
      setUser(a.data)
  }
  useEffect(() => {
    userdata();
  }, [])

  // top category start


  // filter Method
  var filterArray = user.filter((element) => element.id >= 13);
  var Allproduct = user.filter((element) => element.id <= 12);

  // top category end
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <ReactSilcSlider />
        </div>
      </div>
      <div className="row grow">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <h1 className="text-danger d-flex justify-content-center font-weight-bold">
            Top categeries
          </h1>
        </div>
      </div>
      {/* card 1 */}
      <div className="row">
        {filterArray.map((e, i) => {
          return (
            <div className="card-desk col-lg-2 col-md-4 col-sm-6" key={i}>
              <img src={e.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title d-flex justify-content-center font-weight-bold">
                  {e.title}
                </h6>
                <NavLink className="btn btn-primary d-flex justify-content-center font-weight-bold" to="/SendInquriryForm">
               
                  SEND INQUIRY
                  </NavLink>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row">
        {/* <MyAllProduct /> */}
        <div className="container">
          <div className="row d-flex justify-content-center mt-1">
            <h1 className="d-flex justify-content-center font-weight-bold text-danger">
              All Product
            </h1>
          </div>
          <div className="row">
            {Allproduct.map((data) => {
              return (
                <div className="card-desk grow col-lg-3 col-md-6">
                  <img
                    src={data.image}
                    className="card-img-top"
                    height="200px" alt=""
                  />
                  <div className="card-body arrow mytextStyle">
                    <h5>{data.title}</h5>
                    <p
                      className="card-text"
                      style={{ fontSize: "14.1px" }}
                    >
                      {data.body}
                    </p>
                    {/* <a
                      href="/"
                      className="btn btn-primary d-flex justify-content-center"
                    >
                      <span>SEND INQUIRY</span>
                    </a> */}
                    <NavLink className="btn btn-primary d-flex justify-content-center font-weight-bold" to="/SendInquriryForm">
               
                  SEND INQUIRY
                  </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
