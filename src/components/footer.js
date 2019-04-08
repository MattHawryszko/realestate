import React, { Component } from 'react';

export default class App extends Component {
render() {
    return (
<footer id="footer" className="">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 p-5">
            <div className="row justify-content-center">
                <h3 className="text-center text-white font-bold">Lux<span className="location-text">Reality</span></h3>   
            </div>
            <p class="text-light-grey text-center d-none d-md-flex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora incidunt et perferendis ratione quod accusamus sit dolor optio empora incidunt et perferendis ratione quod accusamus sit dolor optio eveniet vero.</p>
          </div>
          
          <div class="col-lg-3 text-light-grey p-lg-5 my-auto">
            <p className="text-white">Contact us</p>
            <p><i class="fa fa-map-marker pr-2 location-text"></i>265 Enfield Pl Mississauga, ON</p>
            <p><i class="fa fa-phone pr-2 location-text"></i>(905) 275-2247</p>
            <p><i class="fas fa-fax pr-2 location-text"></i>(928) 222-2233</p>
            <p><span><i class="fa fa-envelope pr-2 location-text"></i></span><a href="mailto:info@luxreality.com" className="text-light-grey ">info@luxreality.com</a></p>

          </div>
          <div class="col-lg-3 text-light-grey p-lg-5 my-auto d-none d-md-inline">
            <p className="text-white">Usefull Links</p>
            <div className="row">
              <div className="col-6">
                <ul class="navbar-nav">
                    <li class="home active">
                        <a class="nav-link text-light-grey">Home</a>
                    </li>
                    <li class="properties">
                        <a class="nav-link text-light-grey">Properties</a>
                    </li>
                    <li class="contact">
                        <a class="nav-link text-light-grey">Contact</a>
                    </li>
                    <li class="about">
                        <a class="nav-link text-light-grey">About</a>
                    </li>
                </ul>
              </div>
              <div className="col-6">
                <ul class="navbar-nav">
                    <li class="home active">
                        <a class="nav-link text-light-grey">Our story</a>
                    </li>
                    <li class="properties">
                        <a class="nav-link text-light-grey">The Garuntee</a>
                    </li>
                    <li class="contact">
                        <a class="nav-link text-light-grey">FAQ</a>
                    </li>
                    <li class="about">
                        <a class="nav-link text-light-grey">Terms of Service</a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3  p-lg-5 pb-5">
            <p className="text-white">Connect with us</p>
            <a className="p-2" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook location-text text-md"></i></a>
            <a className="p-2" href="https://twitter.com/" target="_blank"><i class="fab fa-twitter location-text text-md"></i></a>
            <a className="p-2" href="https://plus.google.com/discover" target="_blank"><i class="fab fa-google-plus location-text text-md"></i></a>
            <a className="p-2" href="https://www.skype.com/en/" target="_blank"><i class="fab fa-skype location-text text-md"></i></a>
            <p className="pt-2 text-white">Sign up to our newsletter</p>
            <p className="text-light-grey">Subscribe to our newsletter to recive updates on the latest properties and best realestate locations</p>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Enter email" aria-label="Enter email" aria-describedby="basic-addon2" />
              <div class="input-group-append pl-2">
                <button class="btn btn-outline-secondary" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>   
      </footer>
      );
  }
};

