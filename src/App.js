import React from 'react';
import './App.css';
import MenuHeader from "./views/MenuHeader";
import Service from "./views/Service";

function App() {
  return (
          <div className="App">
              <Service name={"Horseshoes"} ispaid={"Free Service"} description={"This service is amazing."}/>
              <Service name={"Gazebo"} ispaid={"Paid Service"} description={"You will not regret this service."}/>
          </div>
  );
}

export default App;
