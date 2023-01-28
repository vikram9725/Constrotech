import React from 'react'
import "../Css/About.css"
 import image from '../images/About/img.jpeg'
  import about from '../images/About/about bus2.jpeg'
import { Navbar1 } from './Subcomponent/Navbar'
import Footer from './Subcomponent/Footer'

const About = () => {
  return (
    <>
      {/* navbar start */}
      <Navbar1 />
      {/* navbar end */}
      
      <div className="">
        <div className="bnr-container">
          <p className="sub_heading">ABOUT US</p>
        </div>
        <div className="container text-center mb-6">
          <div className="mt-5">
            <p className="para">
              Bharati Road Building Pvt Ltd is formarly known as Bharati
              Construction. we are working in this field from 2006.We were
              completed various projects in road<br></br>
              building and earthwork. we are working with many reputed compenies
              Our goal is maintain quality assurance and time limit.<br></br>
              <br></br>
              Bharti Group is one of the most reputed developers in Maharastra
              and has already delivered many projects in Pune.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 mt-5">
              <img src={image} className="img-fluid" alt="" />

              <div className="mt-4">
                <h3>Shri. Harshavardhan Ashok Powar</h3>
                <span className="head_position">(Chairman)</span>
              </div>
            </div>
            <div className="col-md-4 ms-2 mt-4">
              <img src={about}  className="img-fluid1" alt="" />

              <div className="mt-4">
                <h3>Shri. Vishwanath Ashok Powar</h3>
                <span className="head_position">(Director)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="yellow_footer" mb-6>
          <div className="col-md-12">
            <p>
              “We may get to the point where the only way of saving the world
              will be for <br></br>
              industrial civilization to collapse."
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About


