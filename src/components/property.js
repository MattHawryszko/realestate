import React, { Component } from 'react';
var upOrDown = 0;
export default class App extends Component {
  
constructor(props) {
  super(props);

  this.state = {
    upOrDown: 0,
    imageStatus: false
  };


}
handleImageLoaded() {
  this.setState({ imageStatus: true });

}
handleImageErrored() {
  this.setState({ imageStatus: false });
}

componentWillMount(){
    
    if(upOrDown === 0){
      upOrDown = 1
      
      this.setState({ upOrDown: 1 }, () => upOrDown = 1);
      
    }else{
      upOrDown = 0
      this.setState({ upOrDown: 0 }, () => upOrDown = 0);
    }
}
render() {
  const style = this.state.imageStatus ? {} : {visibility: 'hidden'}
    return (
      <div className="col-12 px-5 pb-5 col-lg-6 left-img animated zoomIn delay-1s faster">
          <img src={this.props.image} style={style} class="img-fluid rounded property-img" onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageErrored.bind(this)} alt="Responsive image" />
          {this.state.imageStatus == true &&
          <div class='text-box'>
          <br />
            <i class='price-text pt-3 pl-4'> {this.props.price} $</i>
            <br />
            <i class='location-text pt-3 pl-4 pb-0'> {this.props.city} </i>
            <br />
            <i class='address-text pl-4 mt-0'> {this.props.address} </i>
            <br />
            
            <div>
            <i class="pl-3 fas fa-ruler-combined icon"></i><i class='sqft-text pb-0'> {this.props.sqft}sqft </i>
            <i class="pl-4 pb-0 fas fa-bed icon"></i> <i class='sqft-text pb-0'> {this.props.beds} </i>
            <i class="pl-5 pb-0 fas fa-toilet icon"></i><i class='sqft-text pb-0'> {this.props.baths} </i></div>
          
          </div>}
      </div>
      
   
  );
  }
};

