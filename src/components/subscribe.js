import React, { Component } from 'react';

export default class App extends Component {
render() {
    return (
      <div className="subscribe-bg">
      <div className="container">
        <div class="row">
          <div class="col-lg-12 my-4 justify-content-between d-lg-flex">
            <div class="text">
              <p class="text-white h2"><i class="fas fa-envelope p-2"></i> Sign Up To Our Newsletter</p>
            </div>
            
            <div class="justify-content-center d-flex pt-2">
              <input type="email" id="email" class="form-control" placeholder="Enter email" />
              <a className="ml-2 btn--subscribe text-uppercase text-white text-center">Sign up</a>
            </div>
            
          </div>
        </div>
        </div>
      </div>     
      );
  }
};

