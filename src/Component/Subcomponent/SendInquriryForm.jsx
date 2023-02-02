import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import '../../Css/sendinquriry.css'



const SendInquriryForm = () => {

  document.title = "SendInquriryForm"

  const [ProductOrService, setProductOrService]=useState('')
  const [FullName, setFullName] = useState('')
  const [MobileNumber, setMobileNumber] = useState('')
  const [EmailAddress, setEmailAddress] = useState('')
  const [AdditionalInfo, setAdditionalInfo] = useState('')
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("Product Or Service",ProductOrService);
    // if (FullName.length == 0) {
    //   setError(true)
    // }
    // if(FullName)
    // {console.log("Full Name :" ,FullName)}


    console.log("Full Name :" ,FullName)
    console.log("Mobile Number :",MobileNumber);
    console.log("Email Address : ",EmailAddress);
    console.log("Additional Info : ",AdditionalInfo);
    alert(` ProductOrService ${ProductOrService} FullName ${FullName} MobileNumber${MobileNumber} EmailAddress ${EmailAddress} AdditionalInfo${AdditionalInfo}`);


  }
  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='bgINQUIRY ' style={{ hover: "zoom" }} >
            <div className="row mb-2" >
              <div className="col text-center" style={{ marginTop: '30px' }}>
                <h1 style={{ fontSize: '20px' }}> <span style={{ color: 'red', fontSize: '20px' }}>SEND</span> INQURIY </h1>
              </div>
            </div>

            <div className='row'>
              <div className="col-md-6 m-auto">


                <div className="form-group">

                  <select className="custom-select my-1 mr-sm-2 " 
                  value={ProductOrService} 
                  onChange={e=>setProductOrService(e.target.value)}>
                    <option selected>Select Product or Service</option>
                    <option value={1}>Product</option>
                    <option value={2}>Service</option>

                  </select>
                </div>

                <div className='row'>
                  <div className=" col form-group">

                    <input type="name" name="name" className="form-control" id="name" placeholder="Enter Your Name"
                      value={FullName}
                      onChange={e=>setFullName(e.target.value)} />

                  </div>
                
                </div>
                {/* {error && FullName.length <= 0 ?
                    <label>full name can't be empty </label> : ""} */}


                <div className="row">
                  <div className=" col-12  col-sm-6 form-group">

                    <input type="mobile number" name="mobile number" className="form-control" id="mobile number" placeholder="Enter Mobile No"
                      value={MobileNumber}
                      onChange={e=>setMobileNumber(e.target.value)} />

                  </div>


                  <div className=" col-12  col-sm-6 form-group">

                    <input type="email address" name="email address" className="form-control" id="email address" placeholder="Enter Email "
                      value={EmailAddress}
                      onChange={e=>setEmailAddress(e.target.value)} />

                  </div>

                </div>
                <div className='row'>
                  <div className=" col form-group">
                    <input type="add info" name="add info" className="form-control" id="add info" placeholder="Additional Information"
                      value={AdditionalInfo}
                      onChange={e=>setAdditionalInfo(e.target.value)} />
                  </div>
              </div>
                <div className='row'>

                  <div className="form-check">
                    <input type="checkbox" name="checkbox" className="form-check-input ml-1" id="remember" />

                    <label className="form-check-label " htmlFor="remember">
                      <span className='condition ml-4'>I agree with terms and conditions</span>
                    </label>

                  </div>

                </div>

                <NavLink to={"/"}>
                <button type="submit-sendinq" className="btn btn-danger float-right " >
                  Submit <i className="bi bi-chevron-compact-right "></i>
                </button>
                </NavLink>
              </div>


            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default SendInquriryForm
