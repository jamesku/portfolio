import React from 'react';


export default class Text extends React.Component {
    constructor(props){
        super(props);
        
    }  
    render() {
        
    console.log(this.props.textData);
        
    return (        
        <div>
            
        <h1>Colleen & James</h1>
        <h2>05/20/2017</h2>
        </div>
        );
    }
}


    
    