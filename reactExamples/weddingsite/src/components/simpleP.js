import React from 'react';
import Parallax from 'react-simple-parallax';


export default class TheContainer extends React.Component {
  render(){
  console.log("hello");
     
    return (   
         <div className="parallax">
    <div id="group1" className="parallax__group">
      <div className="parallax__layer parallax__layer--base">
        <div id="midground"></div>
	<div id="foreground"></div>
        
        <div className="title">
        <h1>James & Colleen</h1> 
            <br/>
        <h2>05/20/17</h2>
        </div>
      </div>
    </div>
    <div id="group2" className="parallax__group">
      <div className="parallax__layer parallax__layer--base">
        <div className="title">Base Laye22</div>
      </div>
      <div className="parallax__layer parallax__layer--back">
        <div className="title">Background Layer2</div>
      </div>
    </div>
    <div id="group3" className="parallax__group">
      <div className="parallax__layer parallax__layer--fore">
        <div className="title">Foreground Layer3</div>
      </div>
      <div className="parallax__layer parallax__layer--base">
        <div className="title">Base Layer3</div>
      </div>
    </div>
    <div id="group4" className="parallax__group">
      <div className="parallax__layer parallax__layer--base">
        <div className="title">Base Layer4</div>
      </div>
      <div className="parallax__layer parallax__layer--back">
        <div className="title">Background Layer4</div>
      </div>
      <div className="parallax__layer parallax__layer--deep">
        <div className="title">Deep Background Layer4</div>
      </div>
    </div>
    <div id="group5" className="parallax__group">
      <div className="parallax__layer parallax__layer--fore">
        <div className="title">Foreground Layer5</div>
      </div>
      <div className="parallax__layer parallax__layer--base">
        <div className="title">Base Layer5</div>
      </div>
    </div>
    <div id="group6" className="parallax__group">
      <div className="parallax__layer parallax__layer--back">
        <div className="title">Background Layer6</div>
      </div>
      <div className="parallax__layer parallax__layer--base">
        <div className="title">Base Layer6</div>
      </div>
    </div>
    <div id="group7" className="parallax__group">
      <div className="parallax__layer parallax__layer--base">
        <div className="title">Base Layer</div>
      </div>
    </div>
  </div>
        
    )
  }
}