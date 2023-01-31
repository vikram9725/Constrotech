import React, { useState } from "react";
import "../Css/Project.css";
import bdata from "../Building.json";
import { Navbar1 } from "./Subcomponent/Navbar";
import Footer from "./Subcomponent/Footer";
function Project() {
document.title="Project"

  let data = bdata;
  return (
    <>
      <Navbar1 />
      <div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active bgimg ">
              <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                Constrotech Project
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-md-12 text center">
            <div className="section-title">
              <h3 style={{ textAlign: "center" }}>Our Recent Work</h3>
              <h5 style={{ textAlign: "center" }}>
                We Completed it with quality and passion
              </h5>
              <br></br>
              <div className="row ">
                {data.map((data, i) => {
                    return (
                      <div key={i} className="col-md-4 col-lg-3  mb-3 bcard">
                        <div className="single-project">
                          <img id="imgtag" src={data.images} height="300px" width="280px" alt=""></img>
                          <div>
                            <h5>{data.title}</h5>
                            <b>City:{data.city}</b>
                            <p>{data.description}</p>
                          </div>
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
      <Footer />
    </>
  );
}
export default Project;
