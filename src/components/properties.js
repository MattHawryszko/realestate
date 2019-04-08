import React, { Component } from 'react';

import Property from "./property"

import Image from "../img/house1.jpg"
import Image2 from "../img/house2.jpg"
import Image3 from "../img/house3.jpg"
import Image4 from "../img/house4.jpg"
import Image5 from "../img/house5.jpg"
import Image6 from "../img/house6.jpg"
import Image7 from "../img/house7.jpg"
import Image8 from "../img/house8.jpg"
import Image9 from "../img/house9.jpg"
import Image10 from "../img/house10.jpg"
import Image11 from "../img/house11.jpg"

import "../styles/properties.css"

export default class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    items: [],
    visible: 4,
    error: false
  };

  this.loadMore = this.loadMore.bind(this);
}
componentDidMount() {
  this.setState({
    items: [{
      price:"2, 599, 999",
      beds:"5",
      baths:"4",
      sqft:"5023",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image
     },
     {
      price:"399, 999",
      beds:"5",
      baths:"4",
      sqft:"4223",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image2
     },
     {
      price:"599, 999",
      beds:"5",
      baths:"4",
      sqft:"4373",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image3
     },
     {
      price:"3, 699, 999",
      beds:"5",
      baths:"4",
      sqft:"4043",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image4
     },
     {
      price:"1, 399, 999",
      beds:"5",
      baths:"4",
      sqft:"4033",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image5
     },
     {
      price:"2, 399, 999",
      beds:"5",
      baths:"4",
      sqft:"2023",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image6
     },
     {
      price:"6, 599, 999",
      beds:"5",
      baths:"4",
      sqft:"9023",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image2
     },
     {
      price:"2, 239, 999",
      beds:"5",
      baths:"4",
      sqft:"4223",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image8
     },
     {
      price:"1, 559, 999",
      beds:"5",
      baths:"4",
      sqft:"3423",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image9
     },
     {
      price:"1, 729, 999",
      beds:"5",
      baths:"4",
      sqft:"4023",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image10
     },
     {
      price:"1, 119, 999",
      beds:"5",
      baths:"4",
      sqft:"3023",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image11
     },
     {
      price:"1, 119, 999",
      beds:"5",
      baths:"4",
      sqft:"3023",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image3
     },
]});
}
loadMore() {
  this.setState((prev) => {
    return {visible: prev.visible + 4};
  });
}
render() {
    return (
      <section id="properties">
        <div className="properties-bg pt-5">
          <div className="container pt-5">
            <div className="row">
            {this.state.items.slice(0, this.state.visible).map((item, index) => {
              return (
                <Property price={item.price} beds={item.beds} baths={item.baths} sqft={item.sqft} address={item.address} city={item.city} image={item.image}/>
              );
            })}
            </div>
            {this.state.visible < this.state.items.length &&
            <div className="row justify-content-center pb-5">
              <a className="mt-5 btn--more text-uppercase text-white" onClick={this.loadMore}>Load More...</a>
            </div>
            }

          </div>
        </div>    
        </section> 
      );
  }
};

