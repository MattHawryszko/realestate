import React, { Component } from 'react';
var upOrDown = 0;
export default class App extends Component {
  componentWillMount(){
    if(upOrDown === 0){
      upOrDown = 1;
    }else{
      upOrDown = 0;
    }
}
render() {
  if(upOrDown){
    return (

      <div className="col-12 px-5 col-lg-6 left-img">
          <img src={this.props.image} class="img-fluid rounded property-img" alt="Responsive image" />
          <div class='text-box'>
          <br />
            <i class='price-text pt-3 pl-4'> {this.props.price} $</i>
            <br />
            <i class='location-text pt-3 pl-4 pb-0'> {this.props.city} </i>
            <br />
            <i class='address-text pl-4 mt-0'> {this.props.address} </i>
            <br />
            
            <i class="pl-3 fas fa-ruler-combined icon"></i><i class='sqft-text pb-0'> {this.props.sqft}sqft </i>
            <i class="pl-4 pb-0 fas fa-bed icon"></i> <i class='sqft-text pb-0'> {this.props.beds} </i>
            <i class="pl-5 pb-0 fas fa-toilet icon"></i><i class='sqft-text pb-0'> {this.props.baths} </i>
          </div>
      </div>
      
   
  );
  }else{
    return (

      <div className="col-12 px-5 col-lg-6 right-img">
          <img src={this.props.image} class="img-fluid rounded property-img" alt="Responsive image" />
          <div class='text-box'>
          <br />
            <i class='price-text pt-3 pl-4'> {this.props.price} $</i>
            <br />
            <i class='location-text pt-3 pl-4 pb-0'> {this.props.city} </i>
            <br />
            <i class='address-text pl-4 mt-0'> {this.props.address} </i>
            <br />
            
            <i class="pl-3 fas fa-ruler-combined icon"></i><i class='sqft-text pb-0'> {this.props.sqft}sqft </i>
            <i class="pl-4 pb-0 fas fa-bed icon"></i> <i class='sqft-text pb-0'> {this.props.beds} </i>
            <i class="pl-5 pb-0 fas fa-toilet icon"></i><i class='sqft-text pb-0'> {this.props.baths} </i>
          </div>
      </div>
      
   
  );
  }


  }
};

