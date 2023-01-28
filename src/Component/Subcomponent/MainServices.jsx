import React from "react";
import "../../Css/MainService.css";

const MainServices = () => {
  return (
    <div>
      <div className="container">
        <div className="main">
          <div className="mainservices pt-5">
            <div className="mainservices-title ">
              <h2 className="headingms text-center">MAIN SERVICES</h2>
              <div className=" main-services border"></div>
            </div>
          </div>

          {/* <div className="card-deck pt-2 "> */}

          <div className="row ">
            <div className=" col  construction-giude d-flex">
              <div className="col-2 icon-guid ">
                <div className="new-icon">
                  <i className="fa-solid fa-pen-ruler"></i>
                </div>
              </div>

              <div className="card-body ">
                <h5 className="card-title-services">Construction Consultant</h5>
                <p className="card-text-services">
                  {" "}
                  Vestibulum eu libero volutas quam,tempus sem.Donec sodales
                  quam id Lorem lobortis, vitae interdum nisl .
                </p>
              </div>
            </div>

            <div className=" col  construction-giude d-flex">
              <div className="col-2 icon-guid ">
                <div className="new-icon">
                  {" "}
                  <i className="fa-solid fa-building-columns"></i>
                </div>
              </div>

              <div className="card-body">
                <h5 className="card-title-services">Architectural Design</h5>
                <p className="card-text-services">
                  {" "}
                  Vestibulum eu libero volutas quam,tempus sem.Donec sodales
                  quam id Lorem lobortis, vitae interdum nisl .
                </p>
              </div>
            </div>

            <div className=" col  construction-giude d-flex">
              <div className="col-2 icon-guid ">
                <div className="new-icon">
                  {" "}
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
              </div>

              <div className="card-body">
                <h5 className="card-title-services">Electrical System</h5>
                <p className="card-text-services">
                  {" "}
                  Vestibulum eu libero volutas quam,tempus sem.Donec sodales
                  quam id Lorem lobortis, vitae interdum nisl .
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col  construction-giude d-flex">
              <div className="col-2 icon-guid ">
                <div className="new-icon">
                  <i className="fa-solid fa-pen-to-square"></i>
                </div>
              </div>

              <div className="card-body">
                <h5 className="card-title-services">General Contracting</h5>
                <p className="card-text-services">
                  {" "}
                  Vestibulum eu libero volutas quam,tempus sem.Donec sodales
                  quam id Lorem lobortis, vitae interdum nisl .
                </p>
              </div>
            </div>

            <div className=" col  construction-giude d-flex">
              <div className="col-2 icon-guid ">
                <div className="new-icon">
                  <i
                    className="bi bi-arrow-repeat"
                    style={{ fontSize: "22px" }}
                  ></i>
                </div>
              </div>

              <div className="card-body">
                <h5 className="card-title-services">Resconstruction Service</h5>
                <p className="card-text-services">
                  {" "}
                  Vestibulum eu libero volutas quam,tempus sem.Donec sodales
                  quam id Lorem lobortis, vitae interdum nisl .
                </p>
              </div>
            </div>

            <div className=" col  construction-giude d-flex">
              <div className="col-2 icon-guid ">
                <div className="new-icon">
                  {" "}
                  <i className="bi bi-palette2"></i>
                </div>
              </div>

              <div className="card-body">
                <h5 className="card-title-services">Plumbilg Services</h5>
                <p className="card-text-services">
                  {" "}
                  Vestibulum eu libero volutas quam,tempus sem.Donec sodales
                  quam id Lorem lobortis, vitae interdum nisl .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
