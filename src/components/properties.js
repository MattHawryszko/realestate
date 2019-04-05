import React, { Component } from 'react';

import Property from "./property"

import Image from "../img/house1.jpg"
import Image2 from "../img/house2.jpg"
import Image3 from "../img/house3.jpg"
import Image4 from "../img/house4.jpg"

export default class App extends Component {
render() {
    return (
        <div className="properties-bg pt-5">
          <div className="container pt-5">
            <div className="row">
              <Property price="2, 599, 999" beds="5" baths="4" sqft="5023" address="291 N Front St, K8P 3C3" city="Belleville, ON" image={Image}/>
              <Property price="2, 599, 999" beds="5" baths="4" sqft="5023" address="291 N Front St, K8P 3C3" city="Belleville, ON" image={Image2}/>
              <Property price="2, 599, 999" beds="5" baths="4" sqft="5023" address="291 N Front St, K8P 3C3" city="Belleville, ON" image={Image3}/>
              <Property price="2, 599, 999" beds="5" baths="4" sqft="5023" address="291 N Front St, K8P 3C3" city="Belleville, ON" image={Image4}/>
              
            </div>
            <div className="row justify-content-center pb-5">
              <a className="mt-5 btn--default btn--more text-uppercase" href="">Load More...</a>
            </div>
          </div>
        </div>     
      );
  }
};

