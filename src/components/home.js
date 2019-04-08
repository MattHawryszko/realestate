import React, { Component } from 'react';

import "../styles/home.css";
import Navbar from "../components/navbar"

export default class App extends Component {
render() {
    return (
      <section id="home" className="home-bg ">
      <Navbar />
      <div className="container-fluid vh-100 vertical-center">
      
          <div className="col-12 my-auto">
            <div className="row justify-content-center animated bounceIn fast">
                <h1 className="pt-5 text-center text-white font-bold">Find your dream home With LuxReality</h1>   
            </div>
            <div className="row justify-content-center animated slideInLeft fast">
              <h5 className="text-center text-white font-light">Love the home you buy, or we'll buy it back</h5>
              
            </div>
            <div className="row justify-content-center pt-5">
            <li className="contact active"><a className="mt-5 btn--default btn--contact text-uppercase text-white">contact us</a></li>
            </div>
          </div>
      </div>    
    </section>      
      );
  }
};

