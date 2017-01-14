import React from 'react';
import TheContainer from './main.js';
import FloatingMenu from './menu.js';
import HomeLink from './homelink.js';

const photoArray = [];
photoArray.push(
<img src={require("../assets/2scaled.jpg")} alt=""></img>,
<img src={require("../assets/3scaled.jpg")} alt=""></img>);


const menuSelector = {Selection:0};


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuSelector
        };    
    }  
    
    setSelection(x){
        this.state.menuSelector.Selection=x;
        this.setState({menuSelector: this.state.menuSelector});
    }
    
    render() {

    const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    top: 20,
    left: 'auto',
    position: 'fixed',
};
        
  console.log("menuselector change11 "+this.state.menuSelector.Selection);  
        
    return (        
        <div id="wrapper">
            <FloatingMenu 
                
                setSelection={this.setSelection.bind(this)}/>
            <TheContainer 
                menuSelector={this.state.menuSelector.Selection}
                photoArray={photoArray}
                setSelection={this.setSelection.bind(this)}/>
            
            //this is a div added ontop of the menu as a home button because the mfb plugin is not set up for that
            <HomeLink setSelection={this.setSelection.bind(this)} />
        </div>
        );
    }
    
}


    
    