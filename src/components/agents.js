import React, { Component } from 'react';

import Agent1 from "../img/agent1.png";
import Agent2 from "../img/agent2.png";

export default class App extends Component {
render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 p-1">
            <div class="card">
              <div class="card-body agent-bg pb-0">
                <div className="row">
                  <div className="col-5">
                    <img src={Agent1} className="img-fluid agent-img" />
                  </div>
                  <div className="col-7 pb-3">
                    <h2 className="py-5 text-brown">Alice Dobber</h2>
                    <p className="location-text font-bold"><i className="location-text fas fa-envelope"></i> alice@luxreality.com</p>
                    <p className="location-text font-bold pb-5"><i className="location-text fas fa-phone"></i> (282) 453 - 2234</p>
                    <h3 className="font-bold location-text pb-5">Available 24/7</h3>
                    <a className="mt-5 btn--contact-me text-uppercase" href="mailto:alice@luxreality.com">Contact Me</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 p-1 ">
            <div class="card">
              <div class="card-body agent-bg pb-0 ">
                <div className="row">
                  <div className="col-5">
                    <img src={Agent2} className="img-fluid agent-img" />
                  </div>
                  <div className="col-7 pb-3 ">
                    <h2 className="py-5 text-brown">Sam Dobber</h2>
                    <p className="location-text font-bold"><i className="location-text fas fa-envelope"></i> sam@luxreality.com</p>
                    <p className="location-text font-bold pb-5"><i className="location-text fas fa-phone"></i> (282) 923 - 9933</p>
                    <h3 className="font-bold location-text pb-5">Available 24/7</h3>
                    <a className="mt-5 btn--contact-me text-uppercase" href="mailto:sam@luxreality.com">Contact Me</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>     
      );
  }
};

