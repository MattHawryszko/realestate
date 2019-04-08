import React, { Component } from 'react';
import Image from "../img/house1.jpg"

export default class App extends Component {
render() {
    return (
        <section id="about">
          <section id="about" className="sections">
          <div className="container-fluid pl-0">
            <div className="row">
              <div className="col-lg-8 pr-0 my-auto">
                <img src={Image} className="img-fluid d-none d-md-flex"/>
              </div>
              <div className="col-lg-4 pb-5 about-text">
              <div className="container">
                <div class="col-lg-12">
                  <div class="pt-5">
                    <p class="h1 text-uppercase justify-content-center d-flex">About us</p>
                    <div class="title-underline my-3 bg-secondary">
                      <div class="title-underline__center"></div>
                    </div>
                    <div class="mx-2">
                      <p class="text-center">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
                <p className="text-secondary px-4 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora incidunt et perferendis ratione quod accusamus sit dolor optio empora incidunt et perferendis ratione quod accusamus sit dolor optio eveniet vero</p>
                <div className="px-4 ">
                  <p><i className="fa fa-check text-primary" aria-hidden="true" /> <span>Friendly and <span className="font-weight-bold">professional</span> service</span></p>
                  <p><i className="fa fa-check text-primary" aria-hidden="true" /> <span>Honest competitive prices <span className="font-weight-bold">zero hidden fees</span></span></p>
                  <p><i className="fa fa-check text-primary" aria-hidden="true" /> <span>Available <span className="font-weight-bold">24 Hours</span> a day, <span className="font-weight-bold">7 Days</span> a week</span></p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>     
      );
  }
};

