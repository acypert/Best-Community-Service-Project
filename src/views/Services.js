import React from 'react';
import '../App.css';
import Service from "./Service";

function Services() {
  return (
      <div className="App">
          <Service name={"Horseshoes"} ispaid={"Free Service"} description={"Play some horseshoes on your own or in one of our tournaments."} imageUrl={"https://www.owntheyard.com/wp-content/uploads/2018/12/horseshoes2.jpg"} />
          <Service name={"Gazebo"} ispaid={"Paid Service"} description={"Spend some time in one of our gazebos."} imageUrl={"https://www.thespruce.com/thmb/RNzNvbrjNO9kkOCkN0tk5ORTHpw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/182178037-56a75c5d5f9b58b7d0e98aa7.jpg"} />
          <Service name={"Train Ride"} ispaid={"Free Service"} description={"Take a ride on our train that goes around the park"} imageUrl={"https://live.staticflickr.com/3016/2563040589_0c23c284b5_b.jpg"} />
          <Service name={"Dog Walking"} ispaid={"Paid Service"} description={"We walk your pet so you don't have to"} imageUrl={"https://noahapopka.com/wp-content/uploads/2018/10/AdobeStock_106985891-680x380@2x.jpeg"} />
      </div>
  );
}

export default Services;
