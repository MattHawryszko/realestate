import React, { Component } from 'react';


import $ from "jquery";
import "bootstrap/js/dist/modal";

const delay = ms => new Promise(res => setTimeout(res, ms));

var previousId
window.onmousedown = function(event){
  $("li").click(
    async function(event) {
      event.preventDefault();
      var id = event.target.parentNode.className
      id = id.replace('active', '').trim()
      $('li').removeClass('active')
      $(event.target.parentNode).addClass('active')
      
      if(id !== previousId){
        $('html, body').animate({
          scrollTop: $("#"+id).offset().top
      }, 1000);
      previousId = id;
      }
      await delay(3000);
      previousId = null;
       
    }
  );
  
}

export default class App extends Component {
constructor(props) {
  super(props);



}
handleEvent = event => {
  const props = this.props;
  props.history.push('/')
};
render() {
  var is_root = window.location.pathname == "/";
  if(!is_root)
  {
  return (
    <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-dark" id="navbar">
    <div class="container">


        <a class="navbar-brand text-white font-bold text-md" onClick={this.handleEvent}>LuxReality</a>

    </div>
</nav>
<div class="modal fade p-0 m-0 w-100" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-bg" role="document">
  <div class="modal-content modal-bg p-0 m-0 ">
  <button type="button" class="close justify-content-end d-flex text-light-gray " data-dismiss="modal" aria-label="Close"><span className="h1" aria-hidden="true">&times;</span></button>
    <div class="modal-body modal-bg p-0 m-0 justify-content-center d-flex">
      <ul className="">
        <li className="home active"><a data-dismiss="modal" className="text-center">HOME</a></li>
        <li className="about"><a data-dismiss="modal" className="text-center">ABOUT ME</a></li>
        <li className="skills"><a data-dismiss="modal" className="text-center">SKILLS</a></li>
        <li className="projects"><a data-dismiss="modal" className="text-center">PROJECTS</a></li>
        
      </ul>
    </div>

  </div>
</div>
</div>
</div>
    );
  }
    return (
      <div>
      <nav class="navbar navbar-expand-sm navbar-light" id="navbar">
      <div class="container">
          <div className="row justify-content-between justify-content-md-end pt-2">
            <a href="#exampleModal" role="button" class="btn toggleNav pl-4 pt-1 pb-2 d-flex d-sm-none" data-toggle="modal"><i className="p-0 m-0 fas fa-bars toggleNav"></i></a>
          </div>

          <a class="navbar-brand text-white font-bold text-md">LuxReality</a>
          <div class="collapse navbar-collapse justify-content-end" id="navbar1">
              <ul class="navbar-nav">
                  <li class="home active">
                      <a class="nav-link text-white">Home</a>
                  </li>
                  <li class="properties">
                      <a class="nav-link text-white">Properties</a>
                  </li>
                  <li class="contact">
                      <a class="nav-link text-white">Contact</a>
                  </li>
                  <li class="about">
                      <a class="nav-link text-white">About</a>
                  </li>
              </ul>

          </div>
      </div>
  </nav>
  <div class="modal fade p-0 m-0 w-100" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-bg" role="document">
    <div class="modal-content modal-bg p-0 m-0 ">
    <button type="button" class="close justify-content-end d-flex text-light-gray " data-dismiss="modal" aria-label="Close"><span className="h1" aria-hidden="true">&times;</span></button>
      <div class="modal-body modal-bg p-0 m-0 justify-content-center d-flex">
        <ul className="">
          <li className="home active"><a data-dismiss="modal" className="text-center">HOME</a></li>
          <li className="about"><a data-dismiss="modal" className="text-center">ABOUT ME</a></li>
          <li className="skills"><a data-dismiss="modal" className="text-center">SKILLS</a></li>
          <li className="projects"><a data-dismiss="modal" className="text-center">PROJECTS</a></li>
          
        </ul>
      </div>

    </div>
  </div>
</div>
</div>
      );
  }
};

