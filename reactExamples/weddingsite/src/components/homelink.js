import React from 'react';

export default class HomeLink extends React.Component {
       constructor(props){
        super(props);
    }  
    
    
    render() {
     
    return (        
        <div id="homelink" onClick={()=> this.handleClick()}>  
        </div>
        );
    }
    
     handleClick(){
         console.log("yoyoyoyoyo")
         this.props.setSelection(0);
    }  
}

