import React from 'react';

export default class Accomodations extends React.Component {
    constructor(props){
        super(props);
        
    }  
    render() {
            
    return (        
        <div>  
            <h3>Its always hard to get a room in Austin, but we have a block available at</h3>
            <h2><a href ="https://www.google.com/maps/place/Marriott+South/@30.210766,-97.75561,17z/data=!3m1!4b1!4m5!3m4!1s0x8644ca726b107d21:0x401dff7e7d6507c5!8m2!3d30.210766!4d-97.753416">Marriott South</a></h2>
        <h4>Call and tell them you are with Rojas Kuhr Wedding </h4><br />
        <br />
        <h3>But also...</h3>
        <h2><a href ="https://www.airbnb.com">Try AirBnB!</a></h2>
        <h3>or...</h3>
        <h2><a href ="https://www.homeaway.com">Home Away!</a></h2>
        
        
        
        </div>
        );
    }
}
