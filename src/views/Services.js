import React from 'react';
import '../App.css';
import Service from "./Service";
import faker from "faker";

function Services() {
  return (
      <div className="App">
          <Service name={"Horseshoes"} ispaid={"Free Service"} description={"This service is amazing."} imageUrl={faker.random.image()} />
          <Service name={"Gazebo"} ispaid={"Paid Service"} description={"You will not regret this service."} imageUrl={faker.random.image()} />
          <Service name={"Train Ride"} ispaid={"Free Service"} description={"Take a ride on our train that goes around the park"} imageUrl={faker.random.image()} />
          <Service name={"Dog Walking"} ispaid={"Paid Service"} description={"We walk your pet so you don't have to"} imageUrl={faker.random.image()} />
      </div>
  );
}

export default Services;
