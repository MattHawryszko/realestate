import React, { Component } from 'react';


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
import map from "../img/staticmap.png"

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      items: [],
      home: []
    };
  

  }
  componentWillMount() {
    window.scrollTo(0, 0);
    this.setState({
      items: [{
        id: "10001",
        title: "Two Bedroom Suites Niagara West for Rent - 39 Niagara Street",
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
        title: "Luxury Apartment Near Squar One Mall",
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
        title: "ELGIN EAST AT BAYVIEW NEW CONDOS & TOWNS",
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
        title: "FURNISHED 2 BEDROOM+2 BATHROOM HARBORFRONT CONDO",
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
        title: "Renovated 2 Bedroom (Birchmount Rd. & Sheppard Ave. E)",
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
        title: "BRAND NEW GORGEOUS 1 BEDROOM! Close to the lake!",
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
        title: "Fully Renovated, near the Sheridan Centre & QEW (Mississauga)",
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
        title: "Renovated Bachelor near The Danforth! (Burnhill Rd/Warden Ave)",
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
        title: "Renovated 2 Bedroom, 4 Appliances & Balcony! Pet Friendly!",
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
        title: "Great Home for Single Buyer or Couple - Newmarket",
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
        title: "Luxury 1 Bedroom in The Beaches! Pet Friendly!",
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
        title: "Platinum VVIP Access to D’or Condos",
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
  componentDidMount(){
    this.findHome();
  }
  findHome(){
   var items = this.state.items;
   var found = false;
   console.log(items)
   items.forEach(element => {
      if(element.id === this.props.match.params.id){
        console.log(element.address)
        this.setState( {home: element})
        found = true;
      }
    });
    if(!found){
      window.location.href = '/'+this.props.match.params.id;
    }
  }
  render() {
    return (
      <div className="w-100 agent-bg">
      <Navbar history={this.props.history} />
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-8 pt-5">
              <h3>{this.state.home.title}</h3>
              <h3 className="text-success">${this.state.home.price}</h3>
              <div className="row">
                <div className="col-8">
                <img src={this.state.home.image} className="img-fluid"/>
                </div>
                <div className="col-4">
                  <img src={Image} className="img-fluid pb-1"/>
                  <img src={Image2} className="img-fluid pb-1"/>
                  <img src={Image3} className="img-fluid pb-1"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-12">
                <h3 className="location-text">Description</h3>
                  <p className="text-light-grey pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis augue, auctor et lacus id, ultricies mollis lectus. Donec ac ipsum vitae velit consectetur dignissim a at sem. Mauris posuere vitae ligula eget porta. Curabitur condimentum eros sed lectus aliquet, in facilisis nisi molestie. Maecenas ultricies, metus a tempor dictum, lacus risus lacinia mi, ac aliquam eros eros a lacus. Phasellus nisl dui, eleifend eget nisl et, lobortis aliquam augue. Vivamus eu justo ut diam bibendum iaculis eu id nibh. Suspendisse porta luctus eleifend. Ut iaculis blandit dui, non aliquet mauris luctus id. Integer mollis nisi neque, nec egestas quam vehicula sed. Morbi non justo commodo, lacinia nulla quis, tempor elit. Proin sed tortor metus. Fusce ut lectus dictum, bibendum erat a, tincidunt sapien. Proin dictum varius nisl. Pellentesque lacinia imperdiet neque, ut condimentum ex accumsan sit amet. Etiam tempor nulla porta convallis cursus.

Integer eget orci diam. Proin ultrices dolor vitae lectus feugiat, sit amet pellentesque mi tempus. Nullam pretium mi sem, in scelerisque est pellentesque et. Pellentesque viverra lacus ut lacinia condimentum. Vestibulum magna nulla, semper a enim nec, varius elementum mauris. Donec dolor eros, lobortis ut blandit varius, sollicitudin eu libero. Nunc semper molestie tortor, dictum ullamcorper massa tempus at. Vivamus commodo justo orci, nec efficitur odio condimentum nec. In fermentum, nibh quis tempus laoreet, est felis aliquet magna, in volutpat erat nisi vel diam. Vestibulum non tellus ut ligula fermentum dignissim. Etiam id risus sed ipsum pellentesque faucibus. Ut gravida, nulla vitae accumsan fringilla, massa mi faucibus elit, id posuere orci ipsum ut nisl. Etiam vel diam dictum, feugiat arcu quis, tincidunt dui. Proin consectetur scelerisque nisi ac interdum. Maecenas aliquet, diam pellentesque feugiat suscipit, ante risus tempus elit, a consequat nulla arcu tincidunt neque. In imperdiet imperdiet turpis sed faucibus.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 pt-5">
              <div className="card">
                <img src={map}/>
                <div className="card-body">
                  <p className="text-light-grey"><span class="fas fa-map-marker-alt text-md location-text pr-3"></span>{this.state.home.address}</p>
                  <p className="text-light-grey"><span class="fas fa-city text-md location-text pr-3"></span>{this.state.home.city}</p>
                  <p className="text-light-grey"> <span class="fas fa-phone-square text-md location-text pr-3"></span>289 999 2223</p>
                </div>
              </div>
              <div className="card my-4">
                <div className="card-body">
                  <p className="location-text text-center">Contact Us</p>
                  <textarea type="text" rows="5" class="form-control" placeholder="Your message" aria-label="Enter email" aria-describedby="basic-addon2" />
                  <div class="input-group-append justify-content-center pt-3">
                    <button class="btn btn-outline-secondary" type="button">Send Message</button>
                  </div>
                </div>
              </div>
            </div>

 
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}
