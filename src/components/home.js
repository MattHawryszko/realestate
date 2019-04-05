import React, { Component } from 'react';

import "../styles/home.css";

export default class App extends Component {
render() {
    return (
      <section id="home">
      <div className="container-fluid home-bg vh-100 vertical-center">
          <div className="col-12 my-auto">
            <div className="row justify-content-center">
                <h1 className="pt-5 text-center text-white font-bold">Find your dream home With LuxReality</h1>   
            </div>
            <div className="row justify-content-center">
              <h5 className="text-center text-white font-light">Love the home you buy, or we'll buy it back</h5>
              
            </div>
            <div className="row justify-content-center">
            <a className="mt-5 btn--default btn--contact text-uppercase" href="">contact us</a>
            </div>
          </div>
      </div>    
    </section>      
      );
  }
};

