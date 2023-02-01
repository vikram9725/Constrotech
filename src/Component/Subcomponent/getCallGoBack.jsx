// import { Dropdown } from 'bootstrap'
import React, { useState } from 'react'
import '../../Css/getCallGoBack.css'
// import { Form } from 'react-router-dom';
// import jsonData from "../db.json"

const GetCallGoBack = () => {

    // const a = jsonData;
    // console.log(a);
    const [val, setVal] = useState('')
    const d = ["+91 India", "+376 Andorra", "+32 Belgium", "+1 Canada", "+49 Germany", "+30 Greece", "+98 Iran"];
    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const setField = (field, value) => {
        setForm({
            ...form        ,
            [field]: value
        })

        if (!!error[field])
            setError({
                ...error,
                [field]: null
            })
    }
    const validateForm = () => {
        const { name, mo } = form
        const newError = {}

        if (!name || name === '') newError.name = 'Please enter your name'
        if (!mo || mo === '') newError.mo = 'Enter your mobail number'



        return newError
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formError = validateForm()
        if (Object.keys(formError).length > 0) {
            setError(formError)
        } else {
            console.log('Form Submited')
            console.log(form)
        }
    }
    return (
        <div className='bag'>
            <div className=' dvi tac g'>
                <div className='container dvi mt-3 tbag d-flex align-items-center justify-content-center ' >
                    {/* <div className='container dvi mt-5 d-flex align-items-center justify-content-center bg-secondary '> */}
                    {/* <h2>Get CallBack</h2> */}
                    <div className='row '>
                        <form className='   '>
                            <div className='lea mb-5'>
                                <h5> Please submit your details and our sales team will contact you shortly</h5>
                            </div>
                            <div className='row '>
                                <label className='le1'><h5>Name_  :</h5></label>
                                <div className='col-10'>
                                    <input type='text'
                                        className="form-control"
                                        placeholder='Enter Your Name'
                                        value={form.name}
                                        onChange={e => setField('name', e.target.value)}
                                        isInvalid={!!error.name}
                                    />
                                    <div type='invalid' >
                                        {error.name}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='row'>
                                <label className='le1'><h5>Mo.No :</h5>  </label>
                                <div className='col-sm-3 col-md-3 col-lg-3'>
                                    <div className="input-group mb-3">
                                        <select className="form-select" id="inputGroupSelect02" value={val} onChange={e => setVal(e.target.value)}>
                                            {
                                                d.map(e => <option>{e}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='col-sm-7 col-md-7 col-lg-7'>
                                    <input type='number'
                                        className="form-control"
                                        placeholder='Enter your Number'
                                        value={form.mo}
                                        onChange={e => setField('mo', e.target.value)}
                                        isInvalid={!!error.mo}
                                    />
                                    <div type='invalid' >
                                        {error.mo}
                                    </div>
                                </div>
                            </div>

                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label le1" for="exampleCheck1"><h6>I agree to be contacted by Proptiger via WhatsApp, SMS, Phone, Email etc.</h6></label>
                            </div>
                            <div className='d-grid gap-2 col-6 mx-auto'>
                                <a href="/" className="btn btn-lg btn-primary mt-3 d-flex justify-content-center" onClick={handleSubmit}> GET CALLBACK</a>
                            </div>
                            <div className='row mt-3'>
                                <div className='d-grid gap-2 d-flex justify-content-center  mx-auto'>
                                    <a className=' mt-3 lea' href="/"><h6>Read Disclaimer</h6></a>
                                </div>
                            </div>
                            <div className='d-flex lea justify-content-center mt-3'>
                                <h4>Our Promise</h4>
                            </div>

                            <div className='row lea mt-3  '>
                                <div className='col-3  '>
                                    <span className="wrap-icon d-flex justify-content-center">
                                        <i className="bi bi-shield-check "></i>
                                    </span>
                                    <label className='le'>ASSURED
                                        PRIVACY</label>
                                </div>
                                <div className='col-3 '>
                                    <span className="wrap-icon d-flex justify-content-center ">
                                        <i className="bi bi-person-fill"></i>
                                    </span>
                                    <label className='lea'>EXPERT
                                        CONSULTATION</label>
                                </div>
                                <div className='col-3'>
                                    <span className="wrap-icon d-flex justify-content-center">
                                        <i className="bi bi-car-front-fill"></i>
                                    </span>
                                    <label className='lea'>FREE
                                        SITE VISIT</label>
                                </div>
                                <div className='col-3'>
                                    <span className="wrap-icon d-flex justify-content-center">
                                        <i className="bi bi-currency-rupee"></i>
                                    </span>
                                    <label className='lea'>EXPERT
                                        CONSULTATION</label>
                                </div>


                            </div>
                        </form>
                    </div>
                    {/* </div> */}


                </div>
            </div>
        </div>
    )
}

export default GetCallGoBack