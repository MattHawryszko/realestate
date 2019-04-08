import React, { Component } from 'react';
import "../styles/index.css";
import "../styles/animate.css";

import Navbar from "../components/navbar"
import Home from "../components/home";
import Properties from "../components/properties";
import About from "../components/about";
import Agents from "../components/agents";
import Reviews from "../components/reviews";
import Footer from "../components/footer";

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
      	
        <Home />
        <Properties history={this.props.history} />
        <Agents />
        
        <Reviews />
        <About />
        <Footer />
      </div>
    );
  }
}
