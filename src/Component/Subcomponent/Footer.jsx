import React from 'react'
import '../../Css/Footer.css'
// import image from '../../src/footer/WhatsApp Image 2023-01-22 at 7.14.50 PM.jpeg'
import Logo from "../../images/Home/Logo3.png";




export default function Footer() {
  return (
    <div>
       <footer>
        <div className='container-fluid footerbgcolor'>
          <div className='row'>
            <div className='col-4'>
              <img src={Logo} alt="logo" />
           </div>
           <div className='col-6'>
            <h5 className='text-center align-middle'>Top Links to  Search your Home</h5>
           </div>
         </div>
          
         
          <div className="row">
              <div className=" col-xs-12 col-sm-12  col-md-3 col-lg-3 col-xl-3">
                    <h6>BUILDERS</h6>
                    <ul className="ltype" >                    
                    <li><a href="/" target="_blank">Prestige Group</a></li>
                    <li><a href="/">Shobha Limited</a></li>
                    <li><a href="/">Kolte Patil Developers</a></li>
                    <li><a href="/">Godrej Properties</a></li>                   
                    <li><a href="/">Brigade Group </a></li> 
                  </ul>
              </div>
              <div className=" col-xs-12 col-sm-12  col-md-3 col-lg-3 col-xl-3">
                    <h6>REAL ESTATE IN INDIA</h6>
                    <ul className="ltype" >                    
                    <li><a href="/" target="_blank">Property in Bangalore</a></li>
                    <li><a href="/">Property in Mumbai</a></li>
                    <li><a href="/">Property in Pune</a></li>
                    <li><a href="/">Property in Gurgaon</a></li>                   
                    <li><a href="/">Cities in India </a></li> 
                  </ul>
              </div>
              <div className=" col-xs-12 col-sm-12  col-md-3 col-lg-3 col-xl-3">
                    <h6>BUY PROPERTY</h6>
                    <ul className="ltype" >                    
                    <li><a href="/" target="_blank">Properties for sale in Bangalore</a></li>
                    <li><a href="/">Properties for sale in Mumbai</a></li>
                    <li><a href="/">Properties for sale in Pune</a></li>
                    <li><a href="/">Properties for sale  in Gurgaon</a></li>                   
                    <li><a href="/">Properties For Sale in Hyderabad</a></li> 
                  </ul>
              </div>
              <div className=" col-xs-12 col-sm-12  col-md-3 col-lg-3 col-xl-3">
                    <h6>PROPERTIES IN INDIA</h6>
                    <ul className="ltype" >                    
                    <li><a href="/" target="_blank">Apartments For Sale in India</a></li>
                    <li><a href="/">Villas in India</a></li>
                    <li><a href="/">New Apartments for sale in India</a></li>
                    <li><a href="/">Upcoming Apartments for Sale</a></li>                   
                    <li><a href="/">Ready to move Apartments in India </a></li> 
                  </ul>
              </div>
              <div className='col-xs-12 col-sm-12  col-md-6 col-lg-4 col-xl-3'>
                <h6>About Constrotech</h6>
                We provide you the fascility that can bring your dreamhouse in Reality .We provide you the Best features in construction world .You Can get the all information about the all builders nearby you With their best construction fascilities including the material quality and dealers with contact.You can easily choose the builder for your dream house ,factory,building or bunglo with dealers which will provide you material in profitable rates.
              </div>
              <div className='col-md-3'>
                <h6>Property Type</h6>
                <ul className="ltype" >                    
                    <li><a href="/" target="_blank">Apartments Sale in India</a></li>
                    <li><a href="/">Property Sale in India</a></li>
                    <li><a href="/">Villas Sale in India</a></li>
                    <li><a href="/">Plots Sale in India</a></li>
                    <li><a href="/">New Apartments for sale in India</a></li>
                    <li><a href="/">Upcoming flats for Sale in India</a></li> 
                    <li><a href="/">Ongoing projects in India</a></li>                  
                    <li><a href="/">Ready to move Flats in India </a></li> 
                    <li><a href="/">Resale Apartments in India</a></li>
                    <li><a href="/">Properties for Senior Citizen</a></li>
                    <li><a href="/">All Projects in India</a></li>
                  </ul>
                </div>
                <div className='col-md-3'>
                  
                     <h6>Quick Links</h6>
                   <ul className="ltype" >                    
                    <li><a href="/" target="_blank">Home</a></li>
                    <li><a href="/">User Agreement</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Propguide</a></li>
                    <li><a href="/">Contact us</a></li>
                    <li><a href="/">Privacy Policy</a></li> 
                    <li><a href="/">Annual Return</a></li>                  
                    <li><a href="/">Get Home Loan </a></li> 
                    <li><a href="/">International</a></li>
                    <li><a href="/">Supplier Code of Conduct</a></li>
                    <li><a href="/">Cashback Policy</a></li>
                    </ul>
               </div>
               <div className='col-xs-5 col-sm-2'>
                <h6>Resources</h6>
                <ul className="ltype" >                    
                    <li><a href="1" target="_blank">Home Loan</a></li>
                    <li><a href="1">NRI Services</a></li>
                    <li><a href="1">How to Buy</a></li>
                </ul>
                <div className='col-xs-6 col-sm-2'>
                <h6>Network Sites</h6>
                <ul className="ltype" >                    
                    <li><a href="1" target="_blank">Housing.com</a></li>
                    <li><a href="1">IREF</a></li>
                    <li><a href="1">Makan.com</a></li>
                </ul>
               </div>
               </div>
            </div>
            <hr />
            <div>
            <p>Here have to add logos of fb,twitter</p>
            </div>
        </div>
       </footer>
      </div>
  )
}
