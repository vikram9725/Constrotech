
import jsondata from '../../Flat.json'
import React from 'react'
import "../../Css/Top10.css";
import { Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { Navbar1 } from './Navbar';

const Reviewdetail = () => {
  let a = jsondata
  return (
    <>
    <Navbar1/>
    <h1 className="text-danger font-weight-bolder mt-3 text-center">Selected city</h1>
    <div className='wallpaper'>
      <div className="container">
        <div className="row h-auto">
          <div className="col-md-12 ">
            {
              a.map((a) => {
                return (
                  <div className="card mb-5 mt-4 " >
                    <div className="row g-0" >
                      <div className="col-4   ">
                        <img style={{ height: "360px" }}
                          src={a.Image}
                          alt="Trendy Pants and Shoes"
                          className="img-fluid rounded-start"
                        />
                        <span className='heart-icon'><i className="bi bi-heart"></i></span>
                      </div>
                      <div className="col-md-8  " >
                        <div className="card-body">
                          <div className='d-flex justify-content-between'>
                            <div className='main card-titles'>
                              <a href='/'><h6>{a.title}</h6></a>
                              {/* <i class="fa-regular fa-location-dot"></i> */}
                              <p><a href="/">{a.locatin}</a></p>
                            </div>
                            <div>
                              <p >{a.group}</p>
                            </div>
                            <div className={a.prize}>
                              <p style={{ color: "orange" }}>₹ {a.prize} </p>
                            </div>
                          </div>
                          <div >

                          <NavLink  to={"/Reviews"}>
                          <button type="button" class="btn btn-light mb-2">Reviews</button>
                          </NavLink>

                          </div>
                          <div className=''>
                            <Badge className="badge bg-secondary"><span> Possession starts from: Jun'23</span></Badge>
                          </div>
                        </div>
                        <div className='d-flex flats justify-content-between w-30 fs-10'>
                          <div>
                            <a href='/'><p>2BHK+2T</p></a>
                          </div>
                          <div>
                            <p>On Request</p>
                          </div>
                          <div>
                            <p>1.9 Cr</p>
                          </div>
                        </div>
                        <div className='d-flex flats  justify-content-between w-30'>
                          <div>
                            <p>2BHK+2T</p>
                          </div>
                          <div>
                            <p>On Request</p>
                          </div>
                          <div>
                            <p>1.9 Cr</p>
                          </div>
                        </div>
                        <div className='d-flex flats justify-content-between w-30'>
                          <div>
                            <a href='/'><p>2BHK+2T</p></a>
                          </div>
                          <div>
                            <p>On Request</p>

                          </div>
                          <div>
                            <p>1.9 Cr</p>
                          </div>
                        </div>

                        <div style={{ marginLeft: "10px" }}>
                          <p> <span className=' text-success me-2 '>Exciting Offers </span> {a.description}</p>
                        </div>
                        <div className='d-flex justify-content-end me-3' >
                          <div className='me-3 mt-2 pr-4'>
                            <NavLink to={"/Viewdetails"} >
                              <button className='btn btn-outline-light'>View Details</button>
                            </NavLink>
                          </div>
                          <div className="pr-3 mb-3">
                          <NavLink to={"/GetCallBack"}>
                            <button type="button" class="btn btn-danger ">Get Callback</button>
                          </NavLink>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                )
              })
            }
          </div>

        </div>
      </div>
    </div>
    </>


  )
}

export default Reviewdetail