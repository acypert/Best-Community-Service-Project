import React from "react";
import Event from "./Event";
import faker from "faker";

function Events() {
    return(
        <div>
            <Event location={"Las Vegas, NV"} eventName={"Happy Fun Festival"} description={"3 nights of fun in Vegas"} price={300} imageUrl={"https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/23212146/EDCLV2019_0518_013141-3257_CTL-header-sm.jpg"} />
            <Event location={"Phoenix, AZ"} eventName={"Relentless Brats"} description={"Daytime festival celebrating tasty brats"} price={25} imageUrl={"https://bratfest.com/wp-content/uploads/2016/02/all-bands-page-880x425.jpg"} />
            <Event location={"Los Angeles, CA"} eventName={"Beach Day Festival"} description={"Join us on the beach"} price={150} imageUrl={"https://media.resources.festicket.com/www/magazine/Beach.jpg"} />
        </div>
    );
}

export default Events;