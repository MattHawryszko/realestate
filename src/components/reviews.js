import React, { Component } from 'react';

export default class App extends Component {
render() {
    return (
      <div>
      <div className="review-bg1"><div className="review-bg"><div className="container-fluid">
      <div class="col-lg-12">
        <div class="pt-2">
          <p class="h1 text-uppercase justify-content-center d-flex">Reviews</p>
            
          <div class="title-underline my-3 bg-secondary">
            <div class="title-underline__center"></div>
          </div>
          <div class="mx-2">
            <p class="text-center">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
        <div className="row pt-5">
          <div className="col-lg-4 pb-1">
            <div className="card">
              <div className="row">
                <div className="col-3 mt-5">
                  <div className="pl-3">
                  <h2 class="text-brown mt-2 pt-2 pl-3 far fa-user"></h2>
                  </div>
                </div>
                <div className="col-9">
                  <h2 className="pt-5 city-text">Melis Hogson</h2>
                  <p className="pr-5 pb-5 text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum sem libero. Vestibulum auctor enim ut vehicula vulputate. Fusce at.</p>              </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pb-1">
            <div className="card">
              <div className="row">
                <div className="col-3 mt-5">
                  <div className="pl-3">
                  <h2 class="text-brown mt-2 pt-2 pl-3 far fa-user"></h2>
                  </div>
                </div>
                <div className="col-9">
                  <h2 className="pt-5 city-text">John Hamilton</h2>
                  <p className="pr-5 pb-5 text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum sem libero. Vestibulum auctor enim ut vehicula vulputate. Fusce at.</p>              </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pb-3">
            <div className="card">
              <div className="row">
                <div className="col-3 mt-5">
                  <div className="pl-3">
                  <h2 class="text-brown mt-2 pt-2 pl-3 far fa-user"></h2>
                  </div>
                </div>
                <div className="col-9">
                  <h2 className="pt-5 city-text">Richard Doblin</h2>
                  <p className="pr-5 pb-5 text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum sem libero. Vestibulum auctor enim ut vehicula vulputate. Fusce at.</p>              </div>
                </div>
              </div>
            </div>
        </div>
      </div>  </div>

      </div>
      
      
      </div>      
      );
  }
};

