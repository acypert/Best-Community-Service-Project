import React from "react";
import Event from "./Event";
import faker from "faker";

function Events() {
    return(
        <div>
            <Event location={"Las Vegas, NV"} eventName={"Happy Fun Festival"} description={"3 nights of fun in Vegas"} price={300} imageUrl={faker.random.image()} />
            <Event location={"Phoenix, AZ"} eventName={"Relentless Brats"} description={"Daytime festival celebrating tasty brats"} price={25} imageUrl={faker.random.image()} />
            <Event location={"Los Angeles, CA"} eventName={"Beach Day Festival"} description={"Join us on the beach"} price={150} imageUrl={faker.random.image()} />
        </div>
    );
}

export default Events;