import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img4 from "../../images/Home/image4.jpg";
import img2 from "../../images/Home/image2.jpg";
import img3 from "../../images/Home/image3.jpg";
import Logo from "../../images/Home/constrotech_logo.avif";
import MainServices from "./MainServices";
import SliderG from "./sliderG";
import Material from "./Material";
import { createContext } from "react";

const Navbar1 = () => {
  return (
    <>
      {/* navbar start */}
      <nav className="navbar navbar-expand-lg ">
        <NavLink className="navbar-brand" to="/">
          <span>
            <img src={Logo} height="50px" width="300px" alt="" />
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-danger" />
        </button>
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ms-5 ">
              <NavLink className="nav-link ms-5 " to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item ms-5">
              <NavLink className="nav-link " to="/About">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item ms-5">
              <NavLink className="nav-link " to="/services">
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Project">
                PROJECT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Gallery">
                GALLERY
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">
                CONTACT
              </NavLink>
            </li>
          </ul>
          <NavLink
            className="btn btn-outline-info my-2 my-sm-0  "
            to="/LoginForm"
          >
            Login
          </NavLink>
          <NavLink
            className="btn btn-outline-info my-2 my-sm-0 ml-3 "
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};
const Slider1 = () => {
  const [val, setVal] = useState('')
  const [val1, setVal1] = useState('')
  const b = ["You want to purchase a flat", "Construct a Bangalow"]
  const a = ["All Cities", "Solapur", "Pune", "Mumbai", "Nashik", "Kolhapur"]

  return (
    <>
      {/* slider start */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="content-text">
            <div className="row bg-white crch ">
              <div className="col-sm-3 col-md-3 col-lg-3  ">

                <select name="dropdown" id="" className="dropdown " value={val} onChange={e => setVal(e.target.value)}>
                  {
                    a.map(e => <option>{e}</option>)
                  }
                </select>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-7 ms-2  ">
                <select name="dropdown" id="" className="dropdown" value={val1} onChange={e => setVal1(e.target.value)}>
                  {
                    b.map(e => <option>{e}</option>)
                  }
                </select>
              </div>
              <div className="col-sm-2 col-md-1 col-lg-1 search  ml-1">

                <NavLink to={`/Top10`}>
                  <button className="btn btn-primary btnsrc">search</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src={img4}
              height="500px"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              height="500px"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              height="500px"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </button>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6"></div>

        <div className="col-sm-12 col-md-12 col-lg-6"></div>
      </div>
      {/* slider end */}
      <MainServices />
      <SliderG />
      <Material />
    </>
  );
};
export { Navbar1, Slider1 };
