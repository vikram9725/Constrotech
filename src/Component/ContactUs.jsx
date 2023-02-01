import React, { useState } from "react";
import Footer from "./Subcomponent/Footer";
import { Navbar1 } from "./Subcomponent/Navbar";
import "../Css/ContactUs.css";

const ContactUs = () => {
document.title="Contact Us"

  const [comment, setcomment] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
    console.log(email);
    console.log(mobile);
    alert(`comment ${comment} email ${email}  mobile ${mobile}`);
  };

  return (
    <>
      <Navbar1 />
      <div className="img">
        <div className="bnr-container">
          <p className="sub_heading ">Contact Us</p>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <span id="detail" className="textColor cts text-left">
              Customer Care:
            </span>
            <div>
              <p className="textColor">
                Get in touch with us for your property requirement, query,
                complaint or feedback on our dedicated customer service helpdesk
                number & email ID
              </p>
            </div>
            <span id="detail" className="textColor">
              Details of issue:
            </span>
            <div className="form-group">
              <label className="textColor">Type:</label>
              <select className="form-control">
                <option>Type</option>
                <option>Query</option>
                <option>complaint</option>
                <option>Request</option>
              </select>
            </div>
            <div className="form-group">
              <label className="textColor">Category :</label>
              <select className="form-control">
                <option>Category</option>
                <option>Sales complaints</option>
                <option>Cash-Back complaints</option>
                <option>Builder Issue</option>
                <option>Service complaints</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="textColor">Sub-Category :</label>
              <select className="form-control">
                <option>Sub-Category</option>
                <option>Lead callback Delead</option>
                <option>MissCommunication from sales RM </option>
                <option>Other</option>
                <option>Behavioral Issue of the sales RM</option>
              </select>
            </div>
            <div className="form-group">
              <label className="textColor">Comment:</label>
              <textarea
                className="form-control"
                placeholder="Enter your Comments Here"
                rows="5"
                value={comment}
                onChange={(e) => setcomment(e.target.value)}
                id="comment"
                name="text"
              ></textarea>
            </div>
            <div className="email">
              <div className="form-group">
                <label className="textColor">Email address:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Email Address"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div>
              <div className="form-group d-flex">
                <label className="textColor ">Mobile:</label>
                <div className="d-xl-inline-flex">
                  <select className="form-control">
                    <option>India 91</option>
                    <option>United State</option>
                    <option>Brazil </option>
                    <option>Israel</option>
                    <option>Japan</option>
                  </select>
                  <div className="textcolor">
                    <input
                      type="text"
                      className="mn"
                      value={mobile}
                      onChange={(e) => setmobile(e.target.value)}
                      placeholder="Mobile No"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 justify-content-center d-flex">
                <button className="btn btn-primary btn-md">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <hr className="h-100 h-75 bg-dark mt-4 mb-lg-3" />
        </div>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20595.958430381615!2d73.8352519949384!3d18.445927489215872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1674635120684!5m2!1sen!2sin"
        height="400px"
        width="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Footer />
    </>
  );
};

export default ContactUs;
