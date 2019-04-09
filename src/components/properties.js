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
    sorted: [],
    visible: 4,
    error: false
  };

  this.loadMore = this.loadMore.bind(this);
  this.sort = this.sort.bind(this);
}
componentDidMount() {
  this.setState({
    items: [{
      id: "10001",
      price:"2, 599, 999",
      beds:"5",
      baths:"4",
      sqft:"5023",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image
     },
     {
      id: "10002",
      price:"399, 999",
      beds:"5",
      baths:"4",
      sqft:"4223",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image2
     },
     {
      id: "10003",
      price:"599, 999",
      beds:"5",
      baths:"4",
      sqft:"4373",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image3
     },
     {
      id: "10004",
      price:"3, 699, 999",
      beds:"5",
      baths:"4",
      sqft:"4043",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image4
     },
     {
      id: "10005",
      price:"1, 399, 999",
      beds:"5",
      baths:"4",
      sqft:"4033",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image5
     },
     {
      id: "10006",
      price:"2, 399, 999",
      beds:"5",
      baths:"4",
      sqft:"2023",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image6
     },
     {
      id: "10007",
      price:"6, 599, 999",
      beds:"5",
      baths:"4",
      sqft:"9023",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image2
     },
     {
      id: "10008",
      price:"2, 239, 999",
      beds:"5",
      baths:"4",
      sqft:"4223",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image8
     },
     {
      id: "10009",
      price:"1, 559, 999",
      beds:"5",
      baths:"4",
      sqft:"3423",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image9
     },
     {
      id: "10010",
      price:"1, 729, 999",
      beds:"5",
      baths:"4",
      sqft:"4023",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image10
     },
     {
      id: "10011",
      price:"1, 119, 999",
      beds:"5",
      baths:"4",
      sqft:"3023",
      address:"291 N Front St, K8P 3C3",
      city:"Belleville, ON",
      image: Image11
     },
     {
      id: "10012",
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
async sort() {
  var items = this.state.items;
  await this.setState( {sorted: []})
  var newArray = this.state.sorted.slice();   
  var minPrice = document.getElementById('minPrice').value;
  var maxPrice = document.getElementById('maxPrice').value;
  var minSqft = document.getElementById('minSqft').value;
  const delay = ms => new Promise(res => setTimeout(res, ms));
  if(minSqft === "Min sqft..."){
    minSqft = 1;
  }
  console.log(minSqft)
  var location = document.getElementById('location').value;
  var error = document.getElementById("error");
  await items.forEach(element => {
    var price = parseInt(element.price.replace(/[^\d\.\-]/g, ''))

    if(maxPrice > minPrice && price < maxPrice &&! newArray.includes(element) && price > minPrice &&! newArray.includes(element) && element.sqft > minSqft &&! newArray.includes(element)){
        console.log(element)
        newArray.push(element)
        this.setState( {sorted: newArray})
        error.style.display = 'none'
        
    }



    
  });

  if(newArray.length == 0){
    error.classList.remove("bounceOut")
    error.classList.add("bounceIn")
    error.style.display = 'block'
    await delay(3000);
    error.classList.add("bounceOut")
    //error.style.display = 'none'
  }
  this.render();
  console.log(this.state.sorted)
  console.log(this.state.items)

}
render() {
if(this.state.sorted.length >= 1)
{
    return (
      <section id="properties" className="properties-bg">
                <div className="container">
        <div class="col-lg-12">
          <div class="pt-5">
            <p class="h1 text-uppercase justify-content-center d-flex">Properties</p>
              
            <div class="title-underline my-3 bg-secondary">
              <div class="title-underline__center"></div>
            </div>
            <div class="mx-2">
              <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        </div>
        <div className="properties-bg pt-5">
        <div className="container">
        <div id="error" class="alert alert-danger animated bounceIn" style={{display: 'none'}} role="alert">
          Error your search is invalid
        </div>
        <div className="row">

          <div className="col-lg-3 p-0 pb-1">
            <select class="custom-select form-control-lg mr-sm-2" id="location">
              <option selected >Location...</option>
              <option value="Bellville, ON">Bellville, ON</option>
            </select>
          </div>
          <div className="col-lg-3 p-0 pb-1">
            <select class="custom-select form-control-lg mr-sm-2" id="minSqft">
              <option selected>Min sqft...</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
              <option value="2500">2500</option>
              <option value="3000">3000</option>
              <option value="3500">3500</option>
              <option value="4000">4000</option>
              <option value="4500">4500</option>
              <option value="5000">5000</option>
            </select>
          </div>
          <div className="col-lg-2 p-0 pb-1">
            <select class="custom-select form-control-lg mr-sm-2" id="minPrice">
              <option selected>Min price...</option>
              <option value="100000">100, 000</option>
              <option value="250000">250, 000</option>
              <option value="500000">500, 000</option>
              <option value="750000">750, 000</option>
              <option value="1000000">1, 000, 000</option>
              <option value="1500000">1, 500, 000</option>
              <option value="2000000">2, 000, 000</option>
              <option value="2500000">2, 500, 000</option>
              <option value="3000000">3, 000, 000</option>
            </select>
          </div>
          <div className="col-lg-2 p-0 pb-1">
            <select class="custom-select form-control-lg mr-sm-2" id="maxPrice">
              <option selected>Max price...</option>
              <option value="3000000">3, 000, 000</option>
              <option value="2500000">2, 500, 000</option>
              <option value="2000000">2, 000, 000</option>
              <option value="1500000">1, 500, 000</option>
              <option value="1000000">1, 000, 000</option>
              <option value="750000">750, 000</option>
              <option value="500000">500, 000</option>
              <option value="250000">250, 000</option>
              <option value="100000">100, 000</option>
            </select>
          </div>
          <div className="col-12 col-lg-2 p-0 pl-2 my-2 justify-content-center d-flex d-lg-block">
            <a className="mt-5 btn--more text-uppercase text-white" onClick={this.sort}>Search</a>
          </div>
        </div>

      </div>
          <div className="container pt-5">
            <div className="row">
            {this.state.sorted.slice(0, this.state.visible).map((item, index) => {
              return (
                <Property history={this.props.history} id={item.id} price={item.price} beds={item.beds} baths={item.baths} sqft={item.sqft} address={item.address} city={item.city} image={item.image}/>
              );
            })}
            </div>
            {this.state.visible < this.state.sorted.length &&
            <div className="row justify-content-center pb-5">
              <a className="mt-5 btn--more text-uppercase text-white" onClick={this.loadMore}>Load More...</a>
            </div>
            }

          </div>
        </div>    
      </section> 
      );
    }
    return (
      <section id="properties" className="properties-bg">
        <div className="container">
        <div class="col-lg-12">
          <div class="pt-5">
            <p class="h1 text-uppercase justify-content-center d-flex">Properties</p>
              
            <div class="title-underline my-3 bg-secondary">
              <div class="title-underline__center"></div>
            </div>
            <div class="mx-2">
              <p class="text-center">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        </div>
        <div className="properties-bg pt-5">
        <div className="container">
        <div id="error" class="alert alert-danger animated bounceIn" style={{display: 'none'}} role="alert">
          Error your search is invalid
        </div>
        <div className="row">

          <div className="col-lg-3 p-0 pb-1">
            <select class="custom-select form-control-lg mr-sm-2" id="location">
              <option selected >Location...</option>
              <option value="Bellville, ON">Bellville, ON</option>
            </select>
          </div>
          <div className="col-lg-3 p-0 pb-1">
            <select class="custom-select form-control-lg mr-sm-2" id="minSqft">
              <option selected>Min sqft...</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
              <option value="2500">2500</option>
              <option value="3000">3000</option>
              <option value="3500">3500</option>
              <option value="4000">4000</option>
              <option value="4500">4500</option>
              <option value="5000">5000</option>
            </select>
          </div>
          <div className="col-lg-2 p-0 pb-1">
            <select class="custom-select form-control-lg mr-sm-2" id="minPrice">
              <option selected>Min price...</option>
              <option value="100000">100, 000</option>
              <option value="250000">250, 000</option>
              <option value="500000">500, 000</option>
              <option value="750000">750, 000</option>
              <option value="1000000">1, 000, 000</option>
              <option value="1500000">1, 500, 000</option>
              <option value="2000000">2, 000, 000</option>
              <option value="2500000">2, 500, 000</option>
              <option value="3000000">3, 000, 000</option>
            </select>
          </div>
          <div className="col-lg-2 p-0 pb-1">
            <select class="custom-select form-control-lg mr-sm-2" id="maxPrice">
              <option selected>Max price...</option>
              <option value="3000000">3, 000, 000</option>
              <option value="2500000">2, 500, 000</option>
              <option value="2000000">2, 000, 000</option>
              <option value="1500000">1, 500, 000</option>
              <option value="1000000">1, 000, 000</option>
              <option value="750000">750, 000</option>
              <option value="500000">500, 000</option>
              <option value="250000">250, 000</option>
              <option value="100000">100, 000</option>
            </select>
          </div>
          <div className="col-12 col-lg-2 p-0 pl-2 my-2 justify-content-center d-flex d-lg-block">
            <a className="mt-5 btn--more text-uppercase text-white" onClick={this.sort}>Search</a>
          </div>
        </div>

      </div>
          <div className="container pt-5">
            <div className="row">
            {this.state.items.slice(0, this.state.visible).map((item, index) => {
              return (
                <Property history={this.props.history} id={item.id} price={item.price} beds={item.beds} baths={item.baths} sqft={item.sqft} address={item.address} city={item.city} image={item.image}/>
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

