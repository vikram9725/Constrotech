import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ConstructionTabs from "../Subcomponent/Tabs";
import "../../Css/Review.css";

const Review = () => {

  const [key, setKey] = useState("all");
  return (
    <div className="wrapper">
      <div className="container pt-5 p-1">
      <div className="">
      <div className="col-md-12 mt-3 ">
        <div className="card p-4 pb-0">
          <div className="card-body">
            <div className="img">
          </div>
            <h4 className="card-title mt-4">The Most Loved Car Of The Country</h4>
            <img src="../../src/img/house.jpeg" alt="" />
            <div className="h1 ">

            <a style={{color:"orange"}} href="/"><span><i className="fa fa-star"></i></span></a>
            <a style={{color:"orange"}} href="/"><span><i className="fa fa-star"></i></span></a>
            <a style={{color:"orange"}} href="/"><span><i className="fa fa-star"></i></span></a>
            <a style={{color:"orange"}} href="/"><span><i className="fa fa-star"></i></span></a>
            <a style={{color:"orange"}} href="/"><span><i className="fa fa-star"></i></span></a>
            </div>
            {/* <StarRating/> */}

            <h6 className="card-subtitle text-muted mt-4">
              The Most Loved Car Of The Country
            </h6>
          </div>
          <div className="card-body">
          
            <p className="card-text">
              The buying experience with Nexa badging has got a premium feel to
              buying a normal car from Normal Maruti Suzuki Arena. - Pros of
              this car are that some of the segment-leading features like a
              heads-up display and 360° camera add a lot of accessibility to the
              enthusiast drivers where they feel premium with the Dashboard
              layout and finishing touches. While the good looks of the car
              always please the eyes of the beholder. - Cons of this car are the
              low-quality plastic used in the cabin and some old-school designs
              of door switches carried forward. Build quality and fittings of
              interiors disappoint compared to its segment rivals. - Talking
              about the performance, the engine feels peppy compared to the
              other motors of the same segment while the turbo lag feels only
              when running the car with all 5 passengers and the boot full of
              luggage. I would emphasize a bit more on a torque where it's quite
              easygoing in normal traffic conditions but feels a bit low when
              running with full capacity as mentioned above. - While the above
              highlights of the performance fade marginally when efficiency
              comes up with the real-life numbers. The efficiency
            </p>

            <div className="dom pt-6 mt-5">
              <h6>By Abhishek Unadkat</h6>
              <span>On: Jan 22, 2023 | 619 Views</span>
            </div>
         
             
      
           <div className="d-flex border-top mt-5 border-1"  >
           <div className="d-flex m-4 mb-0 ">
              {/* <img src="../../src/logo.svg" alt="" /> */}
              <a style={{color:"black"}} href="/"><span><i className="bi bi-hand-thumbs-up" aria-hidden="true"></i></span>
              <span className="ms-2">0 Likes </span></a>
            </div>
            <div className="d-flex m-4 mb-0">
              {/* <img src="../../src/img/house4.jpeg" alt="" /> */}
              <a style={{color:"black"}} href="/"><span><i className="bi bi-hand-thumbs-down"></i></span>
              <span className="ms-2">0  DisLikes</span> </a>
            </div>
           </div>
          
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-12  ">
          <div className="card mt-5 p-5">
            <div className="Maruti Baleno User Reviews pb-3">
              <h4 class="card-title">Maruti Baleno User Reviews</h4>
            </div>
            <div className=" h2 d-flex ">
             
              <a style={{color:"orange"}} href="/"><span><i className="fa fa-star"></i></span></a>
              
              <span className="ms-3"><h1>4.4</h1> </span>
              <span className="ms-4">
               <p style={{ fontSize:"15px"}}> based on <br></br>206 user review</p>
              </span>
              
            </div>
            <div className="d-grid ">
              <button className="btn btn-Danger" type="button">
                Write Reveiws
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 p-3 bg-white">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="all" title="All(126)">
            <ConstructionTabs />
          </Tab>
          <Tab eventKey="milenge" title="Milenge()">
            <ConstructionTabs />
          </Tab>
          <Tab eventKey="performance" title="Performance()">
          <ConstructionTabs />
        </Tab>
        <Tab eventKey="looks" title="Looks()">
          <ConstructionTabs />
        </Tab>
        <Tab eventKey="comfort" title="Comfort()">
          <ConstructionTabs />
        </Tab>
        <Tab eventKey="engine" title="Engine()">
          <ConstructionTabs />
        </Tab>
        <Tab eventKey="interior" title="Interior()">
          <ConstructionTabs />
        </Tab>
        <Tab eventKey="power" title="Power(19)">
          <ConstructionTabs />
        </Tab>
        </Tabs>
        <hr />
        <div className="">
          
          <a style={{color:"blue",fontSize:"18px" ,textAlign:"center"}} href="/" className="badge badge-primary">View All Reviews</a>
          
        </div>
        <hr />
      </div>
     
        
    </div>
      </div>
     
    </div>
  );
};

export default Review;
