import React, { Component } from 'react';
import "../styles/index.css";

import Navbar from "../components/navbar"
import Home from "../components/home";
import Properties from "../components/properties";
import Subscribe from "../components/subscribe";
import Agents from "../components/agents";
import Reviews from "../components/reviews";
import Footer from "../components/footer";

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
      	<Navbar />
        <Home />
        <Properties />
        <Agents />
        <Reviews />
        <Footer />
      </div>
    );
  }
}
