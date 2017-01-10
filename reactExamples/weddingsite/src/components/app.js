import React from 'react';
import TheContainer from './main.js';
import FloatingMenu from './menu.js';

export default class App extends React.Component {
    constructor(props){
        super(props);
        
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
    
    return (        
        <div id="wrapper">
            <div id="fixed">
        <FloatingMenu style={style}></FloatingMenu>
            </div>
        <div id="scroller">
        <TheContainer />
        </div>
        </div>
        );
    }
}


    
    