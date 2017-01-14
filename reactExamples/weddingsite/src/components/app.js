import React from 'react';
import TheContainer from './main.js';
import FloatingMenu from './menu.js';

const photoArray = [];
photoArray.push(
<img src={require("../assets/2scaled.jpg")} alt=""></img>,
<img src={require("../assets/3scaled.jpg")} alt=""></img>,
<img src={require("../assets/CJH.jpg")} alt=""></img>,
<img src={require("../assets/OLG.jpg")} alt=""></img>,
<img src={require("../assets/6.jpg")} alt=""></img>,
<img src={require("../assets/7.jpg")} alt=""></img>,
<img src={require("../assets/5.jpg")} alt=""></img>,
<img src={require("../assets/concert.jpg")} alt=""></img>,
<img src={require("../assets/8.jpg")} alt=""></img>,
<img src={require("../assets/4.jpg")} alt=""></img>);


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
        
    return (        
        <div id="wrapper">
            <FloatingMenu 
                setSelection={this.setSelection.bind(this)}/>
            <TheContainer 
                menuSelector={this.state.menuSelector.Selection}
                photoArray={photoArray}
                setSelection={this.setSelection.bind(this)}/>
        </div>
        );
    }
    
}


    
    