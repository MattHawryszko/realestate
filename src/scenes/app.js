import React, { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Index from "./index"

global.jQuery = require('jquery');

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
      	<Index history={this.props.history} />
      </div>
    );
  }
}
