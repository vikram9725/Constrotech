import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Pills from "../Subcomponent/Pills";
import "../../Css/Review.css"

const ConstructionTabs = ()=>{
    const [key, setKey] = useState("home");
    return(
       <div className="child">
         <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="my-5"
      >
        <Tab eventKey="home" title="LATEST" className="text-black">
          <Pills />
        </Tab>
        <Tab eventKey="profile" title="HELPFUL">
          <Pills />
        </Tab>
        <Tab eventKey="contact" title="CRITICAL">
          <Pills />
        </Tab>
      </Tabs>
       </div>
    )
}

export default ConstructionTabs