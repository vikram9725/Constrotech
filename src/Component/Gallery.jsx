import React from "react";
import "../Css/Gallery.css";
import jsondata from "../Gallery.json";
import jsongallery1 from "../Gallery1.json";
import jsongallery2 from '../Gallery2.json'
import Footer from "./Subcomponent/Footer";
import { Navbar1 } from "./Subcomponent/Navbar";
function Gallery() {
document.title="Gallery"

  let data = jsondata;
  let data1 = jsongallery1;
  let data2=jsongallery2;
  return (
    <div>
    <Navbar1/>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div className="carousel-item active bgimgg ">
            <h1 className="text1">Our Project Gallery</h1>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div class="row">
            <div class="col-md-12 text center">
              <br></br>
              <div>
                <h4
                  style={{ textAlign: "center", textDecoration: "underline" }}
                >
                  Our Construction Side
                </h4>
              </div>
              <br></br>
              <hr />
              <div className="row d-flex mt-5">
                {data.map((i) => {
                  return (
                    <div className="col-md-4 col-lg-3">
                      <div className="single-project ">
                        <img
                          src={i.image} height="320px" width="300px" alt=""
                        ></img>

                        <div>
                          <strong className="p">{i.title}</strong>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <br></br>
              <hr />
              <div>
                <h4
                  style={{ textAlign: "center", textDecoration: "underline" }}
                >
                  {" "}
                  Available Flat
                </h4>
              </div>
              <br></br>
              <hr />

              <div className="row d-flex mt-5">
                {data1.map((i) => {
                  return (
                    <div className="col-md-4 col-lg-3">
                      <div className="single-project ">
                        <img
                          src={i.image1} height="320px" width="300px" alt=""
                          
                        ></img>

                        <div>
                          <strong className="p">{i.title1}</strong>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>


             <br></br>
              <hr />
              <div>
                <h4 className="text-center text-decoration-none"
                 >
                  Available Bungalow
                </h4>
              </div>
              <br></br>
              <hr />
 
              <div className="row d-flex mt-5">
                {data2.map((i) => {
                  return (
                    <div className="col-md-4 col-lg-3">
                      <div className="single-project ">
                        <img
                          src={i.image2} height="320px" width="300px" alt=""
                         
                        ></img>

                        <div>
                          <strong className="p">{i.title2}</strong>
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
      <Footer/>
    </div>
    
  );
}

export default Gallery;
