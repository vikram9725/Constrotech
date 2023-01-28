import React from 'react'
import jsondata from '../dbG.json'
import "../Css/ourServices.css"
import { Navbar1 } from './Subcomponent/Navbar';
import Footer from './Subcomponent/Footer';
const Ourservices1 = () => {
    const ab = jsondata;
    const a = ab.filter(e => e.id <= 9)
    console.log(a);
    return ( 
           <>
           <Navbar1/>
             <div className='container mt-5'>
                <div className='col-12 bagImg d-flex align-items-center justify-content-center'>
                    <h1>Our Services</h1>
                </div>
                <div className='row grow card-hight mt-5'>
                    {a.map((e, i) => {
                        return (
                            <div key={i} className="col-4 h-100  ">
                                <img src={e.image} height='200px' className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.body}</p>
                                    <button className="btn btn-primary mt-auto card-hight ">Go somewhere</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <Footer/>
           </>
    
    )
}

export default Ourservices1