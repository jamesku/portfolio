import React from 'react';
import Text from './text.js';
import Rsvp from './rsvp.js';
import Details from './details.js';
import Gifts from './gifts.js';
import Accomodations from './accomodations.js';

const compArray = [
    <Text />,
    <Details />,
    <Rsvp />,
    <Gifts />,
    <Accomodations />
];

export default class TheContainer extends React.Component {
    
  render(){
    return (   
    <div>    
        <div>
            <img id="bg" src={require("../assets/heartbackground.png")} onClick={()=> this.handleClick()} alt=""></img>
        </div>
        
        <div id="mainText">
            {this.setComponent()}
        </div>
        
        <div id="bigPic">
            {this.props.photoArray[this.props.menuSelector*2]};
        </div>
            <div id="smallPic">
            {this.props.photoArray[this.props.menuSelector*2+1]};
        </div>
    </div>
    )
  }


    handleClick(){
        {this.props.setSelection(0)};
    }

    setComponent(){
        if(this.props.menuSelector === 0){
            return (compArray[0]);
        }
        if(this.props.menuSelector === 1){
            return (compArray[1]);
        }
        if(this.props.menuSelector === 2){
            return (compArray[2]);
        }
        if(this.props.menuSelector === 3){
            return (compArray[3]);
        }
        if(this.props.menuSelector === 4){
            return (compArray[4]);
        }
    }
}